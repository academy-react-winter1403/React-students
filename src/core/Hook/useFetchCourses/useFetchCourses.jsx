import { useEffect, useState } from "react";
import { getApi } from "../../services/api";

const useFetchCourses = (searchTerm, sortParam = 'popular', itemsPerPage = 6) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    setError(null);

    try {
      let apiUrl = `/Home/GetCoursesWithPagination`;
      const queryParams = [];

      if (searchTerm) {
        queryParams.push(`Query=${searchTerm}`);
      }
      if (sortParam === 'CostDown') {
        queryParams.push('?CostDown='); 
      } else if (sortParam === 'CostUp') {
        queryParams.push('?CostUp=');   
      } else if (sortParam === 'Popular') {
        queryParams.push('?Popularity='); 
      }


      if (itemsPerPage) {
        queryParams.push(`PageSize=${itemsPerPage}`); 
      }
      
      if (queryParams.length > 0) {
        apiUrl += `?${queryParams.join('&')}`;
      }

      const data = await getApi(apiUrl);
      setCourses(data.courseFilterDtos);
    } catch (err) {
      setError(err);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi(); 
  }, [searchTerm, sortParam, itemsPerPage]); 

  return { courses, loading, error };
};

export { useFetchCourses };
import { useEffect, useState, useMemo } from "react";
import { getApi } from "../../services/api";

const useFetchCourses = (searchTerm, sortParam = 'popular', itemsPerPage = 6, minPrice = null, maxPrice = null) => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllCourses = async () => {
    setLoading(true);
    setError(null);

    try {
      let apiUrl = `/Home/GetCoursesWithPagination`;
      const queryParams = [];

      if (searchTerm) {
        queryParams.push(`Query=${searchTerm}`);
      }
      
      if (sortParam === 'CostDown') {
        queryParams.push('CostDown=true');
      } else if (sortParam === 'CostUp') {
        queryParams.push('CostUp=true');
      } else if (sortParam === 'Popular') {
        queryParams.push('Popularity=true');
      }

      if (itemsPerPage) {
        queryParams.push(`PageSize=${itemsPerPage}`);
      }
      
      if (queryParams.length > 0) {
        apiUrl += `?${queryParams.join('&')}`;
      }

      const data = await getApi(apiUrl);
      setAllCourses(data.courseFilterDtos);
    } catch (err) {
      setError(err);
      setAllCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, [searchTerm, sortParam, itemsPerPage]);

  const filteredCourses = useMemo(() => {
    if (minPrice === null && maxPrice === null) {
      return allCourses;
    }

    return allCourses.filter(course => {
      const courseCost = course.Cost;

      if (minPrice !== null && maxPrice !== null) {
        return courseCost >= minPrice && courseCost <= maxPrice;
      } else if (minPrice !== null) {
        return courseCost >= minPrice;
      } else if (maxPrice !== null) {
        return courseCost <= maxPrice;
      }
      return true;
    });
  }, [allCourses, minPrice, maxPrice]);

  return { courses: filteredCourses, loading, error };
};

export { useFetchCourses };
import { useEffect, useState } from "react";
import { getApi } from "../../services/api";

const useFetchCourses = (searchTerm) => {
  const [courses, setCourses] = useState([]);

  const fetchApi = async (query) => {
    try {
      const apiUrl = `/Home/GetCoursesWithPagination${query ? `?Query=${query}` : ''}`;
      const data = await getApi(apiUrl);
      setCourses(data.courseFilterDtos);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchApi(searchTerm);
  }, [searchTerm]);

  return { courses };
};

export { useFetchCourses };
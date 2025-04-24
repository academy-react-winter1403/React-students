import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchCourses = () => {

  const [courses, setCourses] = useState([]);
  
  const fetchApi = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination")
    setCourses(data.courseFilterDtos)
  }



  useEffect(() => {
    fetchApi();
  }, [])

  
  return { courses }
}

export { useFetchCourses }
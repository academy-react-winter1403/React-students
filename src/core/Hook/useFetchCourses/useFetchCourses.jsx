import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchCourses = () => {

  const [courses, setCourses] = useState([]);
  
  const fetchApi = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&CostDown=&CostUp=&StartDate=&EndDate=&TeacherId=")
    setCourses(data.courseFilterDtos)
  }



  useEffect(() => {
    fetchApi();
  }, [])

  
  return { courses }
}

export { useFetchCourses }
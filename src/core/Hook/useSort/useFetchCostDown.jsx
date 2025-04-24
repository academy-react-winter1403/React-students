import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchCourses = () => {

  const [fetchCostDown, setFetchCostDown] = useState([]);
  
  const fetchApi = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination?CostDown=")
    setFetchCostDown(data.courseFilterDtos)
  }



  useEffect(() => {
    fetchApi();
  }, [])

  
  return { fetchCostDown }
}

export { useFetchCourses }
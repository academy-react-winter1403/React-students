import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchCourse = () => {
    const [Course, setCourse] = useState([])

    const fetchApi = async () => {
      const data = await getApi("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&CostDown=&CostUp=&StartDate=&EndDate=&TeacherId=")
      setCourse(data.courseFilterDtos)
    }
  
    useEffect(() => {
      fetchApi()
    }, [])

    return { Course }
}

export { useFetchCourse }
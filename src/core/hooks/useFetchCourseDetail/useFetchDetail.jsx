import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services/api";

const useFetchDetail = () => {
  const params = useParams()

  const [course, setCourse] = useState([])

  const fetchApi = async () => {
    const res = await getApi(`/Home/GetCourseDetails?CourseId=${params.courseId}`)
    setCourse(res)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return { course }

}

export { useFetchDetail}
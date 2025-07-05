import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services/api";

const useFetchBlog = () => {
  const params = useParams();

  const [blog, setBlog] = useState([])

  const fetchApi = async () => {
    const res = await getApi(`/News/${params.id}`)
    console.log(res)
    res?.detailsNewsDto && setBlog(res?.detailsNewsDto)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return { blog }

}

export { useFetchBlog}
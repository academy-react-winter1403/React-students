import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services/api";

const useFetchBlog = () => {
  const params = useParams()
  console.log(params);

  const [blog, setBlog] = useState([])

  const fetchApi = async () => {
    const res = await getApi(`/News/${params.blogId}`)
    setBlog(res.detailsNewsDto)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return { blog }

}

export { useFetchBlog}
import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchBlogs = () => {

    const[blogs , setBlogs] = useState([]);

    const fetchApiWeeklyBlogs = async () => {
        const blogsApi = await getApi(`/News?PageNumber=1&RowsOfPage=10`);
        console.log(blogsApi.news)
        setBlogs(blogsApi.news);
    }

    useEffect(() => {
        fetchApiWeeklyBlogs();
    }, [])
    
    return { blogs }
}

export { useFetchBlogs }
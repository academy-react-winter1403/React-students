import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchBlogs = () => {

    const[blogs , setBlogs] = useState([]);

    const fetchApiWeeklyBlogs = async () => {
        const blogsApi = await getApi("/News/GetListNewsCategory");
        setBlogs(blogsApi);
    }

    useEffect(() => {
        fetchApiWeeklyBlogs();
    }, [])
    
    return { blogs }
}

export { useFetchBlogs }
import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const fetchWeeklyBlogs = () => {

    const[weeklyBlogs , setWeeklyBlogs] = useState([]);

    const fetchApiWeeklyBlogs = async () => {
        const courseWeeklyBlogs = await getApi("/News/GetNewsWithCategory/:Id");
        setWeeklyBlogs(courseWeeklyBlogs);
    }

    useEffect(() => {
        fetchApiWeeklyBlogs();
    }, [])
    
    return { weeklyBlogs }
}

export default fetchWeeklyBlogs
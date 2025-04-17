import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const fetchFallCourses = () => {

    const[fallCourses , setFallCourses] = useState([]);

    const fetchApiFallCourses = async () => {
        const courseFallCourses = await getApi("/Home/GetCoursesTop?Count=3");
        setFallCourses(courseFallCourses);
    }

    useEffect(() => {
        fetchApiFallCourses();
    }, [])
    
      
    return { fallCourses }

}

export default fetchFallCourses
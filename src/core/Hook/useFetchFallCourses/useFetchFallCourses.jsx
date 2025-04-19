import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchFallCourses = () => {

    const[fallCourses , setFallCourses] = useState([]);

    const fetchApiFallCourses = async () => {
        const fallCoursesApi = await getApi("/Home/GetCoursesTop?Count=3");
        setFallCourses(fallCoursesApi);
    }

    useEffect(() => {
        fetchApiFallCourses();
    }, [])
    
      
    return { fallCourses }

}

export default useFetchFallCourses
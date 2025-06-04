import { useEffect, useState } from 'react'
import { getApi } from '../../services/api'

const useFetchFavCourses = () => {

    const [favCourses , setFavCourses] = useState([]);

    const fetchApiFavCourses = async () => {
        const favCoursesApi = await getApi('/SharePanel/GetMyFavoriteCourses');
        setFavCourses(favCoursesApi);
    }

    useEffect(() => {
        fetchApiFavCourses();
    }, [])
    
    return { favCourses }
}

export { useFetchFavCourses }
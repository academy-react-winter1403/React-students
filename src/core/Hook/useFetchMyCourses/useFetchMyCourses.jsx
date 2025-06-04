import { useEffect, useState } from 'react'
import { getApi } from '../../services/api'

const useFetchMyCourses = () => {

    const [myCourses , setMyCourses] = useState([]);

    const fetchApiMyCourses = async () => {
        const myCoursesApi = await getApi('/SharePanel/GetMyCourses');
        setMyCourses(myCoursesApi);
    }

    useEffect(() => {
        fetchApiMyCourses();
    }, [])
    
    return { myCourses }
}

export { useFetchMyCourses }
import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const useFetchTeachers = () => {

    const[teachers , setTeachers] = useState([]);

    const fetchApiMonthlyTeachers = async () => {
        const courseTeachers = await getApi("/Home/GetTeachers");
        setTeachers(courseTeachers);
    }

    useEffect(() => {
        fetchApiMonthlyTeachers();
    }, [])
    
      
    return { teachers }

}

export default useFetchTeachers
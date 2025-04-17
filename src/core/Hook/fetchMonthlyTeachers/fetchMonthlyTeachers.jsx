import { useEffect, useState } from "react"
import { getApi } from "../../services/api"

const fetchMonthlyTeachers = () => {

    const[monthlyTeachers , setMonthlyTeachers] = useState([]);

    const fetchApiMonthlyTeachers = async () => {
        const courseMonthlyTeachers = await getApi("/Course/TeacherCourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query");
        setMonthlyTeachers(courseMonthlyTeachers);
    }

    useEffect(() => {
        fetchApiMonthlyTeachers();
    }, [])
    
      
    return { monthlyTeachers }

}

export default fetchMonthlyTeachers
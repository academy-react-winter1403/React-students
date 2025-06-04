import { useEffect, useState } from 'react'
import { getApi } from '../../services/api'

const useFetchMyReserveds = () => {

    const [myReserveds , setMyReserveds] = useState([]);

    const fetchApiMyReserveds = async () => {
        const myReservedsApi = await getApi('/SharePanel/GetMyCoursesReserve');
        setMyReserveds(myReservedsApi);
    }

    useEffect(() => {
        fetchApiMyReserveds();
    }, [])
    
    return { myReserveds }
}

export { useFetchMyReserveds }
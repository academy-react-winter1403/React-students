import { useEffect, useState } from 'react'
import { getApi } from '../../services/api'

const useFetchFavBlogs = () => {

    const [favBlogs , setFavBlogs] = useState([]);

    const fetchApiFavBlogs = async () => {
        const favBlogsApi = await getApi('/SharePanel/GetMyFavoriteNews');
        setFavBlogs(favBlogsApi);
    }

    useEffect(() => {
        fetchApiFavBlogs();
    }, [])
    
    return { favBlogs }
}

export { useFetchFavBlogs }
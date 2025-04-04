import React from 'react'

const useSort = () => {


  let sortFlag = false;

  const [filter, setFilter] = useState([])

  const sortApi = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination?CostDown=&CostUp=")
    setFilter(data.courseFilterDtos);
    sortFlag = true;
  }
  
  useEffect(() => {
    sortApi()
  }, [sortFlag])





  return (
    {filter}
  )
}

export default useSort
import React from 'react'

const useSort = () => {

  const [filter, setFilter] = useState(false)

  const sortApi = async () => {
    const data = await getApi("/Home/GetCoursesWithPagination?CostDown=&CostUp=")
    setFilter(data.courseFilterDtos);
    sortFlag = true;
  }
  
  useEffect(() => {
    sortApi()
  }, [filter])





  return (
    {filter}
  )
}

export default useSort
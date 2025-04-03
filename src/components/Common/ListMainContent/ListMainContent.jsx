import React from 'react'
import Side from '../../CourseList/Side'
import ListMain from '../../Common/ListMainContent/ListMain'



const ListMainContent = () => {


  const ListMainData = {
    sortingHeading: "ترتیب",
    sort1: "محبوب ترین",
    sort2: "ارزان ترین",
    sort3: "گران ترین",
    showingCounter: "تعداد نمایش",
    showingNumber: "9"
  } 





  return (
    <div className="flex justify-center w-full border   ts:gap-[4px] ts:mt-[4px] ts:px-[8px]   os:gap-[12px] os:mt-[8px] os:px-[20px]   sm:gap-[24px] sm:mt-[8px] sm:px-[32px]   lg:gap-[40px] lg:mt-[10px] lg:px-[64px]">
      <Side/>
      <ListMain data={ListMainData}/>
    </div>
  )
}

export default ListMainContent
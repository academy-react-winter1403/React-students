import React from 'react'

const Courses = () => {
  return (
    <div>
      <div className="content4 h-[400px] border">
        <div className="text-center border">
          <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">دسته بندی</button>
          <h2 className="mt-[10px] text-center">دسته بندی دوره های ما</h2>
        </div>
        <div className="flex justify-center gap-[20px] h-[300px] mt-[20px] border">
          <div className="w-[20%] h-[210px] pr-[20px] border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[105px]">ری اکت جی اس</h3>
            <p className="text-[13px] text-gray-400">کتابخانه جاوااسکریپت</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[105px]">جاوااسکریپت</h3>
            <p className="text-[13px] text-gray-400">زبان برنامه نویسی</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[105px]">پایتون</h3>
            <p className="text-[13px] text-gray-400">زبان برنامه نویسی</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] bg-gray-300 rounded-[50px]">
              <img src="" alt=""/>
              <img src="" alt=""/>
            </div>
            <h3 className="mt-[105px]">CSS و HTML</h3>
            <p className="text-[13px] text-gray-400">ساختار طراحی وب</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses

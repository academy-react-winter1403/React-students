import React from 'react'

const FallCourses = () => {
  return (
    <div>
      <div className="content5   h-[460px] border">
        <div className="text-center border">
          <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">دوره ها</button>
          <h2 className="mt-[5px] text-center">دوره های جدید پاییزه</h2>
        </div>
        <div className="flex justify-center items-center gap-[20px] h-[300px] mt-[20px] border">
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#6F8EFF]">
              <img src="../public/react(1).png" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px]">4,200,000 تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#EEEEEE]">
              <img src="../public/html-5(1).png" alt=""/>
              <img src="../public/css-3(1).png"/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px]">دوره html و CSS</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px]">500,000 تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#DAE01E]">
              <img src="../public/java-script(1).png" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px]">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px]">2,000,000 تومان</span>
            </div> 
          </div>
        </div>
          <button className="flex justify-center items-center w-[8%] h-[35px] mx-[auto] text-[15px] text-white bg-[#A74DD1] rounded-[10px]">مشاهده همه</button>
      </div>
    </div>
  )
}

export default FallCourses

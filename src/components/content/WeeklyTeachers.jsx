import React from 'react'

const WeeklyTeachers = () => {
  return (
    <div>
      <div className="content7   ">
        <div className="text-center border">
          <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">اساتید</button>
          <h2 className="mt-[5px] text-center">اساتید برتر این ماه</h2>
        </div>
        <div className="flex justify-center gap-[20px] h-[250px] mt-[20px] border">
          <div className="w-[25%] h-[210px] pr-[20px] border-2 border-[#E6EE03] rounded-[10px]">
            <h3 className="mt-[10px]">رتبه اول</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px]">علی رمضانی</span>
                <p className="text-[12px] text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-first-place.png" alt=""/>
            </div>
          </div>
          <div className="w-[25%] h-[210px] pr-[20px] border-2 border-[#DADADA] rounded-[10px]">
            <h3 className="mt-[10px]">رتبه دوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px]">علی رمضانی</span>
                <p className="text-[12px] text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-second-place.png" alt=""/>
            </div>
          </div>
          <div className="w-[25%] h-[210px] pr-[20px] border-2 border-[#FFBF6C] rounded-[10px]">
            <h3 className="mt-[10px]">رتبه سوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px]">علی رمضانی</span>
                <p className="text-[12px] text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-third-place.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyTeachers

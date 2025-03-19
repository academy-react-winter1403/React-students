import React, { useEffect, useState } from 'react'
import { getApi } from '../../core/services/api'

const Content = () => {
  return (
    <div>
      <div className="content1  w-[100%] h-[250px] pt-[60px] text-center border">
        <p className="text-[25px] font-bold">با آکادمی سپهر میتونی از کدنویسی<span> نهایت لذت </span>رو ببری</p>
        <p className="mt-[10px] text-[12px] font-bold text-gray-500">آکادمی سپهر همیشه در تلاش بوده تا محیطی پرانرژی را برای علاقه مندان به حوزه برنامه نویسی و کدنویسی و طراحی وب سایت را فراهم کند.</p>
        <div className="flex w-[15%] h-[40px] justify-center items-center gap-[20px] mx-[auto] mt-[20px] border">
          <button className="w-[38%] h-[30px] text-[12px] font-bold text-white bg-[#A74DD1] rounded-[10px]">شروع یادگیری</button>
          <button className="w-[40%] h-[30px] text-[12px] font-bold border rounded-[10px]">درباره ما</button>
        </div>
      </div>




      <div className="content2  h-[300px] border"></div>




      <div className="content3  flex h-[400px] border">
        <div className="w-[50%] h-[400px] px-[80px]">
          <button className="w-[12%] h-[30px] mt-[10px] text-[12px] font-bold text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">درباره آکادمی</button>
          <h2 className="mt-[10px] text-[25px] font-bold">آکادمی سپهر</h2>
          <p className="mt-[20px] text-[15px] font-semibold">آکادمی سپهر با 20 سال سابقه آموزش تخصصی در زمینه کدنویسی و برنامه نویسی در سنین کودکی تا بزرگسال در محیطی جامع و پیشرفت متداول در تمامی مهارت ها در کنار اساتید بزرگ از سراسر جهان. اینجا مکانی برای بدست اوردن رویاهای شماست.</p>
        </div>
        <div className="flex justify-center items-end gap-[25px] w-[50%] h-[400px] border"> 
          <div className="flex justify-center items-end w-[25%] h-[180px] mb-[20px] bg-[#F5F5F5] rounded-[15px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[5px]">اساتید</p>
              <p className="text-[25px] font-bold">96</p>
            </div>
          </div>
          <div className="flex justify-center items-end w-[25%] h-[280px] mb-[20px] bg-[#E6C5F4] rounded-[15px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[5px]">دوره</p>
              <p className="text-[25px] font-bold">153</p>
            </div>
          </div>
          <div className="flex justify-center items-end w-[25%] h-[350px] mb-[20px] bg-[#893FAB] rounded-[15px]">
            <div className="flex justify-center items-end gap-[20px] mb-[20px]">
              <p className="mb-[5px] text-white">دانشجو</p>
              <p className="text-[25px] font-bold text-white">232</p>
            </div>
          </div>
        </div>
      </div>





      <div className="content4 h-[400px] border">
        <button className="w-[8%] h-[30px] mx-[auto] mt-[20px] text-[13px] text-[#A74DD1] font-bold bg-[#F1D1FF]">دسته بندی</button>
        <h2 className="mt-[5px] text-center font-bold">دسته بندی دوره های ما</h2>
        <div className="flex justify-center gap-[20px] h-[300px] mt-[20px] border">
          <div className="w-[20%] h-[210px] pr-[20px] border border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img className="w-[100%] h-[20px]" src="../public/react.png" alt=""/>
            </div>
            <h3>ری اکت جی اس</h3>
            <p className="text-[13px] font-semibold text-gray-400">کتابخانه جاوااسکریپت</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img className="w-[90%] h-[20px]" src="../public/java-script.png" alt=""/>
            </div>
            <h3>جاوااسکریپت</h3>
            <p className="text-[13px] font-semibold text-gray-400">زبان برنامه نویسی</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] p-[5px] bg-gray-300 rounded-[50px]">  
              <img className="w-[90%] h-[20px]" src="../public/python.png" alt=""/>
            </div>
            <h3>پایتون</h3>
            <p className="text-[13px] font-semibold text-gray-400">زبان برنامه نویسی</p>
          </div>
          <div className="w-[20%] h-[210px] pr-[20px] border border-[2px] border-gray-300 rounded-[10px]">
            <div className="flex justify-center items-center w-[12%] h-[30px] mt-[10px] bg-gray-300 rounded-[50px]">
              <img className="w-[50%] h-[15px]" src="../public/html-5.png" alt=""/>
              <img className="w-[50%] h-[15px]" src="../public/css-3.png" alt=""/>
            </div>
            <h3>CSS و HTML</h3>
            <p className="text-[13px] font-semibold text-gray-400">ساختار طراحی وب</p>
          </div>
        </div>
      </div>





      <div className="content5   h-[460px] border">
        <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] font-bold text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">دوره ها</button>
        <h2 className="mt-[5px] text-center font-bold">دوره های جدید پاییزه</h2>
        <div className="flex justify-center items-center gap-[20px] h-[300px] mt-[20px] border">
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#6F8EFF]">
              <img src="../public/react(1).png" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px] font-semibold">4,200,000 تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#EEEEEE]">
              <img src="../public/html-5(1).png" alt=""/>
              <img src="../public/css-3(1).png"/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">دوره html و CSS</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px] font-semibold">500,000 تومان</span>
            </div> 
          </div>
          <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
            <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#DAE01E]">
              <img src="../public/java-script(1).png" alt=""/>
            </div>
            <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">دوره جاوااسکریپت</h3>
            <div className="flex justify-between items-center">
              <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                <img src="../public/mortarboard-02.png" alt=""/>
                <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
              </div>
              <span className="ml-[10px] text-[12px] font-semibold">2,000,000 تومان</span>
            </div> 
          </div>
        </div>
        <button className="flex justify-center items-center w-[8%] h-[35px] text-[15px] font-semibold text-white bg-[#A74DD1] rounded-[10px]">مشاهده همه</button>
      </div>






      <div className="content6   ">
        <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] font-bold text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">بلاگ ها</button>
        <h2 className="mt-[5px] text-center font-bold">بلاگ های این هفته</h2>
        <div>
          <div className="flex justify-center items-center gap-[20px] h-[300px] mt-[20px] border">
            <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
              <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#DAE01E]">
                <img src="../public/java-script(1).png" alt=""/>
              </div>
              <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">نقشه راه فول استک جاوااسکریپت</h3>
              <div className="flex justify-between items-center">
                <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                  <img src="../public/mortarboard-02.png" alt=""/>
                  <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
                </div>
                <div className="flex justify-center gap-[10px]">
                  <div className="flex items-center border">
                    <span>6</span>
                    <img src="../public/thumbs-up.png" alt=""/>
                  </div>
                  <div className="flex items-center border">
                    <span>20</span>
                    <img src="../public/view.png" alt=""/>
                  </div>
                </div>
              </div> 
            </div>
            <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
              <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#DAE01E]">
                <img src="../public/java-script(1).png" alt=""/>
              </div>
              <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">نقشه راه فول استک جاوااسکریپت</h3>
              <div className="flex justify-between items-center">
                <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                  <img src="../public/mortarboard-02.png" alt=""/>
                  <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
                </div>
                <div className="flex justify-center gap-[10px]">
                  <div className="flex items-center border">
                    <span>6</span>
                    <img src="../public/thumbs-up.png" alt=""/>
                  </div>
                  <div className="flex items-center border">
                    <span>20</span>
                    <img src="../public/view.png" alt=""/>
                  </div>
                </div>
              </div> 
            </div>
            <div className="overflow-hidden w-[25%] h-[260px] border rounded-[15px]">
              <div className="flex justify-center items-center w-[100%] h-[180px] bg-[#DAE01E]">
                <img src="../public/java-script(1).png" alt=""/>
              </div>
              <h3 className="mt-[5px] mr-[10px] text-[14px] font-bold">نقشه راه فول استک جاوااسکریپت</h3>
              <div className="flex justify-between items-center">
                <div className="right  flex items-center gap-[5px] w-[50%] h-[35px] mt-[10px] p-[5px] border">
                  <img src="../public/mortarboard-02.png" alt=""/>
                  <span className="text-[12px] font-semibold text-gray-500">محمدحسین بحرالعلومی</span>
                </div>
                <div className="flex justify-center gap-[10px]">
                  <div className="flex items-center border">
                    <span>6</span>
                    <img src="../public/thumbs-up.png" alt=""/>
                  </div>
                  <div className="flex items-center border">
                    <span>20</span>
                    <img src="../public/view.png" alt=""/>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center w-[8%] h-[35px] text-[15px] font-semibold text-white bg-[#A74DD1] rounded-[10px]">مشاهده همه</button>
      </div>






      <div className="content7   ">
        <button className="w-[5%] h-[30px] mx-[auto] mt-[20px] text-[13px] font-bold text-[#A74DD1] bg-[#F1D1FF] rounded-[10px]">اساتید</button>
        <h2 className="mt-[5px] text-center font-bold">اساتید برتر این ماه</h2>
        <div className="flex justify-center gap-[20px] h-[250px] mt-[20px] border">
          <div className="w-[25%] h-[210px] pr-[20px] border border-2 border-[#E6EE03] rounded-[10px]">
            <h3 className="mt-[10px] font-bold">رتبه اول</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px] font-semibold">علی رمضانی</span>
                <p className="text-[12px] font-semibold text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-first-place.png" alt=""/>
            </div>
          </div>
          <div className="w-[25%] h-[210px] pr-[20px] border border-2 border-[#DADADA] rounded-[10px]">
            <h3 className="mt-[10px] font-bold">رتبه دوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px] font-semibold">علی رمضانی</span>
                <p className="text-[12px] font-semibold text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-second-place.png" alt=""/>
            </div>
          </div>
          <div className="w-[25%] h-[210px] pr-[20px] border border-2 border-[#FFBF6C] rounded-[10px]">
            <h3 className="mt-[10px] font-bold">رتبه سوم</h3>
            <div className="flex items-end">
              <div className="right   w-[65%] border">
                <img className="mt-[50px]" src="../public/e69b0a07-fcaf-4219-bded-9a820e9a689b 1.png" alt=""/>
                <span className="text-[14px] font-semibold">علی رمضانی</span>
                <p className="text-[12px] font-semibold text-gray-500">دکترای هوش مصنوعی</p>
              </div>
              <img className="h-[100px]" src="../public/medal-third-place.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

import React from 'react'
import CodingImage from '../../assets/Icons/Coding-A-Website-Streamline.svg'
import Icons from '../../assets/Icons/4icons.svg'


const HeroSection = () => {
  return (
    <div className="flex border   mt-[53px] pr-[96px] pl-[108px] ">
        <img src={CodingImage} alt="codingImage"/>
        <div className="border   mr-[63px]">
            <button className="font-[bold] text-[#A74DD0] bg-[#F1D1FF]   mt-[72px] px-[16px] py-[8px] text-[12px] rounded-[8px]">دوره ها</button>
            <div className="border   w-[306px] mt-[16px]">
                <p className="font-[bold] text-[#A74DD0]   text-[32px] ">آموزش رو از همین حالا شروع کن</p>
            </div>
            <div className="bg-[#A74DD1]   w-[164px] h-[3px] mt-[16px] rounded-[1.5px]"></div>
            <div className="border   w-[328px] mt-[16px]">
                <p className="font-[semibold] text-[#868686]   text-[16px]">تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها</p>
            </div>
        </div>
        <img className="   w-[300px] h-[250px] mt-[48px] mr-[116.35px]" src={Icons} alt="Icons"/>
    </div>
  )
}

export default HeroSection
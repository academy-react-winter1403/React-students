import React from 'react'



const ListHeroSection = ({data}) => {
  return (
    <div className="flex justify-center gap-[16px] border    2x:mt-[53px] 2x:pr-[96px] 2x:pl-[108px]">
        <img className="hidden    2x:block 2x:w-[397px] 2x:h-[397px]" src={data.rightImg} alt="codingImage"/>
        <div className="border   2x:mr-[63px]">
            <button className="font-[bold] text-[#A74DD0] bg-[#F1D1FF]   ts:mt-0 ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:mt-[16px] os:px-[8px] os:py-[4px] os:text-[6px] os:rounded-[4px]   sm:mt-[20px] sm:px-[16px] sm:py-[8px] sm:text-[8px] sm:rounded-[8px]   2x:mt-[72px] 2x:px-[16px] 2x:py-[8px] 2x:text-[12px] 2x:rounded-[8px]">{data.button}</button>
            <div className="border   ts:w-[120px] ts:mt-[4px]   os:w-[160px] os:mt-[8px]   sm:w-[240px] sm:mt-[12px]   lg:w-[306px] lg:mt-[16px]">
                <p className="font-[bold] text-[#A74DD0]   ts:text-[12px]   os:text-[16px]   sm:text-[24px]   lg:text-[32px]">{data.heading}</p>
            </div>
            <div className="bg-[#A74DD1] rounded-[1.5px]   ts:w-[60px] ts:h-[1px] ts:mt-[4px]   os:w-[80px] os:h-[2px] os:mt-[8px]   sm:w-[120px] sm:h-[3px] sm:mt-[12px]   lg:w-[164px] lg:h-[3px] lg:mt-[16px]"></div>
            <div className="border   ts:w-[120px] ts:mt-[4px]   os:w-[160px] os:mt-[8px]   sm:w-[240px] sm:mt-[12px]   lg:w-[328px] lg:mt-[16px]">
                <p className="font-[semibold] text-[#868686]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">{data.desc}</p>
            </div>
        </div>
        <img className="ts:w-[60px] ts:h-[60px] ts:mt-[32px]   os:w-[120px] os:h-[100px] os:mt-[28px]   sm:w-[200px] sm:h-[160px] sm:mt-[32px]   lg:w-[300px] lg:h-[250px] lg:mt-[8px]   2x:mt-[48px] 2x:mr-[116.35px]" src={data.leftImg} alt="4Icons"/>
    </div>
  )
}

export default ListHeroSection
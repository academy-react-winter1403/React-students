import React from 'react'
import ProfilePicIcon from '../../assets/Icons/profile-picture.svg'
import MedalFirstIcon from '../../assets/Icons/medal-first-place.svg'
import MedalSecondIcon from '../../assets/Icons/medal-second-place.svg'
import MedalThirdIcon from '../../assets/Icons/medal-third-place.svg'




const WeeklyTeachers = () => {
  return (
    <div className="border   ts:mt-[18px]   os:mt-[32px]   sm:mt-[68px]   lg:mt-[112px]">
      <div className="text-center border">
        <button className="mx-[auto] font-[bold] text-[#A74DD1] bg-[#F1D1FF]   ts:px-[8px] ts:py-[4px] ts:text-[6px] ts:rounded-[4px]   os:px-[12px] os:py-[4px] os:text-[8px] os:rounded-[4px]   sm:px-[16px] sm:py-[8px] sm:text-[12px] sm:rounded-[8px]   lg:px-[16px] lg:py-[8px] lg:text-[12px] lg:rounded-[8px]">اساتید</button>
        <h2 className="text-center font-[bold]   ts:mt-[4px] ts:text-[12px]   os:mt-[8px] os:text-[16px]   sm:mt-[12px] sm:text-[20px]   lg:mt-[12px] lg:text-[24px]">اساتید برتر این ماه</h2>
      </div>
      <div className="flex justify-center gap-[24px] mt-[40px] border">
        <div className="border-2 border-[#E6EE03]   ts:w-[100px] ts:h-[60px] ts:pt-[4px] ts:pr-[4px] ts:rounded-[8px]   os:w-[140px] os:h-[80px] os:pt-[8px] os:pr-[8px] os:rounded-[16px]   sm:w-[380px] sm:h-[140px] sm:pt-[12px] sm:pr-[16px] sm:rounded-[24px]   lg:w-[421px] lg:h-[216px] lg:pt-[27px] lg:pr-[24px] lg:rounded-[24px]">
          <h3 className="font-[bold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">رتبه اول</h3>
          <div className="flex justify-between items-end">
            <div className="border">
              <img className="ts:w-[8px] ts:h-[8px] ts:mt-[4px]   os:w-[24px] os:h-[24px] os:mt-[4px]   sm:w-[40px] sm:h-[40px] sm:mt-[8px]   lg:w-[56px] lg:h-[56px] lg:mt-[24px]" src={ProfilePicIcon} alt="profilePictureIcon"/>
              <h2 className="font-[semibold]   ts:text-[6px]   os:mt-[4px] text-[8px]   sm:mt-[4px] sm:text-[10px]   lg:mt-[8px] lg:text-[20px]">علی رمضانی</h2>
              <p className="font-[semibold] text-[#959595]   ts:text-[4px] ts:mb-[4px]   os:text-[6px] os:mb-[8px]   sm:mt-[4px] sm:mb-[16px] sm:text-[10px]   lg:mt-[4px] lg:mb-[24px] lg:text-[16px]">دکترای هوش مصنوعی</p>
            </div>
            <img className="ts:w-[20px] ts:h-[20px] ts:mb-[8px] ts:ml-[4px]   os:w-[32px] os:h-[32px] os:mb-[16px] os:ml-[8px]   sm:w-[56px] sm:h-[56px] sm:mb-[16px] sm:ml-[16px]   lg:w-[112px] lg:h-[112px] lg:mb-[19.27px] lg:ml-[16px]" src={MedalFirstIcon} alt="medalFirstPlaceIcon"/>
          </div>
        </div>
        <div className="border-2 border-[#DADADA] ts:w-[100px] ts:h-[60px] ts:pt-[4px] ts:pr-[4px] ts:rounded-[8px]   os:w-[140px] os:h-[80px] os:pt-[8px] os:pr-[8px] os:rounded-[16px]   sm:w-[380px] sm:h-[140px] sm:pt-[12px] sm:pr-[16px] sm:rounded-[24px]   lg:w-[421px] lg:h-[216px] lg:pt-[27px] lg:pr-[24px] lg:rounded-[24px]">
          <h3 className="font-[bold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">رتبه دوم</h3>
          <div className="flex justify-between items-end">
            <div className="border">
              <img className="ts:w-[8px] ts:h-[8px] ts:mt-[4px]   os:w-[24px] os:h-[24px] os:mt-[4px]   sm:w-[40px] sm:h-[40px] sm:mt-[8px]   lg:w-[56px] lg:h-[56px] lg:mt-[24px]" src={ProfilePicIcon} alt="profilePictureIcon"/>
              <h2 className="font-[semibold]   ts:text-[6px]   os:mt-[4px] text-[8px]   sm:mt-[4px] sm:text-[10px]   lg:mt-[8px] lg:text-[20px]">علی رمضانی</h2>
              <p className="font-[semibold] text-[#959595]   ts:text-[4px] ts:mb-[4px]   os:text-[6px] os:mb-[8px]   sm:mt-[4px] sm:mb-[16px] sm:text-[10px]   lg:mt-[4px] lg:mb-[24px] lg:text-[16px]">دکترای هوش مصنوعی</p>
            </div>
            <img className="ts:w-[20px] ts:h-[20px] ts:mb-[8px] ts:ml-[4px]   os:w-[32px] os:h-[32px] os:mb-[16px] os:ml-[8px]   sm:w-[56px] sm:h-[56px] sm:mb-[16px] sm:ml-[16px]   lg:w-[112px] lg:h-[112px] lg:mb-[19.27px] lg:ml-[16px]" src={MedalSecondIcon} alt="medalSecondPlaceIcon"/>
          </div>
        </div>
        <div className="border-2 border-[#FFBF6C] ts:w-[100px] ts:h-[60px] ts:pt-[4px] ts:pr-[4px] ts:rounded-[8px]   os:w-[140px] os:h-[80px] os:pt-[8px] os:pr-[8px] os:rounded-[16px]   sm:w-[380px] sm:h-[140px] sm:pt-[12px] sm:pr-[16px] sm:rounded-[24px]   lg:w-[421px] lg:h-[216px] lg:pt-[27px] lg:pr-[24px] lg:rounded-[24px]">
          <h3 className="font-[bold]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[20px]">رتبه سوم</h3>
          <div className="flex justify-between items-end">
            <div className="border">
              <img className="ts:w-[8px] ts:h-[8px] ts:mt-[4px]   os:w-[24px] os:h-[24px] os:mt-[4px]   sm:w-[40px] sm:h-[40px] sm:mt-[8px]   lg:w-[56px] lg:h-[56px] lg:mt-[24px]" src={ProfilePicIcon} alt="profilePictureIcon"/>
              <h2 className="font-[semibold]   ts:text-[6px]   os:mt-[4px] text-[8px]   sm:mt-[4px] sm:text-[10px]   lg:mt-[8px] lg:text-[20px]">علی رمضانی</h2>
              <p className="font-[semibold] text-[#959595]   ts:text-[4px] ts:mb-[4px]   os:text-[6px] os:mb-[8px]   sm:mt-[4px] sm:mb-[16px] sm:text-[10px]   lg:mt-[4px] lg:mb-[24px] lg:text-[16px]">دکترای هوش مصنوعی</p>
            </div>
            <img className="ts:w-[20px] ts:h-[20px] ts:mb-[8px] ts:ml-[4px]   os:w-[32px] os:h-[32px] os:mb-[16px] os:ml-[8px]   sm:w-[56px] sm:h-[56px] sm:mb-[16px] sm:ml-[16px]   lg:w-[112px] lg:h-[112px] lg:mb-[19.27px] lg:ml-[16px]" src={MedalThirdIcon} alt="medalThirdPlaceIcon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyTeachers

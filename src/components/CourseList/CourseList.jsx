import React from 'react'
import codingpic from '../../assets/coding.svg'
import propics from '../../assets/proicons.svg'

const CourseList = () => {
  return (
    <div>
        <div className='flex w-[100%] h-[400px] mx-[auto] mt-[53px] pr-[96px] pl-[97px] border-2 border-gray-400'>
            <div className='w-1/3 h-full border-2 border-pink-500'>
                <img className='w-[397px] h-[397px]' src={codingpic} alt="codingpic" />
            </div>

            <div className=' pt-20 w-1/3 h-full pr-[63px] border-2 border-red-900'>
                <div>
                    <div className='flex justify-center items-center w-[70px] h-[32px] [background-color:#F1D1FF] rounded-lg'>
                        <p className='text-[#A74DD0] '>دوره ها</p>
                    </div>
                </div>
                <div className='w-[306px] mt-3'>
                    <h2 className='font-bold text-[32px] text-[#A74DD0]'>آموزش رو از همین حالا شروع کن</h2>
                </div>
                <div className='w-[164px] h-[3px] mt-3 bg-[#A74DD1]'>

                </div>
                <div className=' text-[16px] mt-3'>
                    <p className='text-[#868686]'>تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها</p>
                </div>
            </div>

            <div className='w-1/3 h-full'>
                <img src={propics} alt="propics" />
            </div>
        </div>

        <div className='flex h-[1500px] w-[100%] px-[64px] border-2 border-black mx-[auto] mt-[10px]'>
            <div className='w-[956px] h-[1500px] border-2 border-gray-600'>

            </div>
            <div>

            </div>
        </div>

    </div>
  )
}

export default CourseList
import React from 'react'
import rabbit from '../../assets/peppe.svg'
import Arrow from '../../assets/frame.svg'
// import likeIcon from '../../assets/thumbs-up.svg'
// import dislikeIcon from '../../assets/thumbs-down.svg'
import upArrow from '../../assets/upArrow.svg'
import { useState } from 'react'
import LikeDislike from './LikeDislike'




const CommentSection = () => {

    const [isVisible , setIsVisible ] = useState(false);

    const handleclick = () =>{
        setIsVisible(!isVisible);
    }

     

  return (
    <div>
            <div className='w-full h-[auto]'> 
                <div className='w-ful h-[auto]'>
                    <div className='h-[45px] flex items-center pr-5'>
                        <img className='h-9' src={rabbit} alt="the rabbit" />
                        <div className='flex flex-col pr-2 pt-1'>
                            <h4> پارسا بهره دار</h4>
                            <p className='text-[11px] text-[#989898]'> ۲ اردیبهشت ۱۴۰۳</p>
                        </div>
                    </div>
                    <div className='h-[90px] flex items-center'>
                        <img className='h-5 pr-8' src={Arrow} alt="arrow pics" />
                        <div className=' flex flex-col mt-[11px] mr-[12px] lg:w-[85%] md:w-[80%] sm:w-[82%]'>
                            <h2 className='font-bold'>تایتل نظر</h2>
                            <p className='lg:text-[16px] md:text-[14px] sm:text-[11px]'>متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر</p>
                        </div>
                   </div>
                    <div className='h-[auto] flex pr-[60px] pt-[16px]'>
                        <div className='flex w-[140px]'>
                        <LikeDislike  initialLikes={20} initialDislikes={3}/>
                        </div>

                        <div className='flex items-center gap-1 underline mr-[32px]'>
                            <p className='cursor-pointer' onClick={handleclick}> 
                               مشاهده جواب ها (20)
                            </p> 


                            <img className='pt-1' src={upArrow} alt="upArrow" />
                        </div>




                    </div>

                </div>


                { isVisible && (
                        <div className='h-[auto] flex items-end justify-end pb-[25px]'>
                            <hr className='border-[1px] border-[#A74DD0] h-[120px] rotate-180 mt-[33px]'/>
                        <div className='h-[auto] w-[92%]'>
                            <div className=' flex pt-[25px] pr-[13px]'>
                                <img className='h-9' src={rabbit} alt="the rabbit" />
                                <div className='flex flex-col pr-2 pt-1'>
                                    <h4> پارسا بهره دار</h4>
                                    <p className='text-[11px] text-[#989898]'> ۲ اردیبهشت ۱۴۰۳</p>
                                </div>
                            </div>
                            <div className='h-[auto]'>
                                    <div className='h-[90px] flex items-center'>
                                        <img className='h-5 pr-8' src={Arrow} alt="arrow pics" />
                                        <div className=' flex flex-col mt-[11px] mr-[12px] lg:w-[85%] md:w-[80%] sm:w-[82%]'>
                                            <h2 className='font-bold'>تایتل نظر</h2>
                                            <p className='lg:text-[16px] md:text-[14px] sm:text-[11px]'>متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر</p>
                                        </div>
                                    </div>

                                    <div className='h-[auto] flex lg:justify-start lg:pr-[70px] pt-[16px] lg:w-[70%] md:w-[85%] sm:w-[80%]'>
                                        <div className='w-8 gap-2 ml-[25px] flex'>
                                            <LikeDislike initialLikes={10} initialDislikes={2}/>
                                            </div>
                                            <div className='flex gap-1 items-center text-[#A74DD0] pr-[52px] pl-[20px]'>
                                                <p className='md:text-[13px]'>جواب دادن</p>
                                                <img className='md:w-3 md:pt-1 lg:w-5 h-5' src={Arrow} alt="sideArrow" />
                                            </div>
                                            <div className='flex items-center gap-1 underline'>
                                                <p className='md:text-[13px]'> مشاهده جواب ها (20)</p>
                                                <img className='pt-1' src={upArrow} alt="upArrow" />
                                            </div>
                                    </div>
                                </div>
                         </div>
                      </div>)
                    }

            </div>

            
            <div className='w-full h-[150px] pt-8'>
            <div className='h-[45px] flex items-center pr-5'>
                        <img className='h-9' src={rabbit} alt="the rabbit" />
                        <div className='flex flex-col pr-2 pt-1'>
                            <h4> پارسا بهره دار</h4>
                            <p className='text-[11px] text-[#989898]'> ۲ اردیبهشت ۱۴۰۳</p>
                        </div>
                    </div>
                    <div className='h-[auto] flex items-center'>
                        <img className='h-5 pr-8' src={Arrow} alt="arrow pics" />
                        <div className=' flex flex-col lg:w-[85%] md:w-[80%] sm:w-[82%] mr-[12px] sm:mt-3'>
                            <h2 className='font-bold'>تایتل نظر</h2>
                            <p className='lg:text-[16px] md:text-[14px] sm:text-[11px]'>متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر

                                
                            </p>
                        </div>
                   </div>
            </div> 
            
    </div>
  )
}

export default CommentSection
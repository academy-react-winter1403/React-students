// import HandEmoji from '../../StuPanelLayout/Icons/emoji.png'
// import timepic from '../../StuPanelLayout/Icons/time.png'
// import leftSideArrow from '../../StuPanelLayout/Icons/leftSideArrow.png'
// import writingIcon from '../../StuPanelLayout/Icons/writing.png' 
// import UserPhoto from '../../../assets/Icons/StudentPanel/userPhoto.svg'
import CircleProgress from './CircleProgress'

const DashboardContent = () => {
  return (

        <div className='w-full h-[575px] bg-[#F6F6F6] border rounded-3xl flex flex-col'>
              <div className='flex flex-grow-[fit] gap-6 h-fit'>
        
                <div className='flex flex-grow-[1.8] flex-col box-border h-fit'>
                  <div className='flex h-fit items-center gap-3 pt-[8px] pr-4'>
                    <div className='flex h-fit'>
                      <h1 className='font-[semibold] text-[20px] whitespace-nowrap cursor-pointer'>سلام پارسا روزت بخیر</h1>
                      <span><img className='w-5 mr-[5px] mt-[7px]' src={HandEmoji} alt="handemoji" /></span>
                    </div>
                    <div className=' h-fit pt-2'>
                          <p className='text-[12px] text-[#707070] font-[medium]'>امیدوارم امروز روز خوبی رو داشته باشید</p>
                    </div>
                  </div>
        
                   <div className='flex h-full'>
                     <div className='flex flex-grow-[0.2] h-fit box-border gap-[5px] pt-5 pr-2'>
                      <span className='flex justify-center items-center w-[36px] h-[36px] rounded-full bg-[#F1F1F1]'>
                        <img className='w-[21px]' src={timepic} alt="timeIcon" />
                      </span>
                      <div className='text-[12px]'>
                        <p className=' text-[#707070] font-[medium]'>ساعت</p>
                        <span className='font-[bold]'>
                          20:20
                        </span>
                      </div>
                    </div>
                    <div className='flex-grow-[0.2] h-fit flex box-border gap-[5px] pt-5 pr-2'>
                       <span className='flex justify-center items-center w-[36px] h-[36px] rounded-full bg-[#F1F1F1]'>
                        <img className='w-[21px]' src={timepic} alt="timeIcon" />
                      </span>
                      <div className='text-[12px]'>
                        <p className=' text-[#707070] font-[medium]'>تاریخ</p>
                        <span className='font-[bold]'>
                         29 اردیبهشت 1403
                        </span>
                      </div>
                    </div>
                   </div>
                   
                  
                </div>
                <div className='flex justify-end pl-14 pt-6 flex-grow-[4] h-fit'>
                  <p className='text-[#2F2F2F] text-[15px] font-[medium] cursor-pointer'>
                    سلام من پارسام <br></br>
                    اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیاید منو <br></br>
                    بشناسید حال ندارم بخدا خستم
                  </p>
                </div>
        
              </div>
        
              <div className='flex flex-grow-[2] pt-3 py-2 box-border gap-5 px-3'>
                <div className='flex-grow-[2.4] border bg-[#F6F6F6] rounded-3xl box-border'>
                    <div className='box-border w-full h-8 px-4 flex justify-between'>
                      <p className='text-[15px] font-semibold pt-1 text-[#2F2F2F]'>دوره من</p>
                      <div className='flex gap-1 items-center text-[#3772FF] text-[12px] font-[semibold] cursor-pointer'>
                            <p>مشاهده بیشتر</p>
                            <span className='w-4'><img src={leftSideArrow} alt="leftSideArrow" /></span>
                      </div>
                    </div>
                    
                    {/* بخش مربوط به پارسا */}
                    <div className='box-border w-full h-[86%] border'>
        
                    </div>
        
                </div>
                <div className='box-border flex flex-grow-[0.1] flex-col border rounded-3xl bg-[#F6F6F6] pb-6'>
                  <div className='flex pr-3 pl-4 justify-between items-center flex-grow-[0.6]'>
                    <p className='text-[13px] font-[semibold] text-[#2F2F2F] cursor-pointer'>وضعیت اطلاعات حساب کاربری</p>
                    <img src={writingIcon} alt="writingIcon"  className='cursor-pointer'/>
                  </div>
        
                  
                  <div className='w-[130px] pt-2 mr-12'>
                    <CircleProgress percentage={70} />
                  </div>
        
                  <div className='flex justify-center items-center flex-grow-[0.5]'>
                    <p className='text-[12px] font-[semibold] relative top-[21px] text-[#2F2F2F]'>اطلاعات حساب کاربری شما کامل نیست</p>
                  </div>
                </div>
              </div>
        
              <div className='flex flex-grow-[0.2] px-3 gap-4 pb-5 '>
                <div className='flex-grow-[3] border rounded-3xl bg-[#F6F6F6]'>
                  <div className='box-border w-full h-8 px-4 flex justify-between'>
                      <p className='text-[15px] font-[semibold] pt-1 text-[#2F2F2F] cursor-pointer'> رزرو من</p>
                      <div className='flex gap-1 items-center text-[#3772FF] text-[12px] font-[semibold] cursor-pointer'>
                            <p>مشاهده بیشتر</p>
                            <span className='w-4'><img src={leftSideArrow} alt="leftSideArrow" /></span>
                      </div>
                 </div>
        
                  {/* بخش مربوط  به پارسا */}
                    <div className='box-border w-full h-[88%] border'>
        
                    </div>
        
                </div>
        
                <div className='flex-col flex-grow-[0.2] border rounded-3xl bg-[#F6F6F6] box-border'>
                  <div className='box-border w-full h-8 px-4 flex justify-between'>
                      <p className='text-[14px] font-[semibold] pt-2 cursor-pointer'> نظرات شما</p>
                      <div className='flex gap-1 items-center text-[#3772FF] text-[12px] font-[semibold] cursor-pointer'>
                            <p>مشاهده بیشتر</p>
                            <span className='w-4'><img src={leftSideArrow} alt="leftSideArrow" /></span>
                      </div>
                 </div>
                 <div className='flex-grow h-px bg-gray-300 mx-4 mt-3 flex justify-center items-center'>
                    <span className="text-gray-600 font-[semibold] whitespace-nowrap text-[13px] bg-[#F6F6F6] px-4">
                      دوره ها و بلاگ ها
                    </span>
                 </div>
        
                  <div className='flex flex-col w-[90%] h-[75%] mt-3 box-border'>
                    <div className='flex justify-center gap-1 cursor-pointer w-fit pr-4'>
                                <img className='w-8 h-8 mt-[3px]' src={UserPhoto}/>
                                <div className='h-9'>
                                    <h2 className='font-[bold] text-[14px] text-[#2F2F2F]'>شما</h2>
                                    <p className='font-[medium] text-[10px] mb-9 text-[#707070]'>29 اردیبهشت 1403</p>
                                </div>
                    </div>
                    <h className='font-[bold] text-[13px] pr-5 pt-3 text-[#2F2F2F]'>دوره خیلی خوبی بود واقعا لذت بردم</h>
                    <div className='w-full'>
                        <p className=' w-fit h-fit mr-5 mt-1 box-border font-[medium] text-[11px] text-[#2F2F2F]'>
                          واقعا عالی بود. هم استادش هم کلاس ها منظم برگزار شدن و <br></br>
                          اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت <br></br>
                          کنم توی کدنویسی جاوااسکریپت. ممنون از اکادمی بحر که این <br></br>
                          دوره رو گذاشتن.
                        </p>
                    </div>
        
                    
        
                    
                  </div>
        
                </div>
              </div>
                
            </div>
  )
}

export default DashboardContent
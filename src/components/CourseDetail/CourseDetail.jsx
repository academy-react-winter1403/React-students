import React from 'react'
import BlogImg from '../BlogDetail/BlogImg'
import BlogCard from '../BlogDetail/BlogCard'
import BlogText from '../BlogDetail/BlogText'
import BlogComments from '../BlogDetail/BlogComments'
import { useFetchDetail } from '../../core/hooks/useFetchCourseDetail/useFetchDetail'



const CourseDetail = () => {

  const {course} = useFetchDetail()
  console.log(course);




  return (
    <div>
        <div className='w-[100%] h-[auto] flex items-center flex-col'>
            <div className='flex justify-center gap-10 w-[auto] lg:h-[362px] md:h-[auto] sm:h-[auto] mt-[52px]'>
                <BlogImg />
                <BlogCard 
                  showCourseText={true}
                  title={course?.title || "دوره اموزشی ریکت"}
                  name={course?.teacherName || " علی نزاری"}
                  date={new Date(course?.insertDate).toLocaleDateString('fa-IR')} 
                  comments={0} 
                  minidescribe={course?.miniDescribe || " لورم  یکی از اولین توضیحات در سال ۱۹۹۵ کتاب‌های ریاضی مورد تأثیر قرار گرفتند. "}
                  floor={course?.capacity || 18} 
                  category={course?.category || "پیشنهادی"} 
                />
            </div>

            <BlogText describe={course?.describe || 
              "  دوره آموزشی React از مقدماتی تا پیشرفته\n\n\
                  به دنیای مدرن توسعه‌ی وب خوش آمدید!\n\
                  در این دوره‌ی جامع، از اصول ابتدایی React تا مفاهیم پیشرفته مانند مدیریت وضعیت با Redux و کار با API‌ها را به صورت کامل فرا می‌گیرید.\n\
                  این دوره مناسب تمام علاقه‌مندان به برنامه‌نویسی فرانت‌اند است که می‌خواهند به یک توسعه‌دهنده‌ی حرفه‌ای React تبدیل شوند.\n\n\
                  مدرس دوره: علی نزاری\n\
                  مدت زمان دوره: ۴۰ ساعت\n\
                  تعداد جلسات: ۲۰ جلسه\n\
                  سطح دوره: مقدماتی تا پیشرفته\n\
                  تکنولوژی‌های مورد استفاده: React, Redux, React Router, API Integration\n\
                  تعداد شرکت‌کنندگان فعلی: ۱۲۳ نفر\n\
                  تاریخ انتشار: فروردین ۱۴۰۴\n\n\
                  توضیحات تکمیلی:\n\
                  این دوره شامل پروژه‌های عملی واقعی، تمرین‌های کدنویسی و رفع اشکال‌های گروهی می‌شود.\n\
                  با شرکت در این دوره، مهارت‌های لازم برای ورود به بازار کار حرفه‌ای را کسب خواهید کرد.\n\
                   رفع اشکال و پشتیبانی:\n\
                    شرکت‌کنندگان دوره می‌توانند سوالات خود را از طریق انجمن اختصاصی یا جلسات رفع اشکال آنلاین با مدرس در میان بگذارند.\n\
                    همچنین تمامی پروژه‌ها توسط مدرس بررسی شده و بازخورد دقیق دریافت خواهید کرد.\n\n\
                    مدرک پایان دوره:\n\
                    پس از اتمام موفقیت‌آمیز پروژه‌ی نهایی، گواهینامه‌ی معتبر پایان دوره از آکادمی سپهر به شرکت‌کنندگان اعطا خواهد شد.\n\n\
                    پیش‌نیاز شرکت در دوره:\n\
                    آشنایی اولیه با HTML، CSS و مفاهیم پایه‌ی جاوااسکریپت کافیست.\n\
                    این دوره به گونه‌ای طراحی شده که افراد با سطح دانش متفاوت بتوانند در آن پیشرفت کنند.\n\n\
                    مزایای شرکت در این دوره:\n\n\
                    یادگیری کاربردی همراه با پروژه‌های واقعی\n\n\
                    فرصت‌های شغلی گسترده پس از یادگیری React\n\n\
                    دسترسی مادام‌العمر به ویدئوهای دوره\n\n\
                    دریافت به‌روزرسانی‌های رایگان دوره در آینده"}
                />
            <BlogComments />

        </div>
    </div>
  )
}

export default CourseDetail
import {React , useState} from 'react'
import { Formik , Form , Field } from 'formik'
import DropDown from '../Common/DropDown/DropDown'
import '../Common/Style/CommonStyle.css'
import CourseSearch from './CourseSearch'
import CourseDate from './CourseDate'
import CoursePrice from './CoursePrice'



const Side = () => {

  const MyComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['گزینه 1', 'گزینه 2', 'گزینه 3', 'گزینه 4'];
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      console.log('گزینه انتخاب شده:', option);
    };
  }



  const categoryData = {
    title: "دسته بندی", placeholder: "دسته‌بندی مورد نظر را انتخاب کنید..."
  }
  const educationData = {
    title: "سطح آموزشی", placeholder: "سطح مورد نظر را انتخاب کنید..."
  }
  const teacherData = {
    title: "استاد", placeholder: "استاد مورد نظر را انتخاب کنید..."
  }

  return (
    <Formik>
      <Form>
        <div className="bg-[#F8F8F8]   ts:w-[140px] ts:h-[460px] ts:pt-[8px] ts:pr-[12px] ts:rounded-[16px]   os:w-[200px] os:h-[520px] os:pt-[12px] os:pr-[16px] os:rounded-[20px]   sm:w-[260px] sm:h-[580px] sm:pt-[16px] sm:pr-[20px] sm:rounded-[24px]   lg:w-[316px] lg:h-[646px] lg:pt-[20px] lg:pr-[24px] lg:rounded-[24px]">
          <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">فیلتر ها</h2>
          <CourseSearch/>
          <DropDown data={categoryData} options={options} onSelect={handleSelect}/>
          <DropDown data={educationData} options={options} onSelect={handleSelect}/>
          <DropDown data={teacherData} options={options} onSelect={handleSelect}/>
          <CoursePrice/>
          <CourseDate/>
        </div>
      </Form>
    </Formik>
  )
}

export default Side
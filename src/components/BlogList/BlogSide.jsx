import {React , useState} from 'react'
import { Formik , Form , Field } from 'formik'
import Search from '../Common/Search/Search'
import DropDownHolder from '../Common/DropDown/DropDownHolder'
import Date from '../Common/Date/Date'

const BlogSide = ({ onSearchChange }) => {

  const [blogSideData , setSideData] = useState([
    {title: "دسته بندی", placeholder: "دسته‌بندی مورد نظر را انتخاب کنید..."},
  ])




  return (
    <Formik>
      <Form>
        <div className="bg-[#F8F8F8]   ts:w-[140px] ts:h-[460px] ts:pt-[8px] ts:pr-[12px] ts:rounded-[16px]   os:w-[200px] os:h-[520px] os:pt-[12px] os:pr-[16px] os:rounded-[20px]   sm:w-[260px] sm:h-[580px] sm:pt-[16px] sm:pr-[20px] sm:rounded-[24px]   lg:w-[316px] lg:h-[646px] lg:pt-[20px] lg:pr-[24px] lg:rounded-[24px]">
          <h2 className="font-[semibold] text-[#1E1E1E]   ts:text-[6px]   os:text-[8px]   sm:text-[12px]   lg:text-[16px]">فیلتر ها</h2>
          <Search onSearchChange={onSearchChange}/>
          {blogSideData.map((item , index) => {
            return <DropDownHolder key={index} title={item.title} placeholder={item.placeholder}/>
          })}
          <Date/>
        </div>
      </Form>
    </Formik>

  )
}

export default BlogSide
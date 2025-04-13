import {React , useState} from 'react'
import { Field } from 'formik'
import SearchIcon from '../../../assets/Icons/search-stroke-rounded.svg'

const Search = ({ onSearchChange }) => {


  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearchChange(searchValue); // فراخوانی فقط در هنگام کلیک
  };




  return (
    <div>
      <label className="block font-[semibold] text-[#1E1E1E]   ts:mt-[12px] ts:text-[6px]   os:mt-[16px] os:text-[8px]   sm:mt-[20px] sm:text-[12px]   lg:mt-[24px] lg:text-[16px]">جستجو</label>
      <div className="flex items-center relative   ts:mt-[4px]   os:mt-[4px]   sm:mt-[8px]   lg:mt-[12px]">
        <Field 
          className="outline-0 font-[medium] text-[#898989] cursor-pointer   ts:w-[128px] ts:h-[24px] ts:text-[6px] ts:indent-[4px]
          ts:rounded-[8px]   os:w-[188px] os:h-[32px] os:text-[8px] os:indent-[8px] os:rounded-[12px]   sm:w-[228px] sm:h-[40px]
          sm:text-[12px] sm:indent-[12px] sm:rounded-[16px]   lg:w-[268px] lg:h-[48px] lg:text-[14px] lg:indent-[16px] lg:rounded-[16px]"
          type="search" 
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={searchValue}
          onChange={handleChange}/>
        <span className="flex justify-center items-center bg-[#A74DD0] cursor-pointer absolute top-0   ts:w-[24px] ts:h-[24px] 
          ts:rounded-[8px]   os:w-[32px] os:h-[32px] os:rounded-[12px]   sm:w-[40px] sm:h-[40px] sm:left-[13px] sm:rounded-[16px]   
          lg:w-[48px] lg:h-[48px] lg:left-[25px] lg:rounded-[16px]"
          onClick={handleSearchClick}>
          <img src={SearchIcon} alt="searchIcon"/>
        </span>
      </div> 
    </div>
  )
}

export default Search
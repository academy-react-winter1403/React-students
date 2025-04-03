import React from 'react'
import ListHeroSection from '../Common/ListHeroSection/ListHeroSection'
import MainContent from './MainContent'
import StreamLineImage from '../../assets/Icons/Data-Cloud-Streamline.svg'
import Icons from '../../assets/Icons/4icons.svg'



const BlogList = () => {


  const data2 = {
    button: "بلاگ ها",
    heading: "اطلاعات خودت رو با مقاله بالا ببر",
    desc: "تمامی مقاله ها و اخبار روز آکادمی در سریع ترین زمان ممکن در اختیار گذاشته میشه",
    rightImg: StreamLineImage,
    leftImg: Icons
  }




  return (
    <div>
      <ListHeroSection data={data2}/>
      <MainContent/>
    </div>
  )
}

export default BlogList
import React from "react";
import ListHeroSection from "./Common/Search/ListHeroSection/ListHeroSection";
import CourseContent from "./CourseContent";
import CodingImage from "../../assets/Icons/Coding-A-Website-Streamline.svg";
import Icons from "../../assets/Icons/CourseList&BlogList/Group 156.svg";

const CourseList = () => {
  const data1 = {
    button: "دوره ها",
    heading: "آموزش رو از همین حالا شروع کن",
    desc: "تمامی دوره های آموزشی آکادمی به همراه تمامی سطح ها و دسته بندی ها و فیلتر ها",
    rightImg: CodingImage,
    leftImg: Icons,
  };

  return (
    <div>
      <ListHeroSection data={data1} />
      <CourseContent />
    </div>
  );
};

export default CourseList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../services/api";

const useFetchDetail = () => {
  const params = useParams();

  const [course, setCourse] = useState(null); 
  console.log(" courseId params:", params.courseId);


  const fetchApi = async () => {
    try {
      const res = await getApi(`/Home/GetCourseDetails?CourseId=${params.courseId}`);
      console.log(" اطلاعات API:", res); 
      setCourse(res);
    } catch (error) {
      console.error(" خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    if (params.courseId) {
      fetchApi();
    }
  }, [params.courseId]);

  return { course };
};

export { useFetchDetail };
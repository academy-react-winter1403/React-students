import { Formik, Form } from 'formik';
import Header from '../common/Header';
import AutButton from '../common/AutButton';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import InitialValuesForm from '../../../core/validation/SignUpForm/initialValuesForm';
import ValidationSchemaForm from '../../../core/validation/SignUpForm/ValidationSchemaForm'; // وارد کردن فایل validation
import AutField from '../common/AutField';
import AutImg from '../common/AutImg';

const SignUpForm = () => {
  const navigate = useNavigate();
  // save phoneNumber in LocalStorage
  const phoneNumber = localStorage.getItem("phoneNumber"); 

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email:gmail , password } = values;
    const phoneNumber = localStorage.getItem("phoneNumber");

    // ذخیره ایمیل توی localStorage
    localStorage.setItem("email", gmail);

    // لاگ نهایی قبل از ارسال به سرور
    console.log("دیتای نهایی ارسالی:", {
      phoneNumber,
      gmail: gmail, // 👈 اصلاح شده
      password
    });

    try {
      const response = await fetch("https://classapi.sepehracademy.ir/api/Sign/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          password: password,
          gmail: gmail, // 👈 اصلاح شده
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("ثبت نام با موفقیت انجام شد.");
        navigate("/UserPanel");
      } else {
        alert(data.message || "اطلاعات اشتباه است.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("خطا در ارسال اطلاعات.");
    } finally {
      setSubmitting(false);
    }
  };

  return (  
    <div>
      {/* Icon */}
      <Icon />

      <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
        {/* Form */}
        <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">
          <div className="w-full max-w-md space-y-8">
            <Header title={"خوش اومدی"} Paragraph={"لطفا اطلاعات حساب خود را تکمیل کنید "} />

            <Formik
              initialValues={InitialValuesForm}
              validationSchema={ValidationSchemaForm} 
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 bg-white rounded-xl">
                  <div className="rounded-md shadow-sm -space-y-px">
                    
                    <AutField
                      name={"email"}
                      title={"ایمیل"}
                      type={"email"}
                      placeholder={"ایمیل خود را وارد کنید"}
                    />

                    <AutField
                      name={"password"}
                      title={"رمز عبور"}
                      type={"password"}
                      autoComplete={"current-password"}
                      placeholder={"رمز عبور خود را وارد کنید"}
                    />

                    <AutField
                      name={"passwordRepeat"}
                      title={"تکرار رمز عبور"}
                      type={"password"}
                      autoComplete={"current-password"}
                      placeholder={"رمز عبور خود را دوباره وارد کنید"}
                    />
                  </div>

                  <AutButton
                    type={"submit"}
                    SvgTitle={isSubmitting ? "در حال بارگذاری..." : "ورود"}
                    isSubmittingTitle={"تایید اطلاعات"}
                    isSubmitting={isSubmitting}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {/* Img */}
        <AutImg Address={"#"} alt={"Login image"} />
      </div>
    </div>
  );
};

export default SignUpForm;







// import { Formik, Form } from 'formik';
// import Header from '../common/Header';
// import AutButton from '../common/AutButton';
// import AutImg from '../common/AutImg';
// import Icon from '../common/Icon';
// import { useNavigate } from 'react-router-dom';
// import InitialValuesForm from '../../../core/validation/SignUpForm/initialValuesForm';
// import ValidationSchemaForm from '../../../core/validation/SignUpForm/ValidationSchemaForm'; // وارد کردن فایل validation
// import AutField from '../common/AutField';

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   // save phoneNumber in LocalStorage
//   const phoneNumber = localStorage.getItem("phoneNumber"); 

//   const handleSubmit = async (values, { setSubmitting }) => {
//     const { gmail, password } = values;
    
//     // save email in localStorage
//     localStorage.setItem("email", gmail);

//     console.log('مقادیر ارسالی:', values);

//     // send to api
//     try {
//       const response = await fetch("https://classapi.sepehracademy.ir/api/Sign/Register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phoneNumber: phoneNumber,   
//           gmail: gmail,               
//           password: password,         
//         }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("ثبت نام با موفقیت انجام شد.");
//         navigate("/UserPanel"); 
//       } else {
//         alert("اطلاعات اشتباه است.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("خطا در ارسال اطلاعات.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (  
//     <div>
//       {/* Icon */}
//       <Icon />

//       <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
//         {/* Form */}
//         <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">
//           <div className="w-full max-w-md space-y-8">
//             <Header title={"خوش اومدی"} Paragraph={"لطفا اطلاعات حساب خود را تکمیل کنید "} />

//             <Formik
//               initialValues={InitialValuesForm}
//               validationSchema={ValidationSchemaForm} 
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form className="space-y-6 bg-white rounded-xl">
//                   <div className="rounded-md shadow-sm -space-y-px">
                    
//                     <AutField
//                       name={"email"}
//                       title={"ایمیل"}
//                       type={"email"}
//                       placeholder={"ایمیل خود را وارد کنید"}
//                     />

//                     <AutField
//                       name={"password"}
//                       title={"رمز عبور"}
//                       type={"password"}
//                       autoComplete={"current-password"}
//                       placeholder={"رمز عبور خود را وارد کنید"}
//                     />

//                     <AutField
//                       name={"passwordRepeat"}
//                       title={"تکرار رمز عبور"}
//                       type={"password"}
//                       autoComplete={"current-password"}
//                       placeholder={"رمز عبور خود را دوباره وارد کنید"}
//                     />
//                   </div>

//                   <AutButton
//                     type={"submit"}
//                     SvgTitle={isSubmitting ? "در حال بارگذاری..." : "ورود"}
//                     isSubmittingTitle={"تایید اطلاعات"}
//                     isSubmitting={isSubmitting}
//                   />
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>

//         {/* Img */}
//         <AutImg Address={"#"} alt={"Login image"} />
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

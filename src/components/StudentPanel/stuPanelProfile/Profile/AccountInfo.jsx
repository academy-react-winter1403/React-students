import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const AccountInfo = () => {
   const initialValues = {
    firstName: '',
    lastName: '',
    about: '',
    phone: '',
    nationalCode: '',
    gender: '',
    birthDate: '',
    email: '',
    address: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('ضروری'),
    lastName: Yup.string().required('ضروری'),
    about: Yup.string(),
    phone: Yup.string(),
    nationalCode: Yup.string(),
    gender: Yup.string(),
    birthDate: Yup.string(),
    email: Yup.string().email('ایمیل معتبر نیست'),
    address: Yup.string(),
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };


  return (
    <div className='flex w-[650px] h-full'>
    
    <div className="w-[600px] p-4">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="flex flex-col space-y-3">
          
          <div className="flex gap-12 md:flex-row space-y-4 md:space-y-0">
            <div className="flex-[1.2]">
              <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">نام</label>
              <Field name="firstName" className="w-full border rounded-3xl p-2 text-[11px] font-[medium] focus:outline-none focus:border-purple-500" placeholder="نام خود را وارد کنید" />
            </div>
            <div className="flex-[2] ">
              <label className="block mb-1 font-[semibold] pr-1 text-[13px] cursor-pointer">نام خانوادگی</label>
              <Field name="lastName" className="w-[69%] border rounded-3xl p-2 text-[11px] font-[medium] focus:outline-none focus:border-purple-500" placeholder="نام خانوادگی خود را وارد کنید" />
            </div>
          </div>

         
          <div>
            <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">درباره من</label>
            <Field as="textarea" name="about" className="w-[82%] border rounded-3xl p-2 h-24 text-[11px] font-[medium] focus:outline-none focus:border-purple-500" placeholder="متن درباره خود را وارد کنید" />
          </div>

          
          <div className="flex gap-10 w-[83%] flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1">
              <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">شماره همراه</label>
              <Field name="phone" className="w-full border h-[35px] rounded-3xl p-2 text-[11px] font-[medium] focus:outline-none focus:border-purple-500" placeholder="شماره همراه خود را وارد کنید" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">کد ملی</label>
              <Field name="nationalCode" className="w-full border h-[35px] rounded-3xl p-2 text-[11px] font-[medium] focus:outline-none focus:border-purple-500" placeholder="کد ملی خود را وارد کنید" />
            </div>
          </div>

          
          <div className="flex gap-10 flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          
            <div className="flex-[0.7]">
              <label className="block mb-1 font-[semibold] text-[13px] cursor-pointer pr-1">تاریخ تولد</label>
                 <Field type="date" name="date" className="w-full border rounded-3xl p-2 text-[14px] focus:outline-none focus:border-purple-500" />
            </div>

            <div className="flex-1 flex flex-col w-[90%]">
              <label className="flex mb-1 font-[semibold] text-[13px] cursor-pointer">جنسیت</label>

              <div className='flex gap-2 pt-2' >
                <div className=' flex gap-2 items-center w-[20%]'>
                <label className='text-[13px] pb-1'> مرد </label>
                <Field type="radio" name="gender" value="female" className="w-3 cursor-pointer focus:outline-none focus:border-purple-500" />
              </div> 
              <div className=' flex gap-2 items-center w-[20%]'>
                <label className='text-[13px] pb-1'> زن</label>
                <Field type="radio" name="gender" value="female" className="w-3 cursor-pointer focus:outline-none focus:border-purple-500" />
              </div>
              <p className='text-blue-500 text-[12px] font-[medium] pt-1 cursor-pointer'>انتخاب کنید</p>
              </div>
              
            </div>
          </div>

          
          <div>
            <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">ایمیل</label>
            <Field name="email" type="email" className="w-[80%] border rounded-3xl p-2 font-[medium] text-[11px] focus:outline-none focus:border-purple-500" placeholder="ایمیل خود را وارد کنید" />
          </div>

          
          <div>
            <label className="block mb-1 font-[semibold] text-[13px] pr-1 cursor-pointer">آدرس سکونت</label>
            <Field name="address" className="w-[80%] border rounded-3xl p-2 font-[medium] text-[11px] focus:outline-none focus:border-purple-500" placeholder="آدرس محل سکونت خود را وارد کنید" />
          </div>

          
          <button type="submit" className="bg-blue-500 text-white py-2 px-3 text-[13px] rounded-[40px] self-start mt-3 font-[medium] focus:outline-none focus:border-purple-500">
            اعمال تغییرات
          </button>
        </Form>
      </Formik>
    </div>

      
    </div>
  )
}

export default AccountInfo
import React from 'react' 
import { Formik, Form, Field } from 'formik';

const LinkPage = () => {
  return (
    <Formik
      initialValues={{ telegram: '', linkedin: '' }}
      onSubmit={(values) => {
        console.log('فرم ارسال شد:', values);
      }}
    >
      <Form className="flex flex-col gap-6 p-6">

        <div className="flex flex-col items-start gap-2 pt-12">
          <label htmlFor="telegram" className="text-sm font-[semibold] pr-2">تلگرام</label>
          <Field
            id="telegram"
            name="telegram"
            placeholder="لینک تلگرام خود را وارد کنید"
            className="w-[70%] border border-gray-300 rounded-full font-[medium] py-2 px-4 text-right text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>


        <div className="flex flex-col items-start gap-2">
          <label htmlFor="linkedin" className="text-right text-sm font-[semibold] pr-2">لینکدین</label>
          <Field
            id="linkedin"
            name="linkedin"
            placeholder="لینک لینکدین خود را وارد کنید"
            className="w-[70%] border border-gray-300 rounded-full font-[medium] py-2 px-4 text-right text-sm placeholder:text-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
      </Form>
    </Formik>
  );
}

export default LinkPage
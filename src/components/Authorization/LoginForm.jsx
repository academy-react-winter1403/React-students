import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('لطفا یک ایمیل معتبر وارد کنید')
      .required('ایمیل الزامی است'),
    password: Yup.string()
      .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
      .required('رمز عبور الزامی است')
  });

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('مقادیر ارسالی:', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">

      {/* icon */}

     {/* <div className='border-2'> 
          <div className="items-center gap-[10px]">
            <img src="../src/assets/9a811899-ceeb-49d4-802d-a96c8ba50aee 1.png"/>
            <h2 className="text-[13px]">React-students</h2>
          </div> 
      </div> */}
      
      {/* form */}

      <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">

        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-right text-3xl font-[bold] text-gray-900">
            سلام،<br/>
            خوش برگشتی
            </h2>
            <p className="mt-5 text-right font-[semibold] text-loginText">
            برای وارد شدن به حساب کاربری خود اطلاعات حساب را وارد کنید
            </p>
          </div>
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 bg-white p-8 rounded-xl">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email" className="font-[semibold]"> ایمیل یا شماره همراه</label>
                    <Field
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 mb-2 appearance-none block w-full px-4 py-3 border-2 border-login placeholder-placeHolderLogin text-gray-900 rounded-xl focus:outline-none sm:text-sm"
                      placeholder="ایمیل یا شماره همراه خود را وارد کنید"
                    />
                    <ErrorMessage name="email" component="div" className="mt-2 text-sm text-red-600" />
                  </div>
                  <div>
                    <label htmlFor="password" className="font-[semibold]">رمز عبور</label>
                    <Field
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="mt-2 appearance-none block w-full px-4 py-3 border-2 border-login placeholder-placeHolderLogin text-gray-900 rounded-xl focus:outline-none sm:text-sm"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                    <ErrorMessage name="password" component="div" className="mt-2 text-sm text-red-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <Field
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="h-4 w-4 appearance-none border-2 border-login rounded-md checked:bg-purple-600 "
                    />
                    <label htmlFor="rememberMe" className="mr-2 block text-sm font-[semibold]">
                    مرا بخاطر بسپار!
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-[medium] bg-forgetBg p-2 rounded-3xl text-forgetText hover:text-purple-900">
                    رمزعبور فراموش کردید؟
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-[medium] rounded-2xl text-white bg-login hover:bg-purple-600 outline-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        در حال ورود...
                      </span>
                    ) : ' ورود به حساب کاربری'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          
          <div className="text-center">
            <p className="text-sm">
              حساب کاربری ندارید؟{' '}
              <a href="#" className="font-[semibold] underline">
                ثبت نام کنید
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* img */}

      <div className="hidden md:flex md:w-[800px] bg-login items-center justify-center p-12 border2 rounded-3xl">
        <div className="max-w-lg w-full">
          <img 
            src=""
            alt="Login image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
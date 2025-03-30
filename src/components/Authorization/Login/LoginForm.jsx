import { Formik, Form} from 'formik';
import AutFeild from '../common/AutFeild';
import Header from '../common/Header';
import RememberFeild from './RememberFeild';
import Forgot from './Forgot';
import AutButton from '../common/AutButton';
import NoAccount from './NoAccount';
import AutImg from '../common/AutImg';
import ValidationSchemaLogin from '../../../core/validation/login/validationSchemaLogin';
import initialValuesLogin from '../../../core/validation/login/InitialValuesLogin';
import Icon from '../common/Icon';

const LoginForm = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('مقادیر ارسالی:', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (  
    
    <div>
    {/* icon */}

      <Icon />

    <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
  
      {/* form */}

      <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">

        <div className="w-full max-w-md space-y-8">

          <Header title={"خوش برگشتی"} Paragraph={"برای وارد شدن به حساب کاربری خود اطلاعات حساب را وارد کنید"} />

          <Formik
            initialValues={initialValuesLogin}
            validationSchema={ValidationSchemaLogin}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 bg-white rounded-xl">
                <div className="rounded-md shadow-sm -space-y-px">
                  <AutFeild name={"email"} title={"ایمیل یا شماره همراه"} type={"email"} autoComplete={"email"}  placeholder={"ایمیل یا شماره همراه خود را وارد کنید"}/>
                  <AutFeild name={"password"} title={"رمز عبور"} type={"password"} autoComplete={"current-password"}  placeholder={"رمز عبور خود را وارد کنید"}/>
                </div>
                <div className="flex items-center justify-between">

                  <RememberFeild title={"مرا بخاطر بسپار!"} name={"rememberMe"} type={"checkbox"} />

                  <Forgot title={"رمزعبور فراموش کردید؟"} />
                </div>

                <AutButton type={"submit"} SvgTitle={"در حال ورود..."} isSubmittingTitle={"ورود به حساب کاربری"} isSubmitting={isSubmitting}/>

              </Form>
            )}
          </Formik>
          
          <NoAccount address={""} accountTitle={"حساب کاربری ندارید؟"} SingUpTitle={"ثبت نام کنید"} />
        </div>
      </div>

      {/* img */}

      <AutImg Address={"#"} alt={"Login image"} />
      </div>
    </div>
   
  );
};

export default LoginForm;
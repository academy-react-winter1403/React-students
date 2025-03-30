import { Formik, Form} from 'formik';
import AutFeild from '../common/AutFeild';
import Header from '../common/Header';
import AutButton from '../common/AutButton';
import AutImg from '../common/AutImg';
import Icon from '../common/Icon';
import InitialValuesForm from '../../../core/validation/SignUpForm/initialValuesForm';
import ValidationSchemaForm from '../../../core/validation/SignUpForm/ValidationSchemaForm';

const SignUpForm = () => {

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

          <Header title={"خوش اومدی"} Paragraph={"لطفا اطلاعات حساب خود را تکمیل کنید "} />

          <Formik
            initialValues={InitialValuesForm}
            validationSchema={ValidationSchemaForm}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 bg-white rounded-xl">
                <div className="rounded-md shadow-sm -space-y-px">
                  <AutFeild name={"email"} title={"ایمیل"} type={"email"} autoComplete={"email"}  placeholder={"ایمیل خود را وارد کنید"}/>
                  <AutFeild name={"password"} title={"رمز عبور"} type={"password"} autoComplete={"current-password"}  placeholder={"رمز عبور خود را وارد کنید"}/>
                  <AutFeild name={"password"} title={"تکرار رمزعبور"} type={"password"} autoComplete={"current-password"}  placeholder={"رمزعبور خود را دوباره وارد کنید"}/>
                </div>

                <AutButton type={"submit"} SvgTitle={"در حال ورود..."} isSubmittingTitle={"تایید اطلاعات"} isSubmitting={isSubmitting}/>

              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* img */}

      <AutImg Address={"#"} alt={"Login image"} />
      </div>
    </div>
   
  );
};

export default SignUpForm;
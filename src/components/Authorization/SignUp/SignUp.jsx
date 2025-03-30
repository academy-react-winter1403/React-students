import { Formik, Form} from 'formik';
import AutFeild from '../common/AutFeild';
import Header from '../common/Header';
import AutButton from '../common/AutButton';
import NoAccount from '../Login/NoAccount';
import AutImg from '../common/AutImg';
import ValidationSchemaSingUp from '../../../core/validation/signUp/ValidationSchemaSingUp';
import InitialValuesSingUp from '../../../core/validation/signUp/InitialValuesSingUp';
import Icon from '../common/Icon';

const SingUp = () => {

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

      <Icon/>
      <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">



        {/* form */}

        <div className="w-full md:w-[580px] flex justify-center p-10 md:p-12 rounded-3xl mt-5">

          <div className="w-full max-w-md space-y-8">

            <Header title={"خوش اومدی"} Paragraph={"برای ثبت نام اول شماره همراه خود را وارد کنید"} />

            <Formik
              initialValues={InitialValuesSingUp}
              validationSchema={ValidationSchemaSingUp}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 bg-white rounded-xl">
                  <div className="rounded-md shadow-sm -space-y-px">

                    <AutFeild name={"text"} title={"شماره همراه"} type={"text"} autoComplete={" "} placeholder={"شماره همراه خود را وارد کنید"}/>
                  
                  </div>

                  <AutButton type={"submit"} SvgTitle={"در حال بررسی..."} isSubmittingTitle={"ارسال کد تایید"} isSubmitting={isSubmitting}/>

                </Form>
              )}
            </Formik>
    
          <NoAccount address={""} accountTitle={"حساب کاربری دارید؟"} SingUpTitle={"ورود به حساب"} />
        </div>
      </div>

      {/* img */}

      <AutImg Address={"#"} alt={"Login image"} />
      </div>
  </div>
  )
};

export default SingUp;
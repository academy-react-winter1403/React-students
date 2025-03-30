import { Formik, Form} from 'formik';
import Header from '../common/Header';
import AutFeild from '../common/AutFeild';
import AutButton from '../common/AutButton';
import AutImg from '../common/AutImg';
import Change from './Change';
import InitialValuesConfrimCode from '../../../core/validation/SignUpConfrimCode/InitialValuesConfrimCode';
import ValidationSchemaConfrimCode from '../../../core/validation/SignUpConfrimCode/ValidationSchemaConfrimCode';
import Icon from '../common/Icon';

const CustomPargraph = () => {
 return(
    <p>لطفا کد ارسال شده به شماره موبایل 
       <span> 0932359485</span>
        را وارد کنید </p>
 )
}

const SingUpConfirmCode = () => {

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

          <Header title={"خوش اومدی"} Paragraph={"لطفا کد ارسال شده به شماره موبایل 0932359485 را وارد کنید"} />

          <Formik
            initialValues={InitialValuesConfrimCode}
            validationSchema={ValidationSchemaConfrimCode}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 bg-white rounded-xl">
                <div className="rounded-md shadow-sm -space-y-px">
                  <AutFeild name={"text"} title={"کد تایید"} type={"text"} autoComplete={"email"}  placeholder={"کد تایید خود را وارد کنید"}/>
                </div>

                <AutButton type={"submit"} SvgTitle={"در حال بررسی..."} isSubmittingTitle={"تایید کد"} isSubmitting={isSubmitting}/>

              </Form>
            )}
          </Formik>
          
          <Change />
        </div>
      </div>

      {/* img */}

      <AutImg Address={"#"} alt={"Login image"} />
      </div>
  </div>
  );
};

export default SingUpConfirmCode;
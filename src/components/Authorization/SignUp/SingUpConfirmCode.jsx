import { Formik, Form } from 'formik';
import Header from '../common/Header';
import AutButton from '../common/AutButton';
import AutImg from '../common/AutImg';
import Change from './Change';
import InitialValuesConfrimCode from '../../../core/validation/SignUpConfrimCode/InitialValuesConfrimCode';
import ValidationSchemaConfrimCode from '../../../core/validation/SignUpConfrimCode/ValidationSchemaConfrimCode';
import Icon from '../common/Icon';
import AutField from '../common/AutField';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomParagraph = ({ phoneNumber }) => (
  <p>
    لطفا کد ارسال شده به شماره موبایل
    <span className='text-login'>{"  " + phoneNumber + "  "}</span>
    را وارد کنید
  </p>
);

const SingUpConfirmCode = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    } else {
      alert("لطفاً شماره موبایل را دوباره وارد کنید");
      navigate("/RegisterStepOne");
    }
  }, [navigate]);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch("https://classapi.sepehracademy.ir/api/Sign/VerifyMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          verifyCode: values.verifyCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("کد تایید با موفقیت تأیید شد!");
        navigate("/RegisterStepThree");
      } else {
        if (data?.message) {
          setErrors({ verifyCode: data.message });
        } else {
          alert("مشکلی در تأیید کد وجود دارد");
        }
      }
    } catch (error) {
      alert("ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید.");
      console.error("API Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* icon */}
      <Icon />

      <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
        {/* form */}
        <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">
          <div className="w-full max-w-md space-y-8">
            <Header title={"خوش اومدی"} />
            <CustomParagraph phoneNumber={phoneNumber} />

            <Formik
              initialValues={{ verifyCode: '' }}
              validationSchema={ValidationSchemaConfrimCode}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 bg-white rounded-xl">
                  <div className="rounded-md shadow-sm -space-y-px">
                    <AutField
                      name={"verifyCode"}
                      title={"کد تایید"}
                      type={"text"}
                      autoComplete={"off"}
                      placeholder={"کد تایید خود را وارد کنید"}
                    />
                  </div>

                  <AutButton
                    type={"submit"}
                    SvgTitle={"در حال بررسی..."}
                    isSubmittingTitle={"تایید کد"}
                    isSubmitting={isSubmitting}
                  />
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
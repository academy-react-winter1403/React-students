import { Formik, Form } from 'formik';
import Header from '../common/Header';
import Forgot from './Forgot';
import AutButton from '../common/AutButton';
import NoAccount from './NoAccount';
import AutImg from '../common/AutImg';
import ValidationSchemaLogin from '../../../core/validation/login/validationSchemaLogin';
import initialValuesLogin from '../../../core/validation/login/InitialValuesLogin';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import AutField from '../common/AutField';
import RememberField from './RememberFeild';

const LoginForm = () => {
  const navigate = useNavigate();

  // ارسال اطلاعات برای ورود
  const postLoginForm = async (values) => {
    const response = await fetch('https://classapi.sepehracademy.ir/api/Sign/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return await response.json();
  };

  // ذخیره توکن در LocalStorage
  const setItem = (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    alert('🟡 ارسال فرم شروع شد');
    try {
      // ارسال درخواست به سرور
      const response = await postLoginForm(values);

      // نمایش پاسخ دریافتی برای بررسی
      alert('📦 پاسخ دریافتی:\n' + JSON.stringify(response, null, 2));
      console.log('📦 پاسخ دریافتی:', response);

      // استخراج توکن از پاسخ
      const token = response?.token || response?.data?.token || response?.access;

      if (token) {
        alert('🟢 توکن دریافت شد و ذخیره می‌شود');
        setItem('token', token);
        alert('➡️ هدایت به userPanel...');
        navigate('/userPanel');
      } else {
        alert('⚠️ توکنی دریافت نشد!');
      }
    } catch (error) {
      alert('🔴 خطا در ورود: ' + error.message);
      console.error('خطا در ورود:', error);
    } finally {
      alert('✅ عملیات به پایان رسید');
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Icon />

      <div className="min-h-screen flex flex-col md:flex-row pt-9 pl-12 pr-12 pb-9">
        <div className="w-full md:w-[580px] flex items-center justify-center p-10 md:p-12 rounded-3xl">
          <div className="w-full max-w-md space-y-8">
            <Header
              title={"خوش برگشتی"}
              Paragraph={"برای وارد شدن به حساب کاربری خود اطلاعات حساب را وارد کنید"}
            />

            <Formik
              initialValues={initialValuesLogin}
              validationSchema={ValidationSchemaLogin}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 bg-white rounded-xl">
                  <div className="rounded-md shadow-sm -space-y-px">
                    <AutField
                      name={"phoneOrGmail"}
                      title={"ایمیل یا شماره همراه"}
                      type={"text"}
                      autoComplete={"phoneOrGmail"}
                      placeholder={"ایمیل یا شماره همراه خود را وارد کنید"}
                    />
                    <AutField
                      name={"password"}
                      title={"رمز عبور"}
                      type={"password"}
                      autoComplete={"current-password"}
                      placeholder={"رمز عبور خود را وارد کنید"}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <RememberField
                      title={"مرا بخاطر بسپار!"}
                      name={"rememberMe"}
                      type={"checkbox"}
                    />
                    <Forgot title={"رمزعبور فراموش کردید؟"} />
                  </div>

                  <AutButton
                    type={"submit"}
                    SvgTitle={"در حال ورود..."}
                    isSubmittingTitle={"ورود به حساب کاربری"}
                    isSubmitting={isSubmitting}
                  />
                </Form>
              )}
            </Formik>

            <NoAccount
              address={"/SignUp"}
              accountTitle={"حساب کاربری ندارید؟"}
              SingUpTitle={"ثبت نام کنید"}
            />
          </div>
        </div>

        <AutImg Address={"#"} alt={"Login image"} />
      </div>
    </div>
  );
};

export default LoginForm;

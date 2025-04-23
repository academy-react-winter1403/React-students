import * as Yup from 'yup';

  const ValidationSchemaLogin = Yup.object({
    phoneOrGmail: Yup.string()
      .email('لطفا یک ایمیل معتبر وارد کنید')
      .required('ایمیل الزامی است'),
    password: Yup.string()
      .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد')
      .required('رمز عبور الزامی است')
  });

export default ValidationSchemaLogin;
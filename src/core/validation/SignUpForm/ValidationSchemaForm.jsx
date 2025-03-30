import * as Yup from 'yup';

  const ValidationSchemaForm = Yup.object({
    email: Yup.string()
      .email('لطفا یک ایمیل معتبر وارد کنید')
      .required('ایمیل الزامی است'),
    password: Yup.string()
      .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
      .required('رمز عبور الزامی است')
  });

export default ValidationSchemaForm;
import * as Yup from 'yup';

const ValidationSchemaForm = Yup.object({
  email: Yup.string()
    .email('ایمیل معتبر نیست')
    .required('ایمیل الزامی است'),
  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن باید یکسان باشند')
    .required('تکرار رمز عبور الزامی است'),
});

export default ValidationSchemaForm;
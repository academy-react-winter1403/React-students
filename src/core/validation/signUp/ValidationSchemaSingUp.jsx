import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    text: Yup.string()
      .required('شماره همراه الزامی است'),
  });

export default ValidationSchema
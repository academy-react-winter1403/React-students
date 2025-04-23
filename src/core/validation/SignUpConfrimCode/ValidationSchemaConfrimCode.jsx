import * as Yup from 'yup';

  const ValidationSchemaConfrimCode = Yup.object({
    verificationCode: Yup.string()
      .required("کد تایید الزامی است"),
  });

export default ValidationSchemaConfrimCode;
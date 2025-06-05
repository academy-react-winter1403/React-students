import * as Yup from 'yup';

  const ValidationSchemaConfrimCode = Yup.object({
    verifyCode: Yup.string()
      .required("کد تایید الزامی است"),
  });

export default ValidationSchemaConfrimCode;
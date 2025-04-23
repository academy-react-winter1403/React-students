import http from "../interceptor";

const postVerifyCode = async (user) => {
    try {
      const response = await http.post('/Sign/SendVerifyMessage' , user);
      return response;
    } catch (error) {
        return console.log(error);
    }
  };

export default postVerifyCode;
import http from "./interceptor";

const postLoginForm = async (user) => {
    try {
      const response = await http.post('/sign/Login' , user);
      return response;
    } catch (error) {
        return console.log(error);
    }
  };

export default postLoginForm;  
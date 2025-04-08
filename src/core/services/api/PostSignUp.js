import http from "./interceptor";

const PostSignUp = async (userNumber) => {
    try {
      const response = await http.post('/Sign/SendVerifyMessage' , userNumber);
      return response;
    } catch (error) {
        return console.log(error);
    }
  };

export default PostSignUp;  
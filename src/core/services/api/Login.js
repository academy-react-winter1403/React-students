import http from "./interceptor";

export const postLoginForm = async () => {
    try{
        const result = await http.post('/Login/postLoginForm', { email: "test@example.com", password: "123456" , rememberMe: true });
        return result;
    } catch (error){
        console.log(error)
    }
};
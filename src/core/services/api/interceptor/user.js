import http from "../interceptor";

const getProfile = async (user) => {
    try {
        const response = await http.get("/sharePanel/GetProfileInfo");
        return response;
    } catch (error) {
        return console.log(error);
    }
  };

export default getProfile;  
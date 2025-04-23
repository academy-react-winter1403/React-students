import http from "./interceptor";

const getApi = async (url) => {
  try {
    const response = await http.get(url);
    return response;
  } catch (error) {
    // return console.log(error);
  }
};

const postApi = async (url , body) => {
  try {
    const response = await http.post(url , body);
    return response;
  } catch (error) {
    return console.log(error);
  }
};

export { getApi ,postApi };

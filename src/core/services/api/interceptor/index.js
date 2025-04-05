import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSucc = (res) => {
  return res.data;
};

const onErr = (err) => {
  console.log(err)

  if (err.response.status >= 404 && err.response.status < 500){
    alert("Client error : " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSucc, onErr);

instance.interceptors.request.use((opt) => {
  opt.headers['messageTest'] = "Hello world!";
  return opt;
});

export default instance;
import axios from "axios";
import { clearStorage, getItem, removeItem } from "../../common/storage.services";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSucc = (res) => {
  return res;
};

const onErr = (err) => {
  console.log(err)

  if (err.response.status === 401){
    // clearStorage()
    removeItem('token');
    window.location.pathname = '/'; 
  }

  if (err.response.status >= 404 && err.response.status < 500){
    alert("Client error : " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSucc, onErr);

instance.interceptors.request.use((opt) => {
  const token = getItem('token');

  // opt.headers['messageTest'] = "Hello world!";
  opt.headers.Authorization = "bearer " + token;
  return opt;
});

export default instance;
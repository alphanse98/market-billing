import axios from "axios";

axios.interceptors.request.use(
  function (config:any) {
      if (!config.url.endsWith("/login") && !config.url.endsWith("/register")) {
    const auth: any = localStorage.getItem('Token');
    const token = "Bearer " + auth
    config.headers['Authorization'] = token;
      }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const baseUrl = "http://localhost:8080/api/";

export default function loginApi(param:object) {
  return axios.post(baseUrl + "login", param);
}
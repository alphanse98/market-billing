import axios from "axios";

export const baseUrl = "http://localhost:8080/api/";

export default function loginApi(param:object) {
  return axios.post(baseUrl + "login", param);
}
import { baseUrl } from './AtuhService';
import axios from 'axios';

axios.interceptors.request.use(
  function (config:any) {
      if (!config.url.endsWith("/signin") && !config.url.endsWith("/register")) {

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

export default async function getItems() {
  try {
    const res = await axios.get(baseUrl + 'item/get');
    localStorage.setItem("items",res?.data );
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export function addItem (item:object){
  return axios.post(baseUrl + "item/create",item);
}
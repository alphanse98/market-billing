import { baseUrl } from './AtuhService';
import axios from 'axios';

export default async function getCstomers() {
  try {
    const res:any = await axios.get(baseUrl + 'customer/get');
    localStorage.setItem("customers",JSON.stringify(res?.data));
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export function deleteCustomer (customers:object){
  return axios.post(baseUrl + "customer/delete",customers);
}
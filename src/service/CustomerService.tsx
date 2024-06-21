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
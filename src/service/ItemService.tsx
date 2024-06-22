import { baseUrl } from './AtuhService';
import axios from 'axios';

export default async function getItems() {
  try {
    const res:any = await axios.get(baseUrl + 'item/get');
    localStorage.setItem("items",JSON.stringify(res?.data) );
    // localStorage.setItem("items",[{nameone:"alphanse"}] );
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export function addItem (item:object){
  return axios.post(baseUrl + "item/create",item);
}

export function updateItem (item:object){
  return axios.put(baseUrl + "item/update",item);
}
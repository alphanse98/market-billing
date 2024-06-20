import { baseUrl } from './AtuhService';
import axios from 'axios';

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

export function updateItem (item:object){
  return axios.put(baseUrl + "item/update",item);
}
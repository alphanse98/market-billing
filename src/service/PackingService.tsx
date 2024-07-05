import { baseUrl } from './AtuhService';
import axios from 'axios';

export  async function getPack() {
  try {
    const res: any = await axios.get(baseUrl + 'packing/get');
    localStorage.setItem('packingUnits', JSON.stringify(res?.data));
    return res?.data;
  } catch (error) {
    console.log(error)
  }
}

export function addPack(pack: object) {
  return axios.post(baseUrl + 'packing/create', pack);
}

export function updatePack(pack: object) {
  return axios.put(baseUrl + 'packing/update', pack);
}

export function deletePack(pack: object) {
  return axios.post(baseUrl + 'packing/delete', pack);
}

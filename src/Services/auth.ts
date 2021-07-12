import axios from "axios";
import {API_URL} from './API';

export const login = (phoneNumber:string) => {
  return axios.post(`${API_URL}auth/login`, { phoneNumber });
};

export const verify = (verificationCode:string, phoneNumber:null | string) => {
  return axios.post(`${API_URL}auth/verify`, { verificationCode, phoneNumber });
};
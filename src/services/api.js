import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-eyx1.onrender.com'
});
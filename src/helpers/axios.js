import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store'

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: api,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  axiosIntance.interceptors.request.use((req) => {
    const { authReducer } = store.getState();
    if(authReducer.token){
        req.headers.Authorization = `Bearer ${authReducer.token}`;
    }
    return req;
})


export default axiosIntance;
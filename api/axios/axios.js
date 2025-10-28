import axios from "axios"
import { Cookies } from "react-cookie"



const baseURL = process.env.NEXT_PUBLIC_BASE_URL
const cookies = new Cookies();

export const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('x-access-token');
       

        if (token) {
           
            config.headers['Authorization'] = `Bearer ${token}`;  
          }
          
          return config;
        },
        function(error) {
          // Handle any request errors
          return Promise.reject(error);
        }
)
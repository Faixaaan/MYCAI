import axios from "axios"

const baseURL = 'https://mycvi.ai/admin/api'

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
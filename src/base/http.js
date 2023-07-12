import axios from "axios";
import Notify from 'simple-notify'
import { useGlobal } from '@/stores/global';
import router from "../router";

const createInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
 
    headers: {
        'Accept': 'application/json',
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
 
    validateStatus: function (status) {
        if (status >= 200 && status < 300) {
            return true;
        }
        if (status === 403) {
            return new Notify({
                status: 'error',
                title: 'unauthorize',
                text: 'Not authorized to enter',
                effect: 'slide',
                type: 3,
                'autoclose':true,
                autotimeout: 1000,
            });
        }
        if (status === 500) {
            return new Notify({
                status: 'error',
                title: 'error',
                text: 'server under maintennace',
                effect: 'slide',
                type: 3,
                'autoclose':true,
                autotimeout: 1000,
            });
        }
        if(status===404){
            return   new Notify({
                status: 'error',
                title: '404',
                text: ' not found ',
                effect: 'slide',
                'autoclose':true,
                autotimeout: 1000,
                type: 3
            });  
            // router.push('/certifications');
        }

    },
});


createInstance.interceptors.request.use(config => {
   
    useGlobal().setloading(true);

    return config;

});

createInstance.interceptors.response.use(function (response) {

    useGlobal().setloading(false);

    return response;


}, function (error) {
    useGlobal().setloading(false);
    return Promise.reject(error);
});

export default createInstance;
import { defineStore } from "pinia";
import http from '@/base/http.js';
export const useAuth=defineStore('auth',{
   state:()=>({
    'token':null,
    'admin':null,
   
    'error':''
   }), 
   actions:{
        login(credintails){
            http.post('admin/login',{
                'email':credintails.email,
                'password':credintails.password
            }).then((response) => {
                console.log(response.data.data.token);
                this.token=response.data.data.token;
                localStorage.setItem('token',this.token);
            }).catch((error) => {
                this.error=error.response.data;
            });
        }
   },
});
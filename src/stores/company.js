import { defineStore } from 'pinia';
import http from '@/base/http.js';
export const useCompany = defineStore('company', {

    store: () => ({
        data: [],
        item: [],
        product: [],
        currentPage: 1,
        last_page: 1,
        error: '',
        current_category: null

    }),
    actions: {
        getAll() {
            http.get(`/companies`).then((response) => {
                this.data = response.data['data']
            }).catch((error) => {
                this.error = error.response;
            })
        },
        getByid(id) {

            console.log('f');
            http.get(`/companies/${id}`).then((response) => {
                console.log(response.data['data']);
                this.item = response.data['data'];

            }).catch((error) => {
                console.log(error.response);
            });

        },
        

        // filter(params){
        //     http.get(`products/${params}`).then((response)=>{
        //         this.product=response.data['data'];
        //     }).catch((error)=>{
        //         this.error=error.response.data;
        //     });
        // }
    }
});
import { defineStore } from 'pinia';
import http from '@/base/http.js';
export const useHome = defineStore('home', {
    state: () => ({
        companies: [],
        products: [],
        bannners:[],
        empty: false,
        error: '',

    }),

    actions: {

        getCompanies() {
            http.get(`/companies`).then((response) => {


                this.companies = response.data.data.slice(0, 3);


            }).catch((error) => {
                this.error = error.response.data;

            });
        },
        getProducts() {
            http.get(`/products`).then((response) => {

                this.products = response.data.data.slice(0, 4);


            }).catch((error) => {
                this.error = error.response.data;

            });
        },

        getBanners(){
            http.get(`/slider-images`).then((response)=>{
                this.bannners=response.data.data;
            }).catch((error)=>{
                this.error=error.response.data;
            });
        },
        show() {
            if (this.companies.length !== 0 && this.products.length !== 0)
                return true;

        }
    }
})
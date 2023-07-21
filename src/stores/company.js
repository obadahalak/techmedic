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
                this.data = response.data.data;

            }).catch((error) => {
                this.error = error.response;
            })
        },
        getByid(id) {


            http.get(`/companies/${id}`).then((response) => {

                this.item = response.data.data;

            }).catch((error) => {
                console.log(error.response);
            });

        },

        show() {
            if (this.data.length >= 0)
                return true;
            return false;
        }

    }
});
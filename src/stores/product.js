import { defineStore } from "pinia";
import http from '@/base/http.js';

export const useProduct = defineStore('product', {
    state: () => ({
        data: null,
        item: {},
        error: null,
        meta: { current_page: 1 },
        company_id: null,
        category_id: null,
    }),
    actions: {
        getAll(params) {
            http.get(`products/${params}&page=${this.meta.current_page}`).then((response) => {
                this.meta = response.data.meta;
                this.data = response.data['data'];
            }).catch((error) => {
                this.error = error.response.data;
            });
        },
        getById(id) {
          

                http.get(`products/${id}`).then((response) => {

                    this.item = response.data['data'];
                    this.item.images.forEach((e) => {
                        var path =  e.path;
                        e.path = path;

                    });
                   
                }).catch((error) => {
                    this.error = error.response.data;
                });

        },

        canNextPage() {
            if (this.meta.current_page != this.meta.last_page) return true;
            return false;
        },
        canPreviousPage() {
            if (this.meta.current_page != 1) return true;
            return false;
        },
        nextPage(params) {
            if (this.canNextPage()) {

                console.log('get next');
                this.meta.current_page++;
                http.get(`products/${params}&page=${this.meta.current_page}`).then((response) => {
                    this.meta = response.data.meta;
                    this.data = response.data['data'];
                }).catch((error) => {
                    this.error = error.response.data;
                });
            }
        },
        previousPage(params) {
            if (this.canPreviousPage()) {


                let prev = this.meta.current_page--;
                http.get(`products/${params}/?page=${prev}`).then((response) => {
                    this.meta = response.data.meta;
                    this.data = response.data['data'];
                }).catch((error) => {
                    this.error = error.response.data;
                });
            }
        },


    },
    getters: {
        sliderOrImage() {

            if (this.item.images?.length > 1) return true;
            return false;
        },
        image() {
            return this.item.images?.map((i) => {
                return i.path;
            });
        }

    }
})
import { defineStore } from 'pinia';
import http from '@/base/http.js';
export const useCertificate = defineStore('certificate', {
    state: () => ({
        data: null,
        item: {},
        meta: {
            current_page: 1,
            last_page: 1,
        },
        empty: false,
        error: '',

    }),

    actions: {

        getAll() {
            http.get(`certificates?page=${this.meta.current_page}`).then((response) => {

                this.meta = response.data.meta;
                this.data = response.data.data;


            }).catch((error) => {
                this.error = error.response.data;

            });
        },

        getById(id) {
            const findItem = this.data.filter((d) => d.id == id);
            if (Object.keys(findItem).length) {
                this.item = null;
                this.item = findItem[0];
            } else {

                http.get(`/certificates/${id}`).then((response) => {
                    console.log(response.data['data'])
                    this.item = response.data['data'];
                });

            }
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
                this.getAll();

            }
        },
        previousPage(params) {
            if (this.canPreviousPage()) {

                this.meta.current_page--;
                this.getAll();

            }
        },
        show() {
            if (this.data.length !== 0 && this.meta.current_page)
                return true;
            return false;
        }
    }
})
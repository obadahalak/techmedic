import { defineStore } from "pinia";

export const useGlobal = defineStore('global',  {
    state: () => ({ 
        loading:false,
    }),
   
    actions: {
  
        setloading(value){
            this.loading = value;
        },
        
    },
})
import http from "@/base/http.js"


export function getCertificates(page){
     http.get(`certificates?page=${page}`).then((response)=>{
            return response.data;
    }).catch((error)=>{
        console.log(error);
    });
}
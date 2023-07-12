<script setup>
import { ref } from "vue";
import { useAuth } from '@/stores/admin/auth.js';
let email = ref('');

let password = ref('');
const Auth=useAuth();
function login() {
   
Auth.login({
        'email': email.value,
        'password': password.value,
    });
}
</script>

<template>

    <div class=" grid  grid-items-center place-items-center  ">
        <p v-for="error in Auth.error.errors" class="my-2 text-red-600">{{ error }}</p>
        <div class="bg-gray-500   text-white p-4 space-y-5 card-border  shadow-md lg:w-1/2 md:w-1/2 w-10/12 text-center mb-4 ">

           
            <h1 class="text-left text-lg font-bold py-4">Admin login</h1>
            
            <div>

                <input class="p-2 rounded-md border  w-8/12 text-black" type="text" v-model="email">
               
            </div>

            <div>

                <input class="p-2 rounded-md border w-8/12 text-black" type="text" v-model="password">
            </div>
            <div>

                <button @click="login" class="p-2 rounded-md border-2 w-1/2 hover:bg-gray-800">Login</button>
                
            </div>
        </div>
    </div>
</template>

<style  scoped>

.card-border{
    border-top-left-radius: 2rem;
    
    border-bottom-right-radius: 2rem;
}
</style>
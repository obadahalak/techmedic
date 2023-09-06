<template>
    <div class="mt-10 ml-10">
        <p class="text-pink-800 text-lg font-bold">EXPLORER</p>
        <div class="mt-4">
            <ul class="text-white  hover:cursor-pointer">
                <router-link :to="{ path: '/' }">

                    <li class="">Home</li>
                </router-link>
                <router-link :to="{ name: 'aboutUs' }">

                    <li class="mt-2">About us</li>
                </router-link>
                <router-link :to="{  name:'company' }">

                    <li class="mt-2">Products</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
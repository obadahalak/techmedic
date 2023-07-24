<script setup>
import {  ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute();

let listItems = ref([
  {
    name: 'Home',
    active: false,
    path:'home'
  },
  {
    name: 'Our products',
    active: false,
    path:'company'
  },
  {
    name: 'About us',
    active: false,
    path:'aboutUs'
  },
  {
    name: 'Certification',
    active: false,
    path:'certification'
  }
])

let props=defineProps(['menu']);
function activeItem(li) {
  
  listItems.value.map(function(l){  
    l.active=false;
  });
  listItems.value[li].active=true;
}

</script>

<template>

    
  <li class="nav-li p-2" v-for="(li , index) in listItems" v-show="props.menu" >
    <router-link :to="{name:`${li.path}`}">

      <div @click="activeItem(index)">
        <span>{{ li.name }}</span>
     
        <hr  v-if="route.name == li.path"  class="li-active"/>
      </div>
    </router-link>
  </li>
</template>
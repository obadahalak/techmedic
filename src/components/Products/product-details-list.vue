<script setup>
defineProps(['listDetails']);
</script>
<template>
     
        <li   class="w-10/12 text-gray-900 my-6">
        
        <div class="flex">
          
          <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><g transform="rotate(90 6 6)"><path fill="purple" d="M6.786 1.459a.903.903 0 0 0-1.572 0L1.122 8.628C.774 9.238 1.211 10 1.91 10h8.18c.698 0 1.135-.762.787-1.372l-4.092-7.17Z"/></g></svg>

          <p class="text-md ">
            {{ listDetails }}
          </p>
        </div>  
      </li>

    
</template>
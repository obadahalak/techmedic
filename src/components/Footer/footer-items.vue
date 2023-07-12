<script setup>
import aboutUsFooter from './AboutUs-footer.vue';
import explorerFooter from './Explorer-footer.vue';
import contactUsFooter from './ContactUs-footer.vue'
import ContactWithUsFooter from './ContactWithUs-footer.vue';



</script>

<template>
    <div class="">

  
    <div ref="footer" class="grid lg:grid-cols-4 md:grid-cols-2 bg-gray-800 gap-5 mt-auto p-10">
       
       
        <aboutUsFooter />

        <explorerFooter />

        <contactUsFooter />

        <ContactWithUsFooter />


    </div>
</div>
</template>
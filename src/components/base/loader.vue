<script setup>
import {useGlobal} from '@/stores/global';
</script>
<template>
    <img v-show="useGlobal().loading" class="spinner" src="@/assets/Spinner.gif" alt="">
</template>
<script setup>
import InfiniteLoading from 'v3-infinite-loading'

const props = defineProps(['load'])
</script>

<template>
  <InfiniteLoading @infinite="props.load">
    <template #spinner>
      <div class="d-flex  justify-center mt-4 pa-4 ">
        <VProgressCircular indeterminate />
      </div>
    </template>

    <template #complete>
      <div class="" />
    </template>
  </InfiniteLoading>
</template>

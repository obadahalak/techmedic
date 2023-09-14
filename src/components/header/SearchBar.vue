<!-- eslint-disable vue/require-default-prop -->
<script setup>
import { ref } from 'vue'

const props = defineProps({ search: { type: String }, categoryList: { type: Array } })
defineEmits(['selectCategory', 'search', 'reset'])

const categoryValue = ref()

const searchValue = ref()
</script>

<template>
  <VRow
    class=""
    justify="center"
  >
    <VCol
      cols="12"
      md="7"
      lg="7"
      sm="7"
      order="last"
      style="padding: 0px;"
    >
      <VTextField
        v-model="searchValue"
        label="search"
        variant="outlined"
        @keyup.enter="$emit('search', searchValue)"
      />
    </VCol>

    <VCol
      order="first"
      cols="12"
      md="3"
      lg="3"
      sm="3"
      style="padding: 0px;"
    >
      <VAutocomplete
        v-model="categoryValue"
        clearable
        :items="props.categoryList"
        item-title="name"
        item-value="id"
        variant="outlined"
        label="Select"
        @update:search="$emit('selectCategory', categoryValue)"
        @click:clear="$emit('reset')"
      />
    </VCol>
  </VRow>
</template>

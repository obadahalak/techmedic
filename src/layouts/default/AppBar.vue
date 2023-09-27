<script setup>
import { useGlobal } from '@/store/global'

const globalStore = useGlobal()
</script>

<template>
  <VAppBar height="80">
    <template #prepend>
      <VAppBarNavIcon
        v-if="$vuetify.display.smAndDown"
        @click="globalStore.drawer = !globalStore.drawer"
      />
    </template>
    <template #title>
      <RouterLink :to="{ name: 'Home' }">
        <VImg
          :class=" $vuetify.display.smAndDown ? 'ml-auto' : '' "
          src="@/assets/company-logo.webp"
          min-width="100"
          max-width="180"
        />
      </RouterLink>
    </template>
    <div v-show="!$vuetify.display.smAndDown">
      <VBtn
        variant="plain"
        text="Home"
        :to="{ name: 'Home' }"
      />

      <VBtn
        variant="text"
        text="Our products"
        :to="{ name: 'companies' }"
      />

      <VBtn
        variant="text"
        text="Certifictates"
        :to="{ name: 'certificates' }"
      />
      <VBtn
        variant="text"
        text="About us"
        :to="{ name: 'aboutus' }"
      />
    </div>
  </VAppBar>
</template>

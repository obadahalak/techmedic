<script setup>
import { useGlobal } from '@/store/global'
</script>

<template>
  <VCard elevation="0">
    <VLayout>
      <VNavigationDrawer
        v-model="useGlobal().drawer"
        temporary
      >
        <p class="text-h6 font-weight-bold  pa-2 text-center">
          TECHMEDIC
        </p>

        <VDivider />

        <VList
         role="tablist" aria-label="drawer Tabs"
          density="compact"
          nav
        >
          <VListItem
            base-color="green"
            prepend-icon="mdi-home-circle-outline"
            title="Home"
            :to="{ name: 'Home' }"
          />
          <VListItem
            prepend-icon="mdi-domain"
            title="Our products"
            :to="{ name: 'companies' }"
          />
          <VListItem
            prepend-icon="mdi-certificate-outline"
            title="Certifictates"
            :to="{ name: 'certificates' }"
          />
          <VListItem
            prepend-icon="mdi-information-outline"
            title="About us"
            :to="{ name: 'aboutus' }"
          />
        </VList>
      </VNavigationDrawer>
      <VMain
        style="padding: 0px;"
      >
        <slot />
      </VMain>
    </VLayout>
  </VCard>
</template>

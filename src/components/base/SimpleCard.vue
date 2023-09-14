<script setup>
const props = defineProps(['data', 'to'])

const route = props.to
</script>

<template>
  <VRow>
    <VCol
      v-for="item in props.data "
      :key="item.id"
      cols="12"
      sm="6"
      md="6"
      lg="6"
    >
      <VHover>
        <template #default="{ isHovering }">
          <VCard
            max-width="400"
            :to="{ name: route, params: { id: item.id } }"
            :rounded="isHovering ? 'lg' : ''"
            :elevation="isHovering ? 8 : 0"
            class="card my-8 mx-auto"
            border="sm"
          >
            <VImg
              in
              :src="item.image ?? item.logo"
              lazy-src="@/assets/default.png"
              max-height="255"
              contain
            />

            <VCardText class="bg-green-dark w-50 avatar_text pa-3 rounded-e-xl">
              {{ item.title ?? item.name }}
            </VCardText>
          </VCard>
        </template>
      </VHover>
    </VCol>
  </VRow>
</template>

<style scoped>
.avatar_text {

    position: absolute;
    inset-block-start: -1rem;

}

.card {
    position: relative;
    overflow: unset;
}
</style>

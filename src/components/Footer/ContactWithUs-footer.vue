<script setup>
import GmailIcon from '../svg/GmailIcon.vue'
import FacebookSvg from '../svg/FacebookISvg.vue'
</script>

<template>
  <div
    class="mt-10 ml-10"

    :class="$vuetify.display.smAndDown ? 'pb-7' : ''"
  >
    <p class="text-pink-darken-4 text-h6 font-weight-black">
      CONNECT WITH US
    </p>
    <div class="flex mt-4 ">
      <a
        class="mx-2"
        href="https://www.facebook.com/Techmedicco"
      >
        <FacebookSvg />

      </a>

      <a
        class="mx-2"
        href="mailto: tchmedic@scs-net.org"
        target="_blank"
      >

        <GmailIcon />
      </a>
    </div>
  </div>
</template>

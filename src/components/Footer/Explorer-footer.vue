<template>
  <div class="mt-10 ml-10">
    <p class="text-pink-darken-4 text-h6 font-weight-black">
      EXPLORER
    </p>
    <div class="mt-4">
      <ul
        class="text-white  "
        style="list-style: none; "
      >
        <RouterLink :to="{ name: 'Home' }">
          <li class="text-white">
            Home
          </li>
        </RouterLink>
        <RouterLink :to="{ name: 'aboutus' }">
          <li class="mt-2 text-white">
            About us
          </li>
        </RouterLink>
        <RouterLink :to="{ name: 'companies' }">
          <li class="mt-2 text-white">
            Products
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

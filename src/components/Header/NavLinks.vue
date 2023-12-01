<template>
  <div class="navbar-item bc d-none d-xl-block d-lg-block py-0 text-center">
    <RouterLink
      :to="link.Link"
      v-for="(link, idx) in navLinks"
      :id="idx"
      class="mx-2"
      :style="{ color: textColor }"
    >
      {{ link.name }}
    </RouterLink>
  </div>
</template>

<script setup>
const textColor = '#DCDCDC'; 

const navLinks = [
  {
    name: 'INICIO',
    Link: '/'
  },
  {
    name: 'PRODUCTOS',
    Link: '/products'
  },
  {
    name: 'CONTACTO',
    Link: '/contact'
  }
];
</script>

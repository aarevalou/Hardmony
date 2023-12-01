<template>
  <div class="row justify-content-center text-center">
    <RouterLink v-for="item in items" :to="`/details/${item.id}`" class="col-10 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="item.id">
      <div class="card">
        <img class="card-img-top" :src="item.imagen" alt="Card-image-cap" title="Card-image-cap" loading="lazy">
        <div class="card-body">
          <h5 class="card-title no-underline">{{ item.modelo }}</h5>
          <p class="card-text no-underline">${{ item.precio }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  marca: string;
  modelo: string;
  precio: number;
  stock: number;
  imagen: string; 
  categoria_id: number;
}

const sort = ref('CATEGORIAS');
const items = ref<Product[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    items.value = response.data;
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

</script>


<style>
.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover .overlay {
  opacity: 0.4;
}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover,
.card:active {
  transform: scaleY(1.02) scaleX(1.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25), 0 0px 40px rgba(0, 0, 0, 0.22);
}

.card-title.no-underline,
.card-text.no-underline {
  text-decoration: none;
}

</style>

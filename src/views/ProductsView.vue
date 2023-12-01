<template>
  <div>
    <h2 class="pt-3 text-center">Todos los productos</h2>
    <nav class="d-flex justify-content-center" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Productos</li>
      </ol>
    </nav>

    <div class="container mb-4">
      <div class="mx-3">
        <ProductsFilters />
        <div v-for="(product, index) in products" :key="index">
          <p>{{ product.modelo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsFilters from "../components/Products/Filters.vue";
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  // Tu componente Vue
  async mounted() {
    try {
      console.log("Haciendo solicitud a /api/products");
      const response = await axios.get("http://localhost:8080/products"); // Cambia la URL a /api/products
      console.log("Respuesta recibida:", response);
      if (response.data && response.data.length > 0) {
        this.products = response.data;
      }
    } catch (error) {
      console.error("Error al obtener la información de los productos:", error);
    }
  },

  components: {
    ProductsFilters,
  },
};
</script>

<style scoped>
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 16px;
}

.breadcrumb li {
  text-decoration: none !important;
  color: #f2be00 !important;
}

.breadcrumb a {
  text-decoration: none !important;
  color: #2c3539 !important;
}

.loading-message,
.no-data-message {
  text-align: center;
  padding: 20px;
  font-size: 18px;
}

.no-data-message {
  color: #d9534f; /* Puedes ajustar el color según tus preferencias */
}
</style>

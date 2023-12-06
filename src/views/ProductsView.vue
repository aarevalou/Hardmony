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
      </div>
      <div class="main-grid d-flex p-3">
        <ProductsFilterBar
      :updateCategories="updateCategories"
      :selectedCategories="selectedCategories"
      :updateBrands="updateBrands"
      :selectedBrands="selectedBrands"
      @updateCategories="updateCategories"
      @updateBrands="updateBrands"
      @updatePrice="updatePrice"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
    />
        <div class="col-11 col-md-12 col-lg-8 mx-auto" style="margin-left:25px !important">
          <ProductsCard :items="slicedCards" />
          <ProductsMoreButton @incrementCards="showMoreProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsFilters from "../components/Products/Filters.vue";
import ProductsFilterBar from "../components/Products/FilterBar.vue";
import ProductsCard from "../components/Products/Card.vue";
import ProductsMoreButton from "../components/Products/MoreButton.vue";

export default {
  data() {
    return {
      maxVisibleProducts: 6,
      minPrice: 0,
      maxPrice: 100000,
    };
  },
  computed: {
    products() {
      return this.$store.getters.visibleProducts;
    },
    slicedCards() {
      return this.products.slice(0, this.maxVisibleProducts);
    },
    selectedCategories() {
      return this.$store.state.selectedCategories;
    },
    selectedBrands() {
      return this.$store.state.selectedBrands;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    showMoreProducts() {
      this.maxVisibleProducts += 6;
    },

    updateCategories(newCategories) {
      console.log('Category ID:', newCategories[0]);
      this.$store.commit('setSelectedCategories', newCategories);
      if (newCategories.length > 0) {
        this.$store.dispatch('fetchProductsByCategory', newCategories[0]);
      } else {
        this.$store.dispatch('fetchProducts');
      }
    },

    updatePrice({ min, max }) {
      this.minPrice = min;
      this.maxPrice = max;
      this.$store.dispatch('fetchProductsByPrice', { min, max });
    },

    updateBrands(newBrands) {
      console.log('Brand ID:', newBrands[0]);
      this.$store.commit('setSelectedBrands', newBrands);
      this.$store.dispatch('fetchCategories');
    },
  },
  components: {
    ProductsFilters,
    ProductsFilterBar,
    ProductsCard,
    ProductsMoreButton,
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
  color: #d9534f;
}
</style>

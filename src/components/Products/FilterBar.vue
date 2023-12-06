<template>
  <div class="col-3 d-none d-lg-block d-xl-block">
    <div class="card-selector">
      <div class="card-body p-5">
        <div class="search-title">
          <h4>Categorías</h4>
          <h6 v-for="category in categories" :key="category.id" @click="toggleCategory(category.id)">
            {{ category.nombre }}
          </h6>
        </div>
        <div class="search-title">
          <h4>Marcas</h4>
          <label v-for="brand in brands" :key="brand.id" class="checkbox-label">
            <input type="checkbox" :checked="selectedBrands.includes(brand.id)" @change="toggleBrand(brand.id)" />
            {{ brand.nombre }}
          </label>
        </div>
        <div class="search-title">
          <h5>Precio</h5>
          <div class="price-range-container">
            <label for="minPrice">$ {{ minPrice }} - {{ maxPrice }}</label>
            <br />
            <input type="range" id="minPrice" :min="0" :max="maxPrice" v-model="minPrice" @input="updatePriceFilter" />
            <br />
            <input type="range" id="maxPrice" :min="minPrice" :max="1000000" v-model="maxPrice" @input="updatePriceFilter" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['selectedCategories', 'selectedBrands'],
  emits: ['updateCategories', 'updateBrands', 'updatePrice'],

  setup(props, { emit }) {
    const store = useStore();
    const categories = ref([]);
    const brands = ref([]);
    const minPrice = ref(0);
    const maxPrice = ref(1000000);

    const toggleCategory = (categoryId) => {
      const updatedCategories = props.selectedCategories.includes(categoryId)
        ? props.selectedCategories.filter((c) => c !== categoryId)
        : [...props.selectedCategories, categoryId];

      emit('updateCategories', updatedCategories);
    };

    const toggleBrand = (brandId) => {
      const updatedBrands = props.selectedBrands.includes(brandId)
        ? props.selectedBrands.filter((b) => b !== brandId)
        : [...props.selectedBrands, brandId];

      emit('updateBrands', updatedBrands);
    };

    const updatePriceFilter = () => {
      emit('updatePrice', { min: minPrice.value, max: maxPrice.value });
    };

    const incrementMinPrice = () => {
      minPrice.value = Math.min(minPrice.value + 10000, maxPrice.value);
      updatePriceFilter();
    };

    const decrementMinPrice = () => {
      minPrice.value = Math.max(minPrice.value - 10000, 0);
      updatePriceFilter();
    };

    const incrementMaxPrice = () => {
      maxPrice.value = Math.min(maxPrice.value + 10000, 100000);
      updatePriceFilter();
    };

    const decrementMaxPrice = () => {
      maxPrice.value = Math.max(maxPrice.value - 10000, minPrice.value);
      updatePriceFilter();
    };

    onMounted(async () => {
      try {
        await store.dispatch('fetchCategories');
        await store.dispatch('fetchBrands');

        categories.value = store.state.categories;
        brands.value = store.state.brands;
      } catch (error) {
        console.error('Error during setup:', error);
      }
    });

    return {
      categories,
      brands,
      minPrice,
      maxPrice,
      toggleCategory,
      toggleBrand,
      updatePriceFilter,
      incrementMinPrice,
      decrementMinPrice,
      incrementMaxPrice,
      decrementMaxPrice,
    };
  },
};
</script>

<style scoped>
.card-selector {
  color: #DCDCDC;
  height: 50rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title {
  margin-bottom: 60px;
}

.search-title h6 {
  cursor: pointer;
}

.checkbox-label {
  display: block;
  margin-bottom: 10px;
  color: white;
}

.checkbox-label input {
  margin-right: 5px;
  cursor: pointer;
}

.price-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.price-controls button {
  padding: 5px;
  cursor: pointer;
}
</style>

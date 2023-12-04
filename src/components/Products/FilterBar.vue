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
            <h6 v-for="brand in brands" :key="brand.id" @click="toggleBrand(brand.id)">
              {{ brand.nombre }}
            </h6>
          </div>
          <div class="search-title">
            <h5>Precio</h5>
            <input type="range" min="0" max="100" value="50" class="slider" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    props: ['updateCategories', 'selectedCategories', 'updateBrands', 'selectedBrands'],
  
    setup(props) {
      const store = useStore();
      const categories = ref([]);
      const brands = ref([]);
  
      const toggleCategory = (categoryId) => {
        const index = props.selectedCategories.indexOf(categoryId);
        if (index !== -1) {
          props.updateCategories(props.selectedCategories.filter((c) => c !== categoryId));
        } else {
          props.updateCategories([...props.selectedCategories, categoryId]);
        }
      };
  
      const toggleBrand = (brandId) => {
        console.log('Toggle Brand:', brandId);
        const index = props.selectedBrands.indexOf(brandId);
        if (index !== -1) {
          props.updateBrands(props.selectedBrands.filter((b) => b !== brandId));
        } else {
          props.updateBrands([...props.selectedBrands, brandId]);
        }
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
  
      return { categories, brands, toggleCategory, toggleBrand };
    },
  };
  </script>
  

  <style scoped>
  .card-selector {
    color: #DCDCDC;
    height: 40rem;
    background: #2c3539 !important;
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
  }
  
  .search-title {
    margin-bottom: 60px;
  }
  
  .search-title h6 {
    cursor: pointer;
  }
  
  .circle {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 6px;
    cursor: pointer;
  }
  </style>
  
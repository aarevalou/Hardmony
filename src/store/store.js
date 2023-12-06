// store.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    selectedCategories: [],
    categories: [],
    brands: [],
    productBrands: [],
    selectedBrands: [],
    maxVisibleProducts: 6,
    cartItems: [],
    isCartOpen: false,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedCategories(state, categories) {
      state.selectedCategories = categories;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSelectedBrands(state, brands) {
      state.selectedBrands = brands;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setProductBrands(state, productBrands) {
      state.productBrands = productBrands;
    },
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.10:8080/products');
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProductsByCategory({ commit }, categoryId) {
      try {
        const response = await axios.get(`http://192.168.1.10:8080/products/category/${categoryId}`);
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.10:8080/products/categories');
        if (response.data && response.data.length > 0) {
          commit('setCategories', response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchBrands({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.10:8080/products/brands');
        if (response.data && response.data.length > 0) {
          commit('setBrands', response.data);
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async fetchProductsByBrand({ commit }, brandId) {
      try {
        const response = await axios.get(`http://192.168.1.:8080/products/brand/${brandId}`);
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products by brand:', error);
      }
    },
    async fetchProductsByPrice({ commit }, { min, max }) {
      try {
        const response = await axios.get(`http://localhost:8080/products/price?min=${min}&max=${max}`);
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products by price:', error);
      }
    },
    async fetchProductsWithBrands({ commit }) {
      try {
        const productsResponse = await axios.get('http://192.168.1.10:8080/products');
        const brandsResponse = await axios.get('http://192.168.1.10:8080/products/brands');
        
        if (productsResponse.data && productsResponse.data.length > 0 && brandsResponse.data) {
          commit('setProducts', productsResponse.data);
          commit('setProductBrands', brandsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching products or brands:', error);
      }
    },
  },
  getters: {
    visibleProducts: (state) => {
      if (state.selectedCategories.length === 0 && state.selectedBrands.length === 0) {
        return state.products.slice(0, state.maxVisibleProducts);
      } else {
        return state.products
        .filter(product =>
          (state.selectedCategories.length === 0 || state.selectedCategories.includes(product.categoria_id)) &&
          (state.selectedBrands.length === 0 || state.selectedBrands.includes(product.marca_id))
        )
        .map(product => {
          const brand = state.productBrands.find(brand => brand.id === product.marca_id);
          return { ...product, marca: brand ? brand.nombre : 'Sin Marca' };
        })
        .slice(0, state.maxVisibleProducts);
      }
    },
  },
});

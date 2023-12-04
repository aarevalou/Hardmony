// store.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    selectedCategories: [],
    categories: [],
    brands: [],
    selectedBrands: [],
    maxVisibleProducts: 6,
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
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.8:8080/products');
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProductsByCategory({ commit }, categoryId) {
      try {
        const response = await axios.get(`http://192.168.1.8:8080/products/category/${categoryId}`);
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.8:8080/products/categories');
        if (response.data && response.data.length > 0) {
          commit('setCategories', response.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchBrands({ commit }) {
      try {
        const response = await axios.get('http://192.168.1.8:8080/products/brands');
        if (response.data && response.data.length > 0) {
          commit('setBrands', response.data);
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
    async fetchProductsByBrand({ commit }, brandId) {
      try {
        const response = await axios.get(`http://192.168.1.8:8080/products/brand/${brandId}`);
        if (response.data && response.data.length > 0) {
          commit('setProducts', response.data);
        }
      } catch (error) {
        console.error('Error fetching products by brand:', error);
      }
    },
  },
  getters: {
    visibleProducts: (state) => {
      if (state.selectedCategories.length === 0) {
        return state.products.slice(0, state.maxVisibleProducts);
      } else {
        return state.products
          .filter(product => state.selectedCategories.includes(product.categoria_id))
          .slice(0, state.maxVisibleProducts);
      }
    },
  },
});

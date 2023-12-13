<!-- CartItem.vue -->

<template>
    <div class="row">
      <div class="col4 col-xl-3 col-lg-3 col-md-3 col-sm-3">
        <img :src="item.img || ''" style="width: 90px;" alt="cart-item" title="cart-item" >
      </div>
      <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <h5>{{ item.title }}</h5>
        <h6>${{ item.price }}</h6>
        <p>Cantidad : {{ item.quantity }}</p>
      </div>
      <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
        <div class="remove-btn" @click="removeFromCart(item.id)">
          <img src="../../assets/img/icons/multiply.png" alt="remove" title="remove">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { defineProps } from 'vue';
  
  const store = useStore();
  const { item } = defineProps(['item']);
  
  const removeFromCart = (itemId) => {
    store.commit('removeFromCart', itemId);
  };
  </script>
  
  <style scoped>
  .remove-btn {
    cursor: pointer;
  }
  
  .remove-btn img {
    width: 30px;
    margin-top: 10px;
  }
  </style>
  
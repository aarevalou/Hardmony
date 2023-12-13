<template>
  <div class="bag" @click="openCart">
    <img width="25" height="25" src='../../assets/img/shopping_cart.png' alt="move-by-trolley" title="cart-trolley" />
    <span class="mb-3" v-if="store.itemsNumber">{{ store.state.itemsNumber }}</span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const openCart = () => {
  store.commit('toggleCart');
};
</script>

<style scoped>
.bag {
  position: relative;
}

.bag span {
  background-color: #6394F8;
  border-radius: 10px;
  color: white;
  position: absolute;
  font-size: 15px;
  line-height: 1;
  padding: 2px 3px 3px 3px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: -9px;
  bottom: 1rem;
}

.bag img {
  cursor: pointer;
  width: 25px;
  height: auto;
}
</style>

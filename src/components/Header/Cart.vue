<template>
  <div>
    <div :class="['cart', store.state.cartIsOpen ? 'on' : '']">
      <div class="cart-menu">
        <p class="text-center mt-4 pb-2 h3">Carrito</p>
        <hr />
        <div v-if="!store.state.itemsNumber" class="empty-cart-message">
          Tu carrito está vacío, intenta agregar algo.
        </div>
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
        <div v-if="store.state.itemsNumber" class="cart-total">
          <hr />
          <CartTotal />
        </div>
      </div>
    </div>
    <div :class="['overlay', store.state.cartIsOpen ? '' : 'off']" @click="closeCart"></div>
  </div>
</template>

<script setup>
import CartItem from '../Cart/Item.vue';
import CartTotal from '../Cart/Total.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isOpen = ref(false);

const closeCart = () => {
  store.commit('toggleCart');
};

const cartItems = computed(() => store.state.cartItems);
</script>


<style scoped>
.cart {
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: #2f3b3f;
  overflow-y: auto;
  z-index: 1051;
  transform: translateX(400px);
  transition: transform 0.4s;
}

.cart.on {
  transform: translateX(0);
}

.cart-menu {
  color: #eee;
  margin-left:20px;
}

.empty-cart-message {
  text-align: center;
  margin: 20px;
  font-style: italic;
}

.cart-total {
  margin-top: 20px;
}

.overlay {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.overlay.off {
  display: none;
}
</style>

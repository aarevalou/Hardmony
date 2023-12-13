<template>
  <div class="row align-items-center p-2" style="background:#272f33">
    <div class="col pl-3 pt-3">
      <h4>Subtotal</h4>
      <p class="fs-6 px-3" style="color:#303E49;margin-top: -8px">
        {{ `(${store.state.itemsNumber} items)` }}
      </p>
    </div>
    <div class="col text-center pr-3">
      <h4>${{ store.state.totalPrice.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>

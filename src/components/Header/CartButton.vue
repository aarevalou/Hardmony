<template>
  <div class="bag">
    <img data-bs-toggle="modal" width="25" height="25" src='../../assets/img/shopping_cart.png' alt="move-by-trolley" title="cart-trolley" />
  </div>
</template>

<script setup lang="ts">
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

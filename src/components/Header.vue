<template>
  <div>
    <nav class="navbar">
      <HeaderMobileMenu />
      <div class="navbar-group">
        <span class="navbar-brand py-0 pl-5">
          <img src="../assets/img/hardmony.png" width="90" height="18" alt="site-logo" title="site-logo">
        </span>
        <div class="d-flex justify-content-center align-items-center flex-grow-1">
          <HeaderNavLinks />
        </div>
      </div>
      <div class="navbar-group">
        <HeaderSearchBar />
        <HeaderCartButton @open="cartState" />
        &nbsp;&nbsp;
        <div class="user">
          <img data-bs-toggle="modal" data-bs-target="#userModal" width="25" height="25"
            src='../assets/img/account_circle.png' alt="gender-neutral-user"
            title="gender-neutral-user" />
        </div>
      </div>
    </nav>
    <HeaderUser />
  </div>
</template>

<script setup>

import HeaderMobileMenu from '../components/Header/MobileMenu.vue';
import HeaderNavLinks from '../components/Header/NavLinks.vue';
import HeaderCartButton from '../components/Header/CartButton.vue';
import HeaderUser from '../components/Header/UserModal.vue';
import HeaderSearchBar from '../components/Header/SearchBar.vue';
import HeaderCart from '../components/Header/Cart.vue';

import { ref } from 'vue';
const cart = ref(false)

const cartState = () => cart.value = !cart.value;

</script>

<style scoped>
nav {
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DCDCDC;
  background-color: #2C3539;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-item {
  margin-left: 13px;
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item .bc a:hover,
.navbar-item .bc a:active {
  color: #FFD700;
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}
.btn-sm {
  border-radius: 0;
}

form .btn-xl.btn-success.mt-3 {
  position: relative;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.user {
  cursor: pointer;
}

.search:focus {
  width: 160px;
  font-family: inherit;
  padding-left: 30px;
  border-color: #DCDCDC;
  box-shadow: 0 0 5px #DCDCDC;
  backface-visibility: hidden;
  perspective: 1000;
  background-size: 24px;
}

</style>

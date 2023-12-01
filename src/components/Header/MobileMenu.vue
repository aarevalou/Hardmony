
import { RouterLink } from 'vue-router';
<template>
    <div class="dropdown d-xl-none d-lg-none mr-auto">
        <img src="../../assets/img/menu.png" width="28" height="28" data-bs-toggle="dropdown"
            data-bs-target="#navd" aria-haspopup="true" aria-expanded="false" alt="mobile-menu" title="mobile-menu">
        <div class="dropdown-menu hb" aria-labelledby="navd">
            <RouterLink class="dropdown-item" to="/">INICIO</RouterLink>
            <RouterLink class="dropdown-item" to="/products">PRODUCTOS</RouterLink>
            <RouterLink class="dropdown-item" to="/contact">CONTACTO</RouterLink>
        </div>
    </div>
</template>C

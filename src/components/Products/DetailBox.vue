<template>
  <div>
    <div class="row mb-5">
      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <img class="img-fluid" :src="item && item.imagen ? item.imagen : ''" />
      </div>
      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-start">
        <div class="info pt-xl-0 pt-lg-0 pt-5">
          <span class="float-left pr-3">★★★★★</span>
          <h6 style="width: 190px">1 reseñas</h6>
          <h3 class="font-weight-bold pt-4">{{ item.marca }}</h3>
          <h1 class="font-weight-bold text-uppercase pt">{{ item.modelo }}</h1>
          <h4 class="price-font">{{ formatPrice(item.precio) }}</h4>
          <br /><br /><br />
          <div class="control number">
            <button class="decrement-button" @click="decrement" style="margin-right: 10px;">−</button>
            <span style="margin: 0 5px">{{ quantity }}</span>
            <button class="increment-button" @click="increment" style="margin-left: 10px;">+</button>
            <br><br>
          </div>
          <button class="add-to-cart-button" @click="addToCart">
            AGREGAR +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['item']);
const store = useStore();

const quantity = ref(1);

const increment = () => (quantity.value < 9 ? quantity.value++ : 0);
const decrement = () => (quantity.value > 1 ? quantity.value-- : 0);

const addToCart = () => {
  const productToAdd = {
    id: props.item.id,
    title: props.item.modelo,
    quantity: quantity.value,
    price: props.item.precio,
    img: props.item.imagen,
  };

  store.commit('addToCart', productToAdd);

  console.log(`Agregando ${quantity.value} elementos al carrito:`, productToAdd);
};

const formatPrice = (price) => {
  return price.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
};
</script>

<style scoped>
.img-fluid {
  min-width: 90% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.control .number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}

.control .number button {
  border: none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}

.control .number button:active {
  background-color: lightgrey;
}

.control .number button h5 {
  margin-left: 13px;
  margin-right: 13px;
}

.price-font {
  font-weight: 400;
  color: gray;
}

.add-to-cart-button {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 155px;
  height: 70px;
  background-color: #2c3539;
  color: #fff;
  font-size: 15px;
  padding: 0px 30px;
  cursor: pointer;
  position: relative;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.add-to-cart-button:hover,
.add-to-cart-button:focus {
  background-color: inherit;
  color: black;
}
</style>

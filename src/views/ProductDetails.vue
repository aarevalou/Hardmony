<template>
  <div class="container py-5" style="padding-top: 70px">
    <nav class="row justify-content-start" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/products">Productos</RouterLink>
        </li>
      </ol>
    </nav>
    <DetailsBox :item="productDetails" />
    <DetailsText :item="productDetails" />

    <div class="related-item">
      <hr />
      <h6 class="pb-4">PRODUCTOS RELACIONADOS</h6>
      <ProductsCard :items="relatedItems" />
    </div>
  </div>
</template>

<script>
import DetailsBox from "../components/Products/DetailBox.vue";
import DetailsText from "../components/Products/DetailText.vue";
import ProductsCard from "../components/Products/Card.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["visibleProducts"]),
    productDetails() {
      const productId = this.$route.params.id;
      const details =
        this.$store.state.products.find(
          (product) => String(product.id) === String(productId)
        ) || {};
      console.log("productDetails:", details);
      return details;
    },
    relatedItems() {
      const productId = this.$route.params.id;
      const currentProduct = this.$store.state.products.find(
        (product) => String(product.id) === String(productId)
      );

      if (currentProduct && currentProduct.categoria_id) {
        return this.$store.state.products
          .filter(
            (product) =>
              product.categoria_id === currentProduct.categoria_id &&
              product.id !== currentProduct.id
          )
          .slice(0, 3)
          .map((product) => ({
            id: product.id,
            imagen: product.imagen || "",
            modelo: product.modelo || "Producto",
            precio: product.precio || "0",
          }));
      } else {
        return [];
      }
    },
  },
  components: {
    DetailsBox,
    DetailsText,
    ProductsCard,
  },
};
</script>

<style scoped>
hr {
  width: 50px;
  border-bottom: 1px solid black;
}

.related-item {
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>

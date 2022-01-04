<template>
  <div class="row product-container">
    <app-product v-for="product in productList">
      <img
        class="card-img-top"
        :src="product.selectedImage"
        :alt="product.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <hr>
        <small> <strong>Count : </strong> {{ product.count }} </small>
        <br />
        <small> <strong>Price : </strong> {{ product.price }} </small>
        <br>
        <hr>
        <small> <strong>Total price : </strong> {{ product.totalPrice }} </small>
      </div>
    </app-product>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { eventBus } from "../main";
export default {
  components: {
    appProduct: Product,
  },
  data: function () {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("productAdded", (product) => {
      this.productList.push(product);
    });
  },
};
</script>

<style>
</style>
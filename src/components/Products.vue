<template>
  <div class="row product-container">
    <app-product :for="product in productList">
      <img
        class="card-img-top"
        src="/src/assets/default.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <small> <strong>Number : </strong> 1 </small>
        <br />
        <small> <strong>Cost : </strong> 10 </small>
        <br />
        <small> <strong>Price : </strong> 10 </small>
      </div>
    </app-product>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    appProduct: Product,
  },
  data: function () {
    return {
      productList: [],
    };
  },
};
</script>

<style>
</style>
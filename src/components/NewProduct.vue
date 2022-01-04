<template>
  <div class="row">
    <div class="card offset-2 col-md-3">
      <div class="card-body tex-center d-flex align-items-center flex-column">
        <img
          height="128"
          class="img-responsive text-center mb-3"
          :src="
            product.selectedImage == null
              ? '/src/assets/default.png'
              : product.selectedImage
          "
        />
        <input
          ref="file"
          type="file"
          style="display: none"
          @change="onChange($event)"
          class="form-control"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="$refs.file.click()"
        >
          Choose an image
        </button>
      </div>
    </div>

    <div class="col-md-5">
      <div class="col-md-11 card">
        <div class="card-body">
          <div class="form-group">
            <label>Product Name</label>
            <input
              :v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label>Count</label>
              <input
                v-model="product.count"
                type="text"
                class="form-control"
                placeholder="Count"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Price</label>
              <input
                v-model="product.price"
                type="text"
                class="form-control"
                placeholder="Price"
              />
            </div>
          </div>
          <button @click="addProduct" class="btn btn-outline-info btn-block">ADD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      product: {
        count: null,
        price: null,
        selectedImage: null,
        title: "Product",
        totalPrice: null,
      },
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
      eventBus.$emit("productAdded", this.product);
    },
    addProduct(){
      this.product.totalPrice = this.product.count * this.product.price;
      console.log(this.product)
    }
  },
};
</script>

<style>
</style>
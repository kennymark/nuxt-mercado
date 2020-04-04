<template>
  <div class="mb">
    <div class="m-6 mb-32" v-if="product">
      <h1 class="title">Edit Product</h1>
      <el-switch
        v-model="form.is_live"
        active-text="Published"
        inactive-text="Not Published"
        class="h-16"
        :width="50"
      />

      <div
        class="lg:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-12"
        v-if="product"
      >
        <div style="height:500px" class="shadow-xs rounded-lg flex items-center xl:w-4/5 sm:w-full">
          <img :src="product.imageurls.split(',')[0]" class="w-full" style="height:70%" />
        </div>
        <div class="block p-3 mx-auto">
          <!-- <p>{{product.imageurls.split(',').length}}</p> -->
          <!-- Amazon product 83 -->
          <div>
            <label for class="label">Name</label>
            <input class="input" v-model="product.name" />
          </div>

          <div class="flex justify-between">
            <div class="md:mr-3">
              <label for="Price" class="label">Pricing</label>
              <input class="input" v-model="product.price.max" />
            </div>

            <div>
              <label for="Price" class="label">Brand</label>
              <input class="input" v-model="product.brand" />
            </div>
          </div>

          <div>
            <label for="Price" class="label">Collection</label>
            <input class="input" v-model="product.brand" />
          </div>

          <div>
            <label for="Price" class="label">Categories</label>
            <input class="input" v-model="product.categories" />
          </div>

          <div>
            <div class="flex items-center justify-between m-0">
              <label for="Price" class="label">Variants</label>
              <button class="btn p-2 w-10 rounded-full">+</button>
            </div>

            <div class="mt-4">
              <button
                v-for="item in size"
                :key="item.value"
                class="px-5 py-1 rounded bg-green-200 btn mr-2 border-0 text-green-700 text-sm"
              >{{item.label}}</button>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:flex mt-10 sm:flex-col lg:flex-row">
        <div v-if="product.descriptions[0]" class="xl:w-3/5 mt-5 lg:pr-10">
          <label for="Price" class="label">Description</label>

          <text-editor :description="product.descriptions[0].value" />
          <p v-if="!product.descriptions[0]" class="mt-4">No description available</p>
        </div>

        <div class="mt-5" v-if="product.descriptions[0]">
          <div class="flex items-center justify-between m-0">
            <label for="Price" class="label">Features</label>
            <button class="btn p-2 w-10 rounded-full">+</button>
          </div>
          <div
            v-for="(feature,value) in product.features"
            :key="value"
            class="flex justify-between text-gray-700 my-1 items-center"
          >
            <input :id="value" v-model="feature.key" class="input mr-3 p-2 bg-white" />

            <input :id="value" v-model="feature.value[0]" class="input p-2 bg-gray-100 mr-3" />
            <button type="text" class="input p-2 bg-gray-100 w-16 bg-gray-400 text-center">X</button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-30 bg-green-200 fixed bottom-0 w-full p-4 mt-10">
      <button class="btn-account py-2" @click="updateProduct">Save</button>
      <button class="btn-account bg-red-500 py-2" @click="updateProduct">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Edit Product"
    };
  },

  computed: {
    product() {
      return this.$store.state.admin.currentProduct;
    }
  },

  data() {
    return {
      selectedSize: "",
      form: {
        is_live: true,
        description: ""
      },
      productCopy: this.product,
      size: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" }
      ]
    };
  },
  methods: {
    updateProduct() {
      console.log(this.product, this.form.is_live);
    }
  }
};
</script>

<style>
</style>
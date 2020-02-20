<template>
  <div class="container">
    <div class="flex items-end py-3 px-4">
      <p class="mr-5">Sort product by</p>
      <el-select v-model="sortValue" placeholder="Select" class="focus:border-gray-200">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-2 lg:py-5 p-4"
    >
      <div v-for="(product, key) in products" :key="key">
        <product-card :product="product" @viewProduct="viewProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from "~/firebase.config";

export default {
  layout: "product",
  async asyncData() {
    const db = firestore.collection("products");
    db.get().then(data => (this.rows = +data.size));
    const snap = await db.get();

    return {
      products: snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
    };
  },

  data() {
    return {
      sortValue: "",
      options: [
        { label: "Cheapest", value: "cheapest" },
        { label: "Most Expensive", value: "most_expensive" },
        { label: "Free Shipping", value: "free_shipping" },
        { label: "Name Ascending", value: "name_asc" },
        { label: "Name Descending", value: "name_desc" }
      ]
    };
  },
  methods: {
    viewProduct(product) {
      this.$router.push(`products/${product.id}`);
    }
  }
};
</script>

<style>
</style>
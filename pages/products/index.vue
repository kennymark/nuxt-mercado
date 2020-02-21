<template>
  <div class="container">
    <transition name="page">
      <div v-if="searchQuery" class="p-4">
        <h3 class="text-3xl font-medium text-gray-800">
          Results for
          <span class="text-green-500 font-normal">{{searchQuery.search}}...</span>
        </h3>
      </div>
    </transition>

    <div class="flex items-center py-3 px-4">
      <el-select v-model="sortValue" placeholder="Sort product by" class="focus:border-gray-200">
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
  head() {
    return {
      title: "Home"
    };
  },
  async asyncData() {
    const db = firestore.collection("products");
    // db.get().then(data => (this.rows = +data.size));
    const snap = await db.get();
    return {
      products: snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
    };
  },

  watch: {
    $route(route) {
      // const db = firestore.collection("products");
      this.searchQuery = route.query;
    }
  },

  data() {
    return {
      sortValue: "",
      searchQuery: "",
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
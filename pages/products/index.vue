<template>
  <div class="container">
    <!-- <h3 class="title">Products</h3> -->
    <div class="flex py-3">
      <p class="text-lg text-gray-600 mr-3">Sort</p>
      <el-select v-model="sortValue" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="lg:grid sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-2">
      <div
        v-for="(item,key) in 100"
        :key="key"
        class="bg-gray-200 cursor-pointer"
        style="min-height:400px"
        @click="viewProduct(item)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "product",
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
    viewProduct(item) {
      this.$router.push(`products/${item}`);
      console.log(item);
    }
  }
};
</script>

<style>
</style>
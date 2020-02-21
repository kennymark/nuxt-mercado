<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Orders</h1>
    <div
      v-for="(item,key) in 7 "
      :key="key"
      class="p-4 mx-auto border border-gray-200 mb-3 rounded-lg shadow-md lg:flex sm: sm:flex-col lg:flex-col bg-white"
    >
      <h1 class="text-xl mb-4 text-gray-600 font-medium">Delivered</h1>
      <div class="flex flex-row justify-between">
        <img
          src="https://picsum.photos/seed/200/300"
          alt
          class="object-contain rounded-lg shadow h-32"
        />

        <div class="description lg:flex-col sm:flex-row items-center">
          <h3 class="text-black uppercase font-medium text-gray-800">Order no</h3>
          <h3 class="text-black text-gray-700">Shipped on</h3>
          <h3 class="text-black text-gray-700">Item count 1</h3>

          <div class="buttons mt-10 text-gray-700 sm:flex-col">
            <button class="btn" @click="viewOrder(key)">View Order</button>
            <button class="btn">Track Order</button>
            <button class="btn">Return item/s</button>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="63"
      class="mt-3 w-full text-xl w-2/4 p-3"
      :small="false"
      :hide-on-single-page="true"
    />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "account",
  head() {
    return {
      title: "My Orders"
    };
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
    viewOrder(id) {
      console.log(id);
      this.$router.push(`orders/${id}`);
    }
  }
};
</script>

<style>
</style>
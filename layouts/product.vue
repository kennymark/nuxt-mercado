<template>
  <div>
    <Nav />
    <div class="sm:flex sm:flex-col lg:flex-row w-full">
      <div class="lg:w-1/6 sm:w-full md:w-full p-4 lg:min-h-screen sm:h-auto md:h-auto">
        <div class="rounded-lg text-gray-700 mt-4" v-for="item in items" :key="item.icon">
          <a to="#" class="border-gray-500 text-lg cursor-pointer">{{item.title}}</a>
        </div>
      </div>
      <div class="lg:w-4/5 sm:w-full sm:p-3 lg:p-4 container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  },
  data() {
    return {
      items: [
        { title: "Men", icon: "el-icon-s-data", route: "" },
        { title: "Women", icon: "el-icon-folder-add", route: "products" },
        { title: "Children", icon: "el-icon-s-grid", route: "categories" },

        { title: "Customers", icon: "el-icon-s-custom", route: "customers" },
        { title: "Orders", icon: "el-icon-sold-out", route: "orders" },
        {
          title: "Configuration",
          icon: "el-icon-s-tools",
          route: "config"
        }
      ]
    };
  }
};
</script>

<style>
</style>
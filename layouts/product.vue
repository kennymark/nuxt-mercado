<template>
  <div>
    <Nav />
    <CategoriesNav />
    <div class="sm:flex sm:flex-col lg:flex-row w-full">
      <div class="lg:w-1/6 sm:w-full md:w-full p-4 lg:min-h-screen sm:h-auto md:h-auto p-20">
        <div class="rounded-lg text-gray-800 mt-1 text-base" v-for="item in items" :key="item.icon">
          <a to="#" class="cursor-pointer">{{item.title}}</a>
        </div>
      </div>
      <div class="lg:w-4/5 sm:w-full sm:p-3 lg:p-4">
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
        { title: "Children", icon: "el-icon-s-grid", route: "categories" }
      ]
    };
  }
};
</script>

<style>
</style>
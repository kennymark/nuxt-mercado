<template>
  <div class="sm:flex sm:flex-col lg:flex-row w-full">
    <div class="lg:w-1/6 sm:w-full md:w-full border p-4 lg:min-h-screen sm:h-auto md:h-auto">
      <div class="text-base mb-10 flex flex-row justify-between">
        <nuxt-link to="/" class="rounded">
          <!--  Back -->
          <button class="btn shadow-sm hover:shadow-lg">
            <i class="el-icon-arrow-left" />Back
          </button>
        </nuxt-link>
        <button class="btn sm:hidden shadow-sm">Menu</button>
      </div>

      <div
        class="rounded-lg p-3 hover:bg-white mt-4 hover:shadow-2xl border-red-500 hover:border-gray-500"
        v-for="item in items"
        :key="item.icon"
      >
        <nuxt-link
          :to="'/admin/'+item.route"
          class="border-gray-500 text-lg"
          exact-active-class="font-medium"
        >
          <i :class="item.icon" class="mr-3"></i>
          {{item.title}}
        </nuxt-link>
      </div>
    </div>
    <div class="w-full sm:p-3 lg:p-4">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Overview", icon: "el-icon-s-data", route: "" },
        { title: "Products", icon: "el-icon-folder-add", route: "products" },
        { title: "Categories", icon: "el-icon-s-grid", route: "categories" },

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
<template>
  <div class="xl:flex sm:flex sm:flex-col lg:flex-row xl:flex-row w-full">
    <div
      class="xl:w-1/5 lg:w-2/5 sm:w-full md:w-full border p-4 lg:min-h-screen sm:h-auto md:h-auto"
    >
      <div class="text-base mb-10 flex flex-row justify-between">
        <nuxt-link to="/" class="rounded">
          <button class="btn shadow-sm hover:shadow-lg">
            <i class="el-icon-arrow-left" />Back
          </button>
        </nuxt-link>
        <button class="btn sm:hidden shadow-sm">Menu</button>
      </div>

      <div class="flex flex-col">
        <nuxt-link
          :to="'/admin/'+item.route"
          class="text-lg rounded-lg p-3 hover:bg-white mt-4 hover:shadow-2xl"
          v-for="item in items"
          :key="item.icon"
        >
          <i :class="item.icon" class="mr-3 text-lg"></i>
          {{item.title}}
        </nuxt-link>
      </div>
    </div>
    <div class="w-full sm:p-3 lg:p-4">
      <nuxt-child />
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
        { title: "Discounts", icon: "el-icon-discount", route: "discounts" },
        {
          title: "Promotions",
          icon: "el-icon-s-promotion",
          route: "promotions"
        },

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
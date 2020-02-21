<template>
  <div>
    <Nav />
    <CategoriesNav />
    <div class="sm:flex sm:flex-col lg:flex-row w-full">
      <div
        class="lg:w-1/6 sm:w-full md:w-full p-4 lg:min-h-screen sm:h-auto md:h-auto p-20 shadow-sm"
      >
        <div
          class="rounded-lg text-gray-700 mt-2 hover:text-green-500"
          v-for="item in items"
          :key="item.title"
        >
          <nuxt-link
            :to="'?search='+ item.title"
            class="cursor-pointer"
            exact-active-class="font-medium text-green-500 ml-3"
          >{{item.title}}</nuxt-link>
        </div>
      </div>

      <div class="lg:w-4/5 sm:w-full sm:p-3 lg:p-4">
        <nuxt-child />
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

  mounted() {
    console.log("hey");
  },
  data() {
    return {
      items: [
        { title: "shoes", route: "products" },
        { title: "jackets", route: "categories" },
        { title: "pants", route: "categories" },
        { title: "jeans", route: "categories" },
        { title: "rings", route: "categories" },
        { title: "sports wear", route: "categories" },
        { title: "shirts", route: "categories" },
        { title: "outdoors", route: "categories" },
        { title: "bags", route: "categories" }
      ]
    };
  }
};
</script>

<style>
</style>
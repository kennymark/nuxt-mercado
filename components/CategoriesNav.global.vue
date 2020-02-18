<template>
  <nav
    class="xl:flex sm:flex lg:flex-row sm:flex-col p-3 text-lg tracking-wide bg-black text-gray-300 justify-center"
  >
    <nuxt-link
      v-for="item in categories"
      :key="item.route"
      :to="item.route"
      class="hover:text-green-600 mr-3 uppercase"
    >{{item.name}}</nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "men", route: "/categories/men" },
        { name: "women", route: "/categories/women" },
        { name: "children", route: "/categories/children" }
      ]
    };
  }
};
</script>

<style>
</style>
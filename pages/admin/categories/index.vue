<template>
  <header-search title="categories">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0"
      slot="button"
      @click="createNewCategory"
    >Create Category</button>
  </header-search>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Categories"
    };
  },

  methods: {
    createNewCategory() {}
  }
};
</script>

<style>
</style>
<template>
  <header-search title="discount">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0 capitalize"
      slot="button"
      @click="createDiscount"
    >create discount</button>
  </header-search>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Discounts"
    };
  },
  methods: {
    createDiscount() {}
  }
};
</script>

<style>
</style>

order.metadata.item_count
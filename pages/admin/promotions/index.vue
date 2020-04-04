<template>
  <headerSearch title="Promotion">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0"
      slot="button"
      @click="createNewPromotion"
    >Create Promotion</button>
  </headerSearch>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Promotions"
    };
  },
  methods: {
    createNewPromotion() {}
  }
};
</script>

<style>
</style>
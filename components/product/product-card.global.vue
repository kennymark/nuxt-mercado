<template>
  <div
    :key="key"
    class="bg-gray-300 cursor-pointer mb-3"
    style="min-height:400px"
    @click="viewProduct(item)"
  ></div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    viewProduct(item) {
      this.$emit("viewProduct", item);
    }
  }
};
</script>

<style>
</style>
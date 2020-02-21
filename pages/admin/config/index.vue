<template>
  <div class="container mt-6">
    <h1 class="title">Config</h1>
  </div>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Configuration"
    };
  },
  data() {
    return {
      config: [
        { name: "taxes", description: "Set taxes accross products" },
        { name: "shipping", description: "Manage shipping for your inventory" },
        { name: "staff", description: "set permission across your company" }
      ]
    };
  }
};
</script>

<style>
</style>
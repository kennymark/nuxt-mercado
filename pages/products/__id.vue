<template>
  <div class="container">
    <div class="lg:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-12">
      <div class="bg-gray-200 h-64"></div>
      <div class="flex flex-col">
        <h1 class="text-3xl uppercase text-black">Amazon product 83</h1>
        <div class="text-xl text-gray-700">Price {{849 | currency()}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>

<style>
</style>
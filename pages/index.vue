<template>
  <div>
    <div class="bg-gray-200 carousel mb-4" style="min-height:600px"></div>
    <div class="container p-3">
      <h1 class="text-bold uppercase text-2xl text-black">new</h1>

      <div class="lg:grid sm:grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-4 sm:gap-2">
        <product-card v-for="(item,key) in 4" :key="key" />
      </div>

      <h1 class="text-bold uppercase text-2xl text-black mt-10">launching</h1>

      <div class="lg:grid sm:grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-2">
        <div
          v-for="(item,key) in 2"
          :key="key"
          class="bg-gray-300 h-64 p-20 flex-1 lg:mr-3 mb-3"
          style="min-height:440px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "homepage",
  components: {}
};
</script>

<style>
</style>

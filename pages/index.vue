<template>
  <div>
    <div class="bg-gray-200 carousel mb-4" style="min-height:600px"></div>
    <div class="container p-3">
      <h1 class="text-bold uppercase text-2xl text-black">new</h1>

      <div class="products sm:flex lg:flex sm:flex-col lg:flex-row mt-5">
        <div
          v-for="(item,key) in 4"
          :key="key"
          class="bg-gray-300 h-64 p-20 flex-1 lg:mr-3"
          style="min-height:300px"
        ></div>
      </div>

      <h1 class="text-bold uppercase text-2xl text-black mt-10">Launching</h1>

      <div class="products sm:flex lg:flex sm:flex-col lg:flex-row mt-5 mb-20">
        <div
          v-for="(item,key) in 2"
          :key="key"
          class="bg-gray-300 h-64 p-20 flex-1 lg:mr-3"
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

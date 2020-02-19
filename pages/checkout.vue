<template>
  <div class="container mt-6">
    <h1 class="title">Checkout</h1>

    <div class="flex sm:flex-col lg:flex-row">
      <div class="h-64 bg-gray-200 w-2/3 p-3 rounded-lg"></div>
      <div class="rounded-lg border w-1/3 p-3 ml-6 flex flex-col">
        <h2 class="title text-center">Your Order</h2>
        <div class="products h-20 border rounded-lg mb-2 bg-gray-100" v-for="item in 4" :key="item"></div>
        <h2 class="font-medium mt-3 text-xl">
          Total
          <span class="font-thin">£736</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
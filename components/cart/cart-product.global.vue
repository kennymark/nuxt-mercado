<template>
  <div class="border shadow-md flex">
    <p>{{product.name}}</p>
  </div>
</template>

<script>
export default {
  props: ["product", "length"]
};
</script>

<style>
</style>
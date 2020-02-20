<template>
  <div>
    <Nav />
    <div class="container mx-auto mt-5">
      <nuxt-child />
    </div>
  </div>
</template>

<style>
</style>

<script>
import Nav from "@/components/Nav";
export default {
  components: { Nav }
};
</script>
<template>
  <div>
    <div class="bg-gray-600 carousel mb-4">
      <!-- <el-carousel height="600px" :autoplay="true">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="text-4xl font-bold text-center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>-->

      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`" style="min-height:600px"></section>
        </b-carousel-item>
      </b-carousel>
    </div>

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
  components: {},
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  }
};
</script>

<style>
</style>

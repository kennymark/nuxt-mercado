<template>
  <div class="product">
    <div
      class="bg-white cursor-pointer mb-1 hover:shadow-lg border border-gray-200"
      style="max-height:400px; height:380px"
      @click="viewProduct(product)"
    >
      <img
        :src="product.imageurls.split(',')[0] || 'https://picsum.photos/600/300/?image=25'"
        alt
        class="h-full object-contain"
      />
      <!-- <button class="btn uppercase bg-transparent relative bottom-auto m-1">Add to cart</button> -->
    </div>
    <p class="text-gray-600">{{product.name || 'Blue Sweater' | truncate(20)}}</p>
    <!-- <p class="italic tracking-wider text-right">{{item.price || priceRandom | currency('£')}}</p> -->
  </div>
</template>

<script>
export default {
  props: ["product"],

  data() {
    return {
      priceRandom: Math.ceil(Math.random() * 400)
    };
  },
  methods: {
    viewProduct(product) {
      this.$emit("viewProduct", product);
    }
  }
};
</script>

<style>
.product:hover {
  transition: all 0.2s ease-out;
  transform: scale(1.05);
}
</style>
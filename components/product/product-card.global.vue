<template>
  <div class="product mb-3" v-if="product">
    <div
      class="bg-white cursor-pointer mb-1 hover:shadow-lg border border-gray-200 flex flex-col prodImg"
      style="height:380px"
      @click="viewProduct(product)"
    >
      <img
        :src="product.imageurls.split(',')[0] || 'https://picsum.photos/600/300/?image=25'"
        alt
        class="h-full object-contain"
      />
      <button
        class="uppercase bg-gray-800 tracking-widest p-2 text-gray-100 cartBtn hover:bg-gray-700 transition duration-200 focus:outline-none focus:text-green-500"
        @click.stop="addToCart(product)"
      >Add to cart</button>
    </div>

    <div class="flex justify-between">
      <p class="text-gray-600">{{product.name || 'Blue Sweater' | truncate(25)}}</p>
      <p
        class="tracking-wider text-right font-medium"
      >{{product.price.max || priceRandom | currency('£')}}</p>
    </div>
  </div>
</template>

<script>
import common from "~/mixins/common";
export default {
  props: ["product"],
  mixins: [common],
  data() {
    return {
      priceRandom: Math.ceil(Math.random() * 400)
    };
  }
};
</script>

<style>
.product:hover {
  transition: all 0.2s ease-out;
  transform: scale(1.03);
}

.product > .prodImg .cartBtn {
  display: none;
}
.product:hover .cartBtn {
  display: block;
}
</style>
<template>
  <div class="border-b border-gray-200 mb-3 flex flex-row p-2 items-start" :key="product.id">
    <img :src="product.imageurls.split(',')[0]" class="h-24 w-24" />

    <div class="block justify-between ml-6 lg:ml-10 w-full">
      <div class="flex flex-row justify-between">
        <p class="text-gray-600 text-sm">{{product.name | truncate(35) }}</p>

        <button
          @click="removeFromCart(product)"
          class="text-sm btn py-1 px-2 hover:bg-gray-800 hover:text-gray-400 text-gray-600"
        >
          Delete
          <i class="el-icon-delete" />
        </button>
      </div>

      <div class="price block">
        <div class="inline">
          <button class="focus:outline-none text-gray-600" @click="addToCart(product)">
            <i class="el-icon-plus" />
          </button>
          <button
            class="focus:outline-none w-12 my-2 text-gray-600 font-medium"
          >{{product.quantity}}</button>
          <button class="focus:outline-none text-gray-600" @click="decrementQuantity(product)">
            <i class="el-icon-minus" />
          </button>
          <span class="text-green-400 ml-4">{{product.price.max * product.quantity| currency('£')}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "~/mixins/common";

export default {
  mixins: [common],

  props: ["product"]
};
</script>

<style>
</style>
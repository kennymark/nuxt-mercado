<template>
  <div class="container">
    <div class="lg:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-12">
      <div style="height:500px" class="shadow-xs rounded-lg flex items-center xl:w-4/5 sm:w-full">
        <img
          :src="product.imageurls.split(',')[0]"
          class="w-full object-contain"
          style="height:70%"
        />
      </div>
      <div class="flex flex-col p-3 mx-auto">
        <!-- <p>{{product.imageurls.split(',').length}}</p> -->
        <!-- Amazon product 83 -->
        <h1 class="text-3xl uppercase text-black">{{product.name | truncate(25)}}</h1>
        <div class="text-xl text-gray-700">Price {{product.price.max | currency('£')}}</div>

        <div class="mt-5" v-if="product.descriptions[0]">
          <h5>Description</h5>
          <p
            v-if="product.descriptions[0]"
            class="text-gray-600 mt-2 text-sm"
          >{{ product.descriptions[0].value | truncate(descriptionLength) }}</p>
          <p v-if="!product.descriptions[0]" class="mt-4">No description available</p>
          <span
            v-if="product.descriptions[0]"
            class="text-blue-500 cursor-pointer"
            @click="readMore"
          >{{ !readMoreClicked ? 'Read more...' : 'Show less' }}</span>
        </div>

        <div class="sizes mt-10">
          <p class="uppercase mb-1 text-sm font-medium tracking-wide text-gray-800">sizes:</p>
          <el-select v-model="selectedSize" placeholder="Sizes" class="w-full">
            <el-option
              v-for="item in size"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

        <div class="lg:flex lg:flex-row sm:flex-col buttons mt-10 text-lg justify-round">
          <button
            class="btn mr-3 bg-gray-800 text-gray-200 hover:shadow-2xl"
            @click="addToCart(product)"
          >Add to Cart</button>
          <button
            class="btn mr-3 bg-green-500 text-gray-100 hover:shadow-2xl"
            @click="buyNow(product)"
          >Buy now</button>
          <button
            class="mr-3 hover rounded-full py-3 px-4 bg-gray-300 hover:bg-gray-500 hover:shadow-md"
          >
            <i class="el-icon-star-off" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:my-20 sm:my-10 p-3">
      <h1 class="text-2xl text-black uppercase">Related products</h1>

      <div class="lg:grid sm:grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-2">
        <!-- <product-card v-for="(item,key) in 4" :key="key" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from "~/firebase.config";
import common from "~/mixins/common";
export default {
  mixins: [common],
  head() {
    return {
      title: this.product.name
    };
  },
  async asyncData({ params }) {
    const { _id } = params;
    const currentProd = firestore.doc(`products/${_id}`).get();
    return {
      product: await currentProd.then(data => data.data())
    };
  },
  data() {
    return {
      descriptionLength: 400,
      readMoreClicked: false,
      name: "",
      selectedSize: "",
      size: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" }
      ]
    };
  },

  methods: {
    readMore() {
      this.readMoreClicked = !this.readMoreClicked;
      this.readMoreClicked
        ? (this.descriptionLength = Infinity)
        : (this.descriptionLength = 400);
    },
    buyNow(product) {},

    viewProduct(product) {}
  }
};
</script>

<style>
</style>
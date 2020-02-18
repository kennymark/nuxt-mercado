<template>
  <div class="container">
    <div class="lg:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-12">
      <div class="bg-gray-300 h-64" style="min-height:500px"></div>
      <div class="flex flex-col p-3 mx-auto">
        <h1 class="text-3xl uppercase text-black">Amazon product 83</h1>
        <div class="text-xl text-gray-700">Price {{849 | currency()}}</div>

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
          <button class="btn mr-3 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl">Add to Cart</button>
          <button class="btn mr-3 hover:bg-green-500 hover:text-gray-200 hover:shadow-xl">Buy now</button>
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

      <div class="lg:grid sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-2">
        <product-card v-for="(item,key) in 5" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      selectedSize: "",
      size: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" }
      ]
    };
  }
};
</script>

<style>
</style>
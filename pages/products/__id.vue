<template>
  <div class="container">
    <div class="lg:grid sm:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-12">
      <div class="bg-gray-300 h-64" style="min-height:500px"></div>
      <div class="flex flex-col p-2 mx-auto">
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

        <div class="flex lg:flex-row sm:flex-col buttons mt-10 text-lg">
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

    <div class="flex flex-col lg:my-20 sm:my-10">
      <h1 class="text-2xl text-black uppercase">Related products</h1>

      <div class="products sm:flex lg:flex sm:flex-col lg:flex-row mt-5">
        <div v-for="(item,key) in 5" :key="key" class="bg-gray-300 h-64 p-20 flex-1 lg:mr-3"></div>
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
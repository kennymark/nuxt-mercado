<template>
  <div class="xl:w-2/6 sm:w-full">
    <input
      type="text"
      class="py-3 w-full px-5 bg-gray-200 focus:outline-none border focus:border-gray-200 text-base rounded-lg focus:bg-white tracking-tight mr-3 my-0 sm:my-4 lg:my-0 focus:shadow-xl duration-200"
      placeholder="Search for products here..."
      v-model="model"
      @focus.passive="showSearchBox = true"
    />
    <div
      class="h-72 border rounded mt-3 bg-white z-40 absolute xl:w-2/6 sm:w-full p-3 shadow-2xl mx-auto overflow-auto mx-auto"
      v-if="showSearchBox"
      @click="showSearchBox = false"
    >
      Search
      <div class="h-16 bg-green-300 rounded mb-2 shadow-sm" v-for="data in 5" :key="data"></div>
    </div>
  </div>
</template>

      <!-- ref="searchbox" -->

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    model: String
  },
  data() {
    return {
      showSearchBox: false
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  width: 0;
}
</style>
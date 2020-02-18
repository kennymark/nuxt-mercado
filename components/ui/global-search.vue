<template>
  <transition name="fade">
    <!-- <input
      type="text"
      class="sm:w-full focus:outline-none bg-gray-300 p-4 text-lg tracking-tight mx-auto text-black border focus:border-gray-400"
      placeholder="Search for products here"
      v-if="show"
    />-->

    <input
      type="text"
      class="p-3 bg-gray-300 focus:outline-none border border-gray-200 focus:border-gray-300 w-2/6 text-base rounded-lg focus:bg-white mx-auto font-thin tracking-tight"
      placeholder="Search here"
      v-if="show"
      v-model="model"
    />
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    model: String
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
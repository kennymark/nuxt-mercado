<template>
  <transition name="fade">
    <input
      type="text"
      class="p-3 bg-gray-300 border focus:border-gray-300 w-2/6 text-base rounded-lg focus:bg-white tracking-tight"
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
<template>
  <div class="p-3 rounded-lg bg-white w-full card mb-3 sm:mb-5">
    <p class="text-xl text-gray-800" v-if="data.title">{{data.title}}</p>
    <p class="text-sm text-gray-600" v-if="data.description">{{data.description}}</p>

    <h3 class="text-3xl font-medium text-gray-700" v-if="data.text">{{data.text | currency('£')}}</h3>
    <!-- <h3 class="text-black text-3xl font-medium text-gray-700">{{data.text }}</h3> -->

    <slot />
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: ["data"]
};
</script>
<template>
  <div class="px-5 py-1 shadow-sm rounded-lg bg-white w-full h-auto">
    <p class="text-xl text-gray-700">{{data.title}}</p>
    <p class="text-sm text-gray-600">{{data.description}}</p>
    <h3 class="text-black text-4xl font-bold text-gray-800">{{data.text | currency('£')}}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: ["data"]
};
</script>
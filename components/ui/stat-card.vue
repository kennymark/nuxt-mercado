<template>
  <div class="p-3 rounded-lg bg-white w-full">
    <p class="text-xl text-gray-800">{{data.title}}</p>
    <p class="text-sm text-gray-600">{{data.description}}</p>
    <h3 class="text-black text-3xl font-medium text-gray-700">{{data.text | currency('£')}}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: ["data"]
};
</script>
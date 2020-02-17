<template>
  <div class="container mt-6">
    <h1 class="title">{{title |capitalize}}</h1>
    <input
      class="input bg-white focus:outline-none focus:bg-white focus:border-gray-400"
      :id="title+'-search'"
      type="text"
      @keyup="input"
      @keydown.enter="search"
      v-model="vmodel"
      :placeholder="'Search for ' + title "
    />
    <slot />
  </div>
</template>

<script>
export default {
  props: ["title", "vmodel"],
  methods: {
    input(e) {
      console.log(e.target.value);
      this.$emit("onInput", e.target.value);
    },
    search(e) {
      console.log("pressed enter");
      this.$emit("onSearch", e.target.value);
    }
  }
};
</script>
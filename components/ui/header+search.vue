<template>
  <div class="container mt-6">
    <div class="flex justify-between items-start">
      <h1 class="title">{{title |capitalize}}</h1>
      <slot name="button" />
    </div>
    <input
      class="input shadow-sm focus:border-gray-400"
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
      this.$emit("onSearch", this.vmodel);
      this.vmodel = "";
    }
  }
};
</script>
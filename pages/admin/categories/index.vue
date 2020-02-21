<template>
  <headerSearch title="categories" />
</template>

<script>
import headerSearch from "@/components/ui/header+search";
export default {
  layout: "admin",
  components: { headerSearch },
  head() {
    return {
      title: "Categories"
    };
  }
};
</script>

<style>
</style>
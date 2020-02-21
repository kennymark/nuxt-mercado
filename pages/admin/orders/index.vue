<template>
  <headerSearch title="Orders"></headerSearch>
</template>

<script>
import headerSearch from "@/components/ui/header+search";
export default {
  layout: "admin",
  components: { headerSearch },
  head() {
    return {
      title: "Orders"
    };
  },
  data() {
    return {
      // orders: new
    };
  }
};
</script>

<style>
</style>
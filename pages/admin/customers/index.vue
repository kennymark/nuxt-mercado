<template>
  <headerSearch title="customers"></headerSearch>
</template>

<script>
import headerSearch from "@/components/ui/header+search";
export default {
  layout: "admin",
  components: { headerSearch },
  head() {
    return {
      title: "Customers"
    };
  }
};
</script>

<style>
</style>
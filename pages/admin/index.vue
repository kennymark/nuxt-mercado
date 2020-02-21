<template>
  <div class="sm:flex lg:flex-row sm:flex-col">
    <div class="lg:w-2/3 mx-2 sm:w-full mx-auto xs:w-full">
      <h1 class="text-2xl text-black font-bold mb-3 sm:pt-10 ml-3">Overview</h1>

      <div class="grid xl:grid-cols-3 lg:grid-row-2 sm:grid-row-2 lg:gap-4 sm:gap-2 lg:py-2 p-2">
        <stat-card :data="{title:'Sales', description:'Earnings Monthly', text:20999}" />

        <stat-card :data="{title:'Products Sold', description:'Orders this month', text:328}" />

        <stat-card :data="{title:'Net Profit', description:'Profit this month', text:7640}" />
      </div>
    </div>

    <div
      class="lg:w-1/3 sm:w-full sm:mt-5 p-6 overflow-y-scroll md:rounded-lg bg-gray-400 lg:ml-8"
      style="max-height:900px "
    >
      <h1 class="text-2xl text-black mb-3 text-center">Activity</h1>
      <div
        v-for="(item,key) in data"
        :key="key"
        class="border border-gray-100 p-4 mb-3 shadow-sm rounded-lg bg-white"
      >
        <p>Order with total £{{number}} placed</p>
        <p class="text-gray-600">2 days ago</p>
      </div>
    </div>
  </div>
</template>

<script>
import StatCard from "@/components/ui/stat-card.vue";
export default {
  layout: "admin",
  components: { StatCard },
  head() {
    return {
      title: "Dashboard"
    };
  },
  computed: {
    number() {
      return Math.ceil(Math.random() * 400);
    }
  },
  data() {
    return {
      data: new Array(10)
    };
  }
};
</script>

<style>
</style>
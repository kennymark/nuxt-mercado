<template>
  <div class="sm:flex lg:flex-row sm:flex-col">
    <div class="w-2/3 mx-2">
      <h1 class="text-2xl text-black font-bold mb-3 ml-2">Overview</h1>

      <div class="sm:flex lg:flex-row sm:flex-col md:flex-col justify-between">
        <stat-card
          :data="{title:'Sales', description:'Earnings Monthly', text:20999}"
          class="card lg:w-1/3 sm:w-full mr-0 lg:mr-2"
        />

        <stat-card
          :data="{title:'Products Sold', description:'Orders this month', text:328}"
          class="card lg:w-1/3 sm:w-full mr-0 lg:mr-2"
        />

        <stat-card
          :data="{title:'Net Profit', description:'Profit this month', text:7640}"
          class="card lg:w-1/3 sm:w-full"
        />
      </div>
    </div>

    <div
      class="lg:w-1/3 sm:w-full sm:mt-5 p-6 overflow-y-scroll rounded-lg bg-gray-200"
      style="max-height:900px"
    >
      <h1 class="text-2xl text-black mb-3">Activity</h1>
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
  // middleware: "auth",
  computed: {
    number() {
      return Math.ceil(Math.random() * 400);
    }
  },
  data() {
    return {
      data: new Array(20)
    };
  }
};
</script>

<style>
</style>
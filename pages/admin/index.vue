<template>
  <div class="sm:flex lg:flex-row sm:flex-col">
    <div class="lg:w-2/3 mx-2 sm:w-full mx-auto xs:w-full p-3">
      <h1 class="text-2xl text-black font-bold mb-3 sm:pt-10">Overview</h1>

      <div class="xl:flex xl:flex-row sm:flex-col">
        <stat-card
          :data="{title:'Sales', description:'Earnings Monthly', text:20999}"
          class="lg:mr-3"
        />

        <stat-card
          :data="{title:'Products Sold', description:'Orders this month', text:328}"
          class="lg:mr-3"
        />

        <stat-card :data="{title:'Net Profit', description:'Profit this month', text:7640}" />
      </div>
      <div
        class="chart flex justify-center flex-col rounded-lg shadow-lg border border-gray-200 p-3"
      >
        <el-radio-group v-model="selectedTimePeriod" size="small" class="mx-auto">
          <el-radio-button label="1 month" value="1m" />
          <el-radio-button label="3 month" value="3m" />
          <el-radio-button label="6 month" value="6m" />
          <el-radio-button label="1 year" value="1y" />
        </el-radio-group>

        <vue-frappe
          id="my-chart-id"
          type="line"
          :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
          :height="350"
          :colors="['#008F68', '#FAE042']"
          :line-options="{regionFill: 1, heatline:1, hideDots: 1}"
          :data-sets="[{name: 'Sales', values: benedictsWeight2017}]"
        />
      </div>

      <div>
        <h2 class="text-2xl text-black mb-3 text-left mt-4">Top Products</h2>
        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(item,key) in 6"
            :key="key"
            class="border border-gray-200 p-5 rounded-lg cursor-pointer hover:shadow-lg flex items-center"
          >
            <div class="bg-gray-400 rounded-full mr-3 h-20 w-20">
              <img src alt />
            </div>

            <div>
              <p class="text-gray-600">Nike AirMax</p>
              <p class="text-gray-700">£268</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:w-1/3 sm:w-full sm:mt-5 p-6 overflow-y-scroll md:rounded-lg bg-gray-300 lg:ml-8"
      style="max-height:900px "
    >
      <h1 class="text-2xl text-black mb-3 text-center">Activity</h1>
      <div
        v-for="(item,key) in data"
        :key="key"
        class="border border-gray-100 p-4 mb-3 shadow-sm rounded-lg bg-white"
      >
        <p class="text-gray-800">Order with total £{{number}} placed</p>
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
      data: new Array(10),
      selectedTimePeriod: "1 month",
      benedictsWeight2017: [
        480,
        485,
        491,
        489,
        485,
        490,
        497,
        510,
        512,
        521,
        530,
        545
      ]
    };
  }
};
</script>

<style>
</style>
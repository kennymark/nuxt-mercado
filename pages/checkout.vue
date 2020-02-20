<template>
  <div class="container mt-6">
    <h1 class="title">Checkout</h1>

    <div class="sm:flex sm:flex-col lg:flex-row">
      <div class="h-64 shadow border lg:w-2/3 sm:w-full p-3 rounded-lg flex-col">
        <el-steps :active="active" simple align-center>
          <address />
          <el-step title="Delivery" icon="el-icon-postcard"></el-step>
          <el-step title="Payment" icon="el-icon-bank-card"></el-step>
          <el-step title="Place Order" icon="el-icon-c-scale-to-original"></el-step>
        </el-steps>

        <div class="btns flex justify-between">
          <button class="btn-account mt-24" v-if="active>0" @click="active--">Previous</button>

          <button class="btn-account mt-24" @click="next" v-if="active >= 0">Continue</button>
        </div>
      </div>
      <div
        class="rounded-lg border shadow lg:w-1/3 p-3 lg:ml-6 lg:mt-0 sm:mt-4 flex flex-col sm:w-full"
      >
        <h2 class="font-medium text-2xl mb-3 text-gray-700 text-center">Your Order</h2>
        <div class="products h-20 border rounded-lg mb-2 bg-gray-100" v-for="item in 4" :key="item"></div>
        <h2 class="font-medium mt-3 text-xl">
          Total
          <span class="font-thin">£736</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Address from "~/components/checkout/address.vue";
import Payment from "~/components/checkout/payment.vue";
// import Confirm from "~/components/checkout/confirm.vue";

export default {
  components: {
    Address,
    Payment
    // Confirm
  },
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style>
</style>
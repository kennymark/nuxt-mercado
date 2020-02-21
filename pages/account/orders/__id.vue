<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Order</h1>

    <div class="bg-white p-3 rounded-lg shadow-md">
      <h1 class="text-xl">Cart</h1>
      <div class="flex lg:flex-row sm:flex-col">
        <div class="lg:w-3/4 sm:w-full h-30 border p-3 rounded-lg lg:mr-4"></div>
        <div class="rounded-lg lg:w-1/4 sm:w-full h-30 border shadow-md p-3">Total price</div>
      </div>
      <div class="flex flex-wrap mb-2 m-3">
        <button
          class="bg-gray-800 rounded-md mt-10 p-3 border hover:shadow-xl text-gray-200 text-base tracking-wider mr-4 hover:bg-gray-900"
        >Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  layout: "account",
  head() {
    return {
      title: "Order"
    };
  },
  data() {
    return {
      currentPage: 1,
      form: {
        password: "",
        new_password: ""
      }
    };
  }
};
</script>

<style>
</style>
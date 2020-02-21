<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Account Overview</h1>

    <div class="bg-white p-3 rounded-lg shadow-md">
      <h2 class="text-center text-3xl text-gray-700">Welcome to your account</h2>

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
      title: "My Returns"
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
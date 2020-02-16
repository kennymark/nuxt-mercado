<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Change password</h1>

    <form @submit.prevent="updatePassword" class="bg-white p-3 rounded-lg shadow-md">
      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="password">Password</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="password"
          type="password"
          placeholder="******************"
          v-form="form.password"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="new-password">New Password</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="new-password"
          type="password"
          placeholder="******************"
          v-model="form.new_password"
        />
      </div>

      <div class="flex flex-wrap mb-2 m-3">
        <button
          class="bg-gray-800 rounded-md mt-10 p-3 border hover:shadow-xl text-gray-200 text-base tracking-wider mr-4 hover:bg-gray-900"
        >Update password</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  layout: "account",
  data() {
    return {
      currentPage: 1,
      form: {
        password: "",
        new_password: ""
      }
    };
  },
  methods: {
    updatePassword() {
      this.$alert(
        "Are you sure you want to update your password ?",
        "Update password?",
        {
          confirmButtonText: "OK",
          callback: action => {
            console.log(action);
          }
        }
      );

      console.log(this.$v);
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(10)
    },
    new_password: {
      between: between(20, 30)
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Personal Details</h1>

    <form @submit.prevent="updateDetails" class="bg-white p-3 rounded-lg shadow-md">
      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="grid-first-name">First Name</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="first_name"
          type="text"
          placeholder="Jane"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="last_name">Last Name</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="last_name"
          type="text"
          placeholder="Doe"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="email">Email</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="email"
          placeholder="example@example.com"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="phone">Phone no</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone"
          type="phone"
          placeholder="07985784280"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="dob">Date of birth</label>

        <div>
          <el-date-picker v-model="dob" type="date" placeholder="Pick a day" />
        </div>
      </div>

      <div class="flex flex-wrap mb-2 m-3">
        <button
          class="bg-gray-800 rounded-md mt-10 p-3 border hover:shadow-xl text-gray-200 text-base tracking-wider mr-4 hover:bg-gray-900"
        >Update Details</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "account",
  data() {
    return {
      currentPage: 1,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        dob: ""
      }
    };
  },
  methods: {
    updateDetails() {
      this.$alert(
        "Are you sure you want to update your details?",
        "Update Details?",
        {
          confirmButtonText: "OK",
          callback: action => {
            console.log(action);
          }
        }
      );
    }
  }
};
</script>

<style>
</style>
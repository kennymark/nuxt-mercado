<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Personal Details</h1>

    <form @submit.prevent="updateDetails" class="bg-white p-3 rounded-lg shadow-md">
      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="grid-first-name">First Name</label>
        <input class="input" id="first_name" type="text" placeholder="Jane" />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="last_name">Last Name</label>
        <input class="input" id="last_name" type="text" placeholder="Doe" />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="email">Email</label>
        <input class="input" id="email" type="email" placeholder="example@example.com" />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="phone">Phone no</label>
        <input class="input" id="phone" type="phone" placeholder="07985784280" />
      </div>

      <div class="flex flex-col mb-4 mx-3">
        <label class="label" for="dob">Date of birth</label>

        <el-date-picker v-model="form.dob" type="date" placeholder="Pick a day" change="p-3" />
      </div>

      <div class="flex flex-wrap mb-2 m-3">
        <button class="btn-account mt-10">Update Details</button>
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
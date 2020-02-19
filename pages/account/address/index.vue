<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10 ml-3">Address</h1>
    <button
      class="rounded-md mb-4 p-3 bg-white border border-gray-200 hover:shadow-xl"
      @click="addressForm = !addressForm"
    >Add new address</button>

    <div class="border rounded-lg h-auto p-6 mb-3 bg-white shadow-md">
      <h2 class="text-2xl text-black">Default Address</h2>

      <div class="text-lg text-gray-600">
        <p>Doreen Dogbey</p>
        <p>28 Cascade Road</p>
        <p>Speke</p>
        <p>Liverpool,Merseyside</p>
        <p>L24 9LH,UK</p>
        <p>07484680764</p>
      </div>
      <div class="buttons">
        <button @click="editAddress" class="btn-account">Edit address</button>
        <button
          @click="deleteAddress"
          class="rounded-md mt-10 px-6 py-3 border hover:shadow-xl text-base tracking-wider text-gray-800"
        >Delete address</button>
      </div>
    </div>

    <form
      @submit.prevent="updateDetails"
      v-if="addressForm"
      class="p-6 bg-white shadow-md rounded-lg"
    >
      <div class="flex flex-wrap mb-3">
        <label class="label" for="address_line_1">Address Line 1</label>
        <input class="input" id="address_line_1" type="text" placeholder="No 10 Downing Street" />
      </div>
      <div class="flex flex-wrap mb-3">
        <label class="label" for="address_line_2">Address Line 2</label>
        <input class="input" id="address_line_2" type="text" placeholder="Chester" />
      </div>
      <div class="flex flex-wrap mb-3">
        <label class="label" for="city">City</label>
        <input class="input" id="city" type="text" placeholder="Chester" />
      </div>
      <div class="flex flex-wrap mb-3">
        <label class="label" for="country">Country</label>
        <input class="input" id="country" type="text" placeholder="Chester" />
      </div>

      <div class="flex flex-wrap mb-3">
        <label class="label" for="post_code">Post Code</label>
        <input class="input" id="post_code" type="text" placeholder="Chester" />
      </div>

      <div class="flex flex-wrap mb-2">
        <button @click="saveAddress" class="btn-account mt-10">Save Address</button>
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
      addressForm: false
    };
  },
  methods: {
    updateDetails() {},
    saveAddress() {
      this.$alert("Save new address", "Add address", {
        confirmButtonText: "OK",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    editAddress() {},
    deleteAddress() {
      this.$alert(
        "Are you sure you want to delete this address?",
        "Delete address?",
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
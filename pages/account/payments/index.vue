<template>
  <div class="container w-3/4 lg:w-3/4 sm:w-4/4">
    <h1 class="title sm:mt-10">Payments Info</h1>
    <button
      class="rounded-md mb-4 shadow-sm p-3 bg-white border border-gray-200 hover:shadow-xl"
      @click="addressForm = !addressForm"
    >Add new card</button>

    <div class="border rounded-lg h-auto p-6 mb-3 bg-white shadow-md">
      <h2 class="text-2xl text-black">Default Card</h2>

      <div class="text-lg text-gray-600">
        <p>Doreen Dogbey</p>
        <p>28 Cascade Road</p>
        <p>Speke</p>
        <p>Liverpool,Merseyside</p>
        <p>L24 9LH,UK</p>
        <p>07484680764</p>
      </div>
      <div class="buttons">
        <button
          class="bg-gray-800 rounded-md mt-10 p-3 border hover:shadow-xl text-gray-200 text-base tracking-wider mr-4 hover:bg-gray-900"
        >Edit payment</button>
        <button
          @click="deletePayment"
          class="rounded-md mt-10 px-6 py-3 border hover:shadow-xl text-base tracking-wider text-gray-800"
        >Delete payment</button>
      </div>
    </div>

    <form
      @submit.prevent="updateDetails"
      v-if="addressForm"
      class="bg-white p-3 shadow-xl rounded-lg"
    >
      <div
        class="lg:grid sm:grid lg:grid-cols-3 sm:grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-2 mt-4"
      >
        <div class="flex flex-wrap mb-3">
          <label class="label" for="grid-city">Card Number</label>
          <input class="input" id="card_no" type="text" placeholder="424242424242" />
        </div>
        <div class="flex flex-wrap mb-3">
          <label class="label" for="grid-city">Expiration Date</label>
          <input class="input" id="exp-date" type="text" placeholder="Chester" />
        </div>
        <div class="flex flex-wrap mb-3">
          <label class="label" for="grid-city">City</label>
          <input class="input" id="grid-city" type="text" placeholder="Chester" />
        </div>
      </div>

      <div class="flex flex-wrap mb-2">
        <button @click="savePayment" class="btn-account mt-10">Save Card</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "account",
  head() {
    return {
      title: "My Payments"
    };
  },
  data() {
    return {
      currentPage: 1,
      addressForm: false
    };
  },
  methods: {
    updateDetails() {},
    savePayment() {},
    deletePayment() {
      this.$alert(
        "Are you sure you want to delete this card?",
        "Delete card?",
        {
          confirmButtonText: "Yes",
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
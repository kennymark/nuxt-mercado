<template>
  <form @submit.prevent="updateDetails">
    <h2 class="text-2xl font-medium text-gray-700 mb-4">Payment Information</h2>

    <div class="flex flex-wrap mb-3">
      <label class="label" for="grid-city">Card Name</label>
      <input class="input" id="card_no" type="text" placeholder="Jane Doe" />
    </div>
    <div class="flex flex-wrap mb-3">
      <label class="label" for="grid-city">Promo Code</label>
      <input class="input" id="card_no" type="text" placeholder="L35698?" />
    </div>
    <div
      class="lg:grid sm:grid lg:grid-cols-3 sm:grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-2 mt-4"
    >
      <div class="flex flex-wrap mb-3">
        <label class="label" for="card_no">Card Number</label>
        <input class="input" id="card_no" type="text" placeholder="424242424242" />
      </div>
      <div class="flex flex-wrap mb-3">
        <label class="label" for="exp-date">Expiration Date</label>
        <input class="input" id="exp-date" type="text" placeholder="12/30" />
      </div>
      <div class="flex flex-wrap mb-3">
        <label class="label" for="cvc">CVC</label>
        <input class="input" id="cvc" type="text" placeholder="cvc" />
      </div>
    </div>

    <!-- <div class="flex flex-wrap mb-2">
        <button class="btn-account mt-10">Save Card</button>
    </div>-->
  </form>
</template>

<script>
export default {
  methods: {
    updateDetails() {}
  }
};
</script>

<style lang="scss" scoped>
</style>
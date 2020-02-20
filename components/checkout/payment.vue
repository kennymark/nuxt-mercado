<template>
  <div>
    <form @submit.prevent="updateDetails" class="bg-white p-3 shadow-xl rounded-lg">
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
          <label class="label" for="grid-city">CVC</label>
          <input class="input" id="grid-city" type="text" placeholder="Chester" />
        </div>
      </div>

      <div class="flex flex-wrap mb-2">
        <button class="btn-account mt-10">Save Card</button>
      </div>
    </form>
  </div>
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
<template>
  <form @submit.prevent="checkoutAddress" class="bg-white">
    <h2 class="text-2xl font-medium text-gray-700 mb-4">Delivery Information</h2>
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

    <div class="flex flex-wrap">
      <label class="label" for="post_code">Post Code</label>
      <input class="input" id="post_code" type="text" placeholder="Chester" />
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    checkoutAddress() {}
  }
};
</script>

<style>
</style>
<template>
  <div>
    <h2 class="text-2xl font-medium text-gray-700 mb-4">Place your order</h2>
    <el-checkbox v-model="checked">
      <p class="py-5">
        I agree to the
        <span>Terms, Condition, Privacy and Return policies</span>
      </p>
    </el-checkbox>

    <button
      class="btn bg-green-500 text-gray-200 hover:shadow-2xl lg:mb-5 w-full py-4 uppercase text-bold"
    >Place order</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style scoped>
</style>
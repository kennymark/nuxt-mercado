<template>
  <el-dialog :title="title || 'title'" :visible.sync="show" :width=" width || '30%'">
    <slot />
    <span slot="footer" class="dialog-footer">
      <el-button @click="onNoCLick">Cancel</el-button>
      <el-button type="primary" @click="onYesCLick">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["title", "show", "width"],
  methods: {
    onYesCLick() {
      this.show = false;
      this.$emit("onYesClick", null);
    },
    onNoCLick() {
      this.show = false;
      this.$emit("onNoClick", null);
    }
  }
};
</script>

<style>
</style>
<template>
  <header-search title="categories">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0"
      slot="button"
      @click="createNewCategory"
    >Create Category</button>

    <el-table
      :data="categories"
      @current-change="rowClicked"
      class="mt-10 shadow-lg rounded-lg border border-gray-200 w-full"
    >
      <el-table-column prop="name" label="Name" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.name | truncate(50)}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="date" label="Date" sortable>
        <template slot-scope="scope">
          <span>{{ new Date(scope.row.dateadded).toLocaleDateString() }}</span>
        </template>
      </el-table-column>
    </el-table>
  </header-search>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Categories"
    };
  },
  data() {
    return {
      categories: []
    };
  },
  methods: {
    createNewCategory() {},
    rowClicked(val) {
      this.$store.commit("admin/setCurrentCategory", val);
      this.$router.push(`category/${val.id}`);
    }
  }
};
</script>

<style>
</style>
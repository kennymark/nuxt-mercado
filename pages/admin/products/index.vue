<template>
  <headerSearch title="products">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0"
      slot="button"
      @click="createNewProduct"
    >Create product</button>
    <el-table
      :data="tableData"
      highlight-current-row
      @current-change="rowClicked"
      class="mt-10 shadow-lg rounded-lg border border-gray-200 w-full"
    >
      <el-table-column prop="date" label="Date"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </headerSearch>
</template>

<script>
import headerSearch from "@/components/ui/header+search";
export default {
  layout: "admin",
  components: { headerSearch },
  head() {
    return {
      title: "Products"
    };
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  methods: {
    rowClicked(val) {
      console.log(val);
      this.$router.push(`products/edit-product/${val.name}`);
    },
    createNewProduct() {
      this.$router.push("products/add-product");
    }
  }
};
</script>

<style>
</style>
<template>
  <header-search title="products">
    <button
      class="btn bg-gray-800 text-gray-300 shadow-sm border-0"
      slot="button"
      @click="createNewProduct"
    >Create product</button>

    <el-table
      :data="products"
      @current-change="rowClicked"
      class="mt-10 shadow-lg rounded-lg border border-gray-200 w-full"
    >
      <el-table-column prop="name" label="Name" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.name | truncate(50)}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="brand" label="Brand" max-width="200" sortable />

      <el-table-column prop="date" label="Date" sortable>
        <template slot-scope="scope">
          <span>{{ new Date(scope.row.dateadded).toLocaleDateString() }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="price.max" label="Price" width="100" max-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.price.max | currency('£')}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="products.length"
      class="my-3"
    ></el-pagination>
  </header-search>
</template>

<script>
import { firestore } from "~/firebase.config";
export default {
  layout: "admin",

  head() {
    return {
      title: "Products"
    };
  },

  async asyncData() {
    const db = firestore.collection("products").limit(10);
    const snap = await db.get();
    return {
      products: snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
    };
  },

  methods: {
    rowClicked(val) {
      this.$store.commit("admin/setCurrentProduct", val);
      this.$router.push(`products/edit-product/${val.id}`);
    },
    createNewProduct() {
      this.$router.push("products/add-product");
    }
  }
};
</script>

<style>
</style>
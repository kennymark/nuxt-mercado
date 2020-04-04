<template>
  <header-search title="Orders">
    <el-table
      :data="orders"
      @current-change="rowClicked"
      class="mt-10 shadow-lg rounded-lg border border-gray-200 w-full"
    >
      <el-table-column prop="id" label="Order Id" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.id | truncate(50)}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="created_at" label="Created at" sortable>
        <template slot-scope="scope">
          <span>{{ new Date(scope.row.created_at * 1000).toLocaleDateString() }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="total" label="Total" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.total / 100 | currency('£')}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="metadata" label="Quantity" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.metadata.item_count }}</span>
        </template>
      </el-table-column>
    </el-table>
  </header-search>
</template>

<script>
import { firestore } from "~/firebase.config";

export default {
  layout: "admin",
  head() {
    return {
      title: "Orders"
    };
  },

  async asyncData() {
    const db = firestore.collection("orders");
    const snap = await db.get();
    return {
      orders: snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
    };
  },

  data() {
    return {
      // orders: new
    };
  },

  methods: {
    rowClicked(val) {
      this.$store.commit("admin/setCurrentOrder", val);
      this.$router.push(`orders/${val.id}`);
    }
  }
};
</script>

<style>
</style>
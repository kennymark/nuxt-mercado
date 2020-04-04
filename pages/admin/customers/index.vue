<template>
  <header-search title="customers">
    <el-table
      :data="customers"
      @current-change="rowClicked"
      class="mt-10 shadow-lg rounded-lg border border-gray-200 w-full"
    >
      <el-table-column prop="id" label="ID" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="Name" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.name || 'undefined' | truncate(50)}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="date" label="Date" sortable>
        <template slot-scope="scope">
          <span>{{ new Date(scope.row.dateadded).toLocaleDateString() }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column prop="email" label="Email" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.price.max | currency('£')}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="Address" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.price.max | currency('£')}}</span>
        </template>
      </el-table-column>-->
    </el-table>
  </header-search>
</template>

<script>
import { firestore } from "~/firebase.config";

export default {
  layout: "admin",

  head() {
    return {
      title: "Customers"
    };
  },

  async asyncData() {
    const db = firestore.collection("customers");
    const snap = await db.get();
    const data = snap.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    console.log({ data });
    return {
      customers: data
    };
  },

  methods: {
    rowClicked(val) {
      this.$store.commit("admin/setCurrentCustomer", val);
      this.$router.push(`customers/${val.id}`);
    }
  }
};
</script>

<style>
</style>
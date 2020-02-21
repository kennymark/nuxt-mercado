<template>
  <div class="sm:flex sm:flex-col lg:flex-row w-full">
    <div class="xl:w-1/5 lg:w-2/5 sm:w-full border p-4 lg:min-h-screen sm:h-auto md:h-auto">
      <div class="text-base mb-10 flex flex-row justify-between">
        <nuxt-link to="/" class="rounded">
          <!--  Back -->
          <button class="btn shadow-sm hover:shadow-lg">
            <i class="el-icon-arrow-left" />Back
          </button>
        </nuxt-link>
        <button class="btn sm:hidden shadow-sm">Menu</button>
      </div>

      <div
        class="rounded-lg p-3 hover:bg-white mt-4 hover:shadow-2xl border-red-500 hover:border-gray-500"
        v-for="item in items"
        :key="item.icon"
      >
        <nuxt-link :to="'/account/'+item.route" class="border-gray-500 text-lg">
          <i :class="item.icon" class="mr-3"></i>
          {{item.title |capitalize}}
        </nuxt-link>
      </div>
      <p
        class="border-gray-500 text-lg p-3 hover:bg-white mt-4 hover:shadow-2xl rounded-lg cursor-pointer"
        @click="signout"
      >
        <i class="el-icon-s-fold mr-3"></i>
        Sign out
      </p>
    </div>
    <div class="w-full xl:pt-10 sm:p-2 pt-10 bg-gray-200">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase.config";
export default {
  data() {
    return {
      items: [
        { title: "account", icon: "el-icon-user-solid", route: "" },
        { title: "orders", icon: "el-icon-goods", route: "orders" },
        { title: "Returns", icon: "el-icon-sell", route: "returns" },
        {
          title: "personal details",
          icon: "el-icon-s-custom",
          route: "details"
        },
        { title: "address", icon: "el-icon-postcard", route: "address" },
        { title: "payments", icon: "el-icon-bank-card", route: "payments" },
        {
          title: "change password",
          icon: "el-icon-unlock",
          route: "change-password"
        }
      ]
    };
  },
  methods: {
    signout() {
      auth.signOut().then(res => {
        this.$store.commit("user/changeAuthState", false);
        this.$router.push("/products");
      });
    }
  }
};
</script>

<style>
</style>
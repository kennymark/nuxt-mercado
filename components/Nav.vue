<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6 border-gray-100">
    <div class="flex items-center flex-shrink-0 mr-6">
      <nuxt-link to="/" class="block text-lg mt-4 lg:inline-block lg:mt-0 hover:text-gray-600">Home</nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded border-gray-400 hover:text-gray-400 hover:border-white"
      >Menu</button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow text-lg">
        <nuxt-link to="/products" class="link lg:inline-block hover:text-gray-600">Products</nuxt-link>
        <nuxt-link to="/admin" class="link lg:inline-block hover:text-gray-600">Admin</nuxt-link>
      </div>

      <div class="text-lg">
        <nuxt-link
          to="/login"
          class="link lg:inline-block hover:text-gray-600"
          v-if="!$store.state.user"
        >Login</nuxt-link>

        <nuxt-link
          to="/signup"
          class="link lg:inline-block hover:text-gray-600"
          v-if="!$store.state.user"
        >Signup</nuxt-link>

        <nuxt-link to="/account" class="link lg:inline-block hover:text-gray-600">
          <i class="el-icon-user font-bold"></i>
        </nuxt-link>

        <p class="link lg:inline-block hover:text-gray-600 cursor-pointer" @click="openCart">
          <i class="el-icon-search font-bold"></i>
        </p>

        <a class="link lg:inline-block hover:text-gray-600 cursor-pointer" @click="openCart">
          <i class="el-icon-shopping-bag-1 font-bold"></i>
        </a>
      </div>
    </div>
    <el-drawer :visible.sync="drawer" :direction="direction">
      <div class="container">
        <h1 class="text-2xl font-bold text-center">Your Cart</h1>
      </div>
    </el-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    openCart() {
      console.log("open carting");
      this.drawer = !this.drawer;
    },
    handleClose(done) {
      console.log(done);
    }
  }
};
</script>

<template>
  <nav class="xl:flex sm:flex lg:flex-row sm:flex-col p-6 justify-between text-lg tracking-tight">
    <button class="btn lg:hidden" @click="isOpen = !isOpen">Menu</button>
    <div class="left flex flex-col lg:flex-row">
      <nuxt-link to="/" class="link hover:text-gray-600">Home</nuxt-link>

      <nuxt-link to="/products" class="link hover:text-gray-600">Products</nuxt-link>

      <nuxt-link to="/admin" class="link hover:text-gray-600">Admin</nuxt-link>
    </div>

    <div class="right">
      <nuxt-link to="/login" class="link hover:text-gray-600" v-if="!$store.state.user">Login</nuxt-link>

      <nuxt-link to="/signup" class="link hover:text-gray-600" v-if="!$store.state.user">Signup</nuxt-link>

      <nuxt-link to="/account" class="link hover:text-gray-600">
        <i class="el-icon-user font-bold text-lg"></i>
      </nuxt-link>

      <p class="link hover:text-gray-600 cursor-pointer" @click="openCart">
        <i class="el-icon-search font-bold text-lg"></i>
      </p>

      <a class="link hover:text-gray-600 cursor-pointer font-bold" @click="openCart">
        <i class="el-icon-shopping-bag-1 font-medium"></i>
      </a>
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
      direction: "rtl",
      isOpen: false
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

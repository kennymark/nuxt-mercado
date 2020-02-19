<template>
  <div>
    <nav
      class="xl:flex sm:flex lg:flex-row sm:flex-col p-4 justify-between text-lg tracking-tight items-center"
    >
      <button
        class="btn lg:hidden w-32 mb-5 flex items-center justify-center hover:shadow-lg focus:outline-none"
        @click="hideMenu"
      >
        <i class="el-icon-menu mr-2 align-bottom text-2xl text-gray-700" /> Menu
      </button>

      <div class="left lg:flex sm:flex sm:flex-col lg:flex-row" :class="{'sm:hidden': menuOpen}">
        <nuxt-link to="/" class="link hover:text-gray-600">Home</nuxt-link>

        <nuxt-link to="/products" class="link hover:text-gray-600">Products</nuxt-link>

        <nuxt-link to="/admin" class="link hover:text-gray-600">Admin</nuxt-link>
      </div>

      <input
        type="text"
        class="p-3 bg-gray-300 focus:outline-none border border-gray-200 focus:border-gray-300 lg:w-2/6 sm:w-full text-base rounded-lg focus:bg-white mx-auto font-thin tracking-tight"
        placeholder="Search here"
      />

      <div class="right lg:flex sm:flex sm:flex-col lg:flex-row" :class="{'sm:hidden': menuOpen}">
        <nuxt-link to="/login" class="link hover:text-gray-600" v-if="!$store.state.user">Login</nuxt-link>

        <nuxt-link to="/signup" class="link hover:text-gray-600" v-if="!$store.state.user">Signup</nuxt-link>

        <nuxt-link to="/account" class="link hover:text-gray-600">
          <i class="el-icon-user font-bold text-2xl"></i>
          <span class="sm:hidden">Account</span>
        </nuxt-link>

        <!-- <p class="link hover:text-gray-600 cursor-pointer" @click="showSearch = !showSearch">
          <i class="el-icon-search text-2xl"></i>
          <span class="sm:hidden">Search</span>
        </p>-->
        <a class="link hover:text-gray-600 cursor-pointer" @click="openCart">
          <i class="el-icon-shopping-bag-1 font-medium text-2xl"></i>
          <span class="sm:hidden">Cart</span>
        </a>
      </div>
    </nav>
    <cart-drawer show="drawer" />
  </div>
</template>


<script>
import Search from "~/components/ui/global-search.vue";
import CartDrawer from "~/components/CartDrawer.vue";
export default {
  components: { Search, CartDrawer },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      isOpen: false,
      menuOpen: false,
      showSearch: false
    };
  },
  methods: {
    hideMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openCart() {
      this.drawer = !this.drawer;
      this.$store.commit("product/openCart", true);
      // console.log("open carting", this.drawer);
    },
    handleClose(done) {
      this.drawer = !this.drawer;
    }
  }
};
</script>

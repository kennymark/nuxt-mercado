<template>
  <div>
    <nav class="sm:flex p-5 justify-between text-lg items-center nav xl:h-20">
      <button class="btn flex items-center sm:hidden" @click="hideMenu">
        <i class="el-icon-menu mr-2 align-bottom text-lg text-gray-700" />Menu
      </button>

      <div class="left sm:flex justify-center my-1" :class="{'sm:hidden': menuOpen}">
        <nuxt-link to="/" class="link hover:text-green-500">Home</nuxt-link>

        <nuxt-link to="/products" class="link hover:text-green-500">Products</nuxt-link>

        <nuxt-link to="/admin" class="link hover:text-green-500">Dashboard</nuxt-link>
      </div>

      <transition name="page">
        <input
          type="text"
          class="py-3 px-5 bg-gray-200 focus:outline-none border focus:border-gray-200 xl:w-2/6 sm:w-full text-base rounded-lg focus:bg-white tracking-tight mr-3 my-0 sm:my-4 lg:my-0 focus:shadow-xl duration-200"
          ref="searchbox"
          placeholder="Search for products here..."
          v-if="showSearch"
        />
      </transition>

      <!-- $refs.searchbox.focus();  -->

      <div class="right flex-row sm:flex-col mt-1" :class="{'sm:hidden': menuOpen}">
        <nuxt-link to="/login" class="link hover:text-green-500" v-if="!$store.state.user">Login</nuxt-link>

        <nuxt-link to="/signup" class="link hover:text-green-500" v-if="!$store.state.user">Signup</nuxt-link>

        <p class="link hover:text-green-600 cursor-pointer" @click="showSearch = !showSearch">
          <i class="el-icon-search text-xl font-bold" />
          <span class="sm:hidden">Search</span>
        </p>

        <nuxt-link to="/account" class="link hover:text-green-500">
          <i class="el-icon-user font-bold text-xl" />
          <span class="sm:hidden">Account</span>
        </nuxt-link>

        <a
          class="link hover:text-green-500 cursor-pointer bg-green-100 px-2 py-1 rounded"
          @click="openCart"
        >
          <i class="el-icon-shopping-bag-1 font-bold text-xl"></i>
          <span class="font-normal text-gray-700 hover:text-green-700">
            <span class="sm:hidden">Cart</span>
            {{count}}
          </span>
        </a>
      </div>
    </nav>
    <cart-drawer />
  </div>
</template>


<script>
import Search from "~/components/ui/global-search.vue";
import CartDrawer from "~/components/CartDrawer.vue";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters({ count: "product/getCartCount" })
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

<style >
.nav {
  transition: all 0.3s ease;
}
</style>
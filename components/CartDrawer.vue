<template>
  <transition name="slide" v-if="$store.state.product.cartOpen">
    <div class="overlay fixed top-0 min-h-screen min-w-full flex z-40" @click="handleClose">
      <div
        class="right-0 fixed overflow-scroll p-3 shadow-lg xl:w-2/6 w-full bg-white h-full"
        @click.stop
      >
        <div class="px-3 items-center sm:flex-col lg:mb-5 sm:mb-2">
          <div class="flex flex-row justify-between">
            <h1 class="text-3xl text-gray-800">Shopping Cart</h1>
            <button class="px-3 text-black text-3xl focus:outline-none" @click="handleClose">
              <i class="el-icon-close" />
            </button>
          </div>

          <div class="buttons">
            <button class="mr-3 btn bg-green-500 text-gray-100" @click="checkout">Checkout</button>

            <button class="btn mr-3" @click="resetCart">
              Empty Cart
              <i class="el-icon-refresh"></i>
            </button>
          </div>
        </div>
        <!-- <cart-product v-for="product in 4" :length="cart.length" :key="product" /> -->

        <div v-for="prod in 20" class="border border-gray-200 h-24 mb-3 rounded-lg" :key="prod"></div>
        <!-- 
        <img v-if="!cart.length" :src="emptyCart" alt class="mt-5" />
        <h5
          v-if="!cart.length"
          class="text-center m-3 border-0 mt-5 font-bold text-3xl text-gray-300"
        >Cart is empty</h5>-->
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import common from "~/mixins/common";
export default {
  mixins: [common],
  computed: {
    ...mapState({ cart: "product/cart" })
  }
};
</script>

<style>
.cart-sidebar {
  overflow-y: scroll;
}
.overlay {
  background: #2b2a2aaf;
  overflow-y: scroll;
}

.slide-leave-active,
.slide-enter-active {
  transition: all 0.2s;
}
.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(100%, 0);
}
/* 
@keyframes slide-in {
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
} */
</style>
<template>
  <transition name="slide" v-if="$store.state.product.cartOpen">
    <div class="overlay fixed top-0 min-h-screen min-w-full flex z-40" @click="handleClose">
      <div
        class="right-0 fixed overflow-scroll p-3 shadow-lg lg:w-2/6 w-full bg-white h-full"
        @click.stop
      >
        <div class="lg:flex sm:flex justify-between px-3 items-center lg:flex-row sm:flex-col">
          <h1 class="text-4xl">Shopping Cart</h1>
          <div class="buttons">
            <button class="shadow-sm mr-3 btn" @click="checkout">Checkout</button>
            <button class="shadow-sm btn" @click="handleClose">Close X</button>
          </div>
        </div>

        <div v-for="product in cart" :key="product" class="border-bottom bg-white px-4 py-2">
          <cart-product :length="cart.length" :product="product" />
        </div>
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
export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    handleClose() {
      this.$store.commit("product/openCart", false);
    },
    checkout() {
      this.$store.commit("product/openCart", false);
      this.$router.push("/checkout");
    }
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
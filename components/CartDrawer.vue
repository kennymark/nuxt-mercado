<template>
  <transition
    enter-active-class="slide-in"
    leave-active-class="slide-out"
    v-if="$store.state.product.cartOpen"
  >
    <div class="overlay fixed top-0 min-h-screen min-w-full flex z-40" @click="handleClose">
      <div class="bg-white overflow-scroll p-3 shadow-lg lg:w-2/6 w-full" @click.stop>
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
  background: #0000006e;
  overflow-y: scroll;
}

.slide-in {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.3s forwards;
}

.slide-out {
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.3s forwards;
}

@keyframes slide-in {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
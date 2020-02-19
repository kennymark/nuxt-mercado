<template>
  <transition name="slide-in">
    <div
      v-if="$store.state.product.cartOpen"
      class="overlay fixed top-0 min-h-screen min-w-full flex z-40"
      @click="handleClose"
    >
      <div class="bg-white cart-sidebar p-3 shadow-lg lg:w-2/6 sm:w-full" @click.stop>
        <div class="lg:flex sm:flex justify-between px-3 items-center sm:flex-col">
          <h1 class="text-4xl">Shopping Cart</h1>
          <div class="buttons">
            <button class="shadow-sm btn" @click="checkout">Checkout</button>
            <button class="shadow-sm btn" @click="handleClose">Close X</button>
          </div>
        </div>
        <!-- 
        <div v-for="(product, key) in cart" :key="key" class="border-bottom bg-white px-4 py-2">
          <cart-product :length="cart.length" :product="product" />
        </div>
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
  props: ["show"],
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
  z-index: 100;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
.overlay {
  background: #00000057;
  overflow-y: scroll;
}
</style>
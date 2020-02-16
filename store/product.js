


export const state = () => ({
  cart: [],
  currentProduct: null,
  adminCurrentProduct: null,
  buyNowProduct: null,
})


export const mutations = {

  addToCart(state, product) {
    const cart = state.cart.find((item) => item.id == product.id)
    const buyNowCart = state.buyNowProduct;
    if (buyNowCart) { buyNowCart.quantity++ }
    if (cart) { cart.quantity++ }
    else {
      state.cart.push(product)
    }
  },

  removeFromCart(state, product) {
    let cartIndex = state.cart.indexOf(product)
    state.cart.splice(cartIndex, 1)
  },

  removeAllFromCart(state) {
    state.cart = []
  },

  incrementQuantity(state, product) {
    this.commit('addToCart', product)
  },

  decrementQuantity(state, product) {
    const cart = state.cart.find((item) => item.id == product.id)
    const buyNowCart = state.buyNowProduct;

    if (buyNowCart != null) {
      if (buyNowCart) { buyNowCart.quantity-- }
      if (buyNowCart.quantity = 1) buyNowCart.quantity = 1
    }

    if (cart) { cart.quantity -= 1 }
    if (cart.quantity <= 1) cart.quantity = 1
  },

  setCurrentProduct(state, product) {
    state.currentProduct = product
  },

  setAdminCurrentProduct(state, product) {
    state.adminCurrentProduct = product
  },

  setBuyNow(state, product) {
    state.buyNowProduct = product
  }
}

export const getters = {
  getCartCount(state, getters) {
    return state.cart.length
  },
  totalPrice(state) {
    let total = 0;
    state.cart.map((item) => {
      total += (item.price.max * item.quantity);
    });
    return total;
  }
}





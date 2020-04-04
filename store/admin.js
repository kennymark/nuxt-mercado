


export const state = () => ({
  currentProduct: null,
  currentOrder: null,
  currentCustomer: null,
})

export const mutations = {

  setCurrentOrder(state, order) {
    state.currentOrder = order
  },

  setCurrentCustomer(state, order) {
    state.currentCustomer = order
  },

  setCurrentProduct(state, order) {
    state.currentProduct = order
  },
}


export const getters = {

}
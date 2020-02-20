export const state = () => ({
  selectedAddress: {},
  selectedPaymentCard: {},

})

export const mutations = {
  setSelectedAddress(state, payload) {
    state.selectedAddress = payload
  },

  setSelectedPayment(state, payload) {
    state.selectedPaymentCard = payload
  }
}


export const getters = {

}
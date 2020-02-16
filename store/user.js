export const state = () => ({
  user: null,
  authenticated: false
})

export const mutations = {
  changeAuthState(state, auth) {
    state.authenticated = auth
  },
  setUser(state, payload) {
    state.user = payload
  }
}
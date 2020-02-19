export const state = () => ({
  user: null,
  authenticated: false,
  is_admin: false
})

export const mutations = {
  changeAuthState(state, auth) {
    state.authenticated = auth
  },
  setUser(state, payload) {
    state.user = payload
  }
}

// interface User {
//   user: Object;
//   authenticated: boolean;
// }
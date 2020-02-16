export default function ({ store, redirect }) {
  if (store.state.user.roleType != 'admin') {
    redirect('/')
  }

}
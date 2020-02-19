
<template>
  <div class="w-full max-w-3xl mx-auto">
    <h1 class="text-4xl font-semibold ml-8 text-gray-700 text-left pb-10">Please sign in</h1>

    <form class="bg-white px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
      <div class="mb-4">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          id="email"
          type="text"
          v-model="form.email"
          placeholder="example@example.com"
        />
      </div>
      <div class="mb-6">
        <label class="label" for="password">Password</label>
        <input
          class="input"
          id="password"
          type="password"
          v-model="form.password"
          placeholder="******************"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="btn-account" type="submit">Sign In</button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from "../firebase.config";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: ""
    };
  },

  methods: {
    login(e) {
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$store.commit("user/changeAuthState", true);
          this.$store.commit("user/setUser", auth.currentUser.toJSON());

          this.$notify({
            title: "Message",
            message: "You have logged in sucessfully",
            type: "success"
          });

          this.$router.push("/products");
        })
        .catch(err => {
          this.$message({
            title: "Login Error",
            message: err,
            dangerouslyUseHTMLString: true,
            type: "warning",
            showClose: true,
            customClass: "p-4",
            duration: 10000
          });
          this.$store.commit("user/changeAuthState", false);
        });
    }
  }
};
</script>


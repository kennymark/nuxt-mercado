
<template>
  <div class="w-full max-w-3xl mx-auto">
    <h1 class="text-4xl font-semibold text-gray-700 text-left pb-10 mx-3">Please sign up</h1>
    <form @submit.prevent="signup">
      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="grid-first-name">First Name</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="first-name"
          type="text"
          placeholder="Jane"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="last-name">Last Name</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="last-name"
          type="text"
          placeholder="Doe"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="email">Email</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="email"
          placeholder="example@example.com"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="text-left block text-gray-600 text-lg mb-2" for="grid-password">Password</label>
        <input
          class="input focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="password"
          placeholder="******************"
        />
      </div>

      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="text-left block text-gray-600 text-lg mb-2" for="grid-city">City</label>
          <input
            class="input focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Chester"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="text-left block text-gray-600 text-lg mb-2" for="grid-state">County</label>
          <div class="relative">
            <select
              class="input focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Chester</option>
              <option>Manchester</option>
              <option>Liverpool</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="text-left block text-gray-600 text-lg mb-2" for="grid-zip">Post Code</label>
          <input
            class="input focus:outline-none focus:bg-white focus:border-gray-500"
            id="post-code"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>

      <div class="flex flex-wrap mb-2 m-3">
        <button
          class="bg-black hover:bg-gray-700 hover:shadow-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from "../firebase.config";

export default {
  name: "Login",
  head() {
    return {
      title: "Sign up"
    };
  },
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
    signup(e) {
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push("/products");
        })
        .catch(err => {
          this.$message({
            title: "Login Error",
            message: err,
            type: "warning",
            showClose: true,
            duration: 10000
          });
        });
    }
  }
};
</script>


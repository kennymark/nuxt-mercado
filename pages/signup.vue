
<template>
  <div class="w-full max-w-3xl mx-auto">
    <h1 class="text-4xl font-semibold text-gray-700 text-left pb-10 mx-3">Please sign up</h1>
    <form @submit.prevent="signup">
      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="first_name">First Name</label>
        <input
          class="input"
          id="first_name"
          type="text"
          placeholder="Jane"
          v-model="form.first_name"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="last_name">Last Name</label>
        <input class="input" id="last_name" type="text" placeholder="Doe" v-model="form.last_name" />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          id="email"
          type="email"
          placeholder="example@example.com"
          v-model="form.email"
        />
      </div>

      <div class="flex flex-wrap mb-4 mx-3">
        <label class="label" for="password">Password</label>
        <input
          class="input"
          id="password"
          type="password"
          v-model="form.password"
          placeholder="******************"
        />
      </div>

      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="label" for="grid-city">City</label>
          <input class="input" id="grid-city" type="text" placeholder="Chester" v-model="form.city" />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="label" for="grid-state">County</label>
          <div class="relative">
            <select class="input" id="county" v-model="form.county">
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
          <label class="text-left block text-gray-600 text-lg mb-2" for="post_code">Post Code</label>
          <input
            class="input"
            id="post_code"
            type="text"
            placeholder="90210"
            v-model="form.post_code"
          />
        </div>
      </div>

      <div class="flex flex-wrap mb-2 m-3">
        <button class="btn-account mb-4" type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from "~/firebase.config";

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
        first_name: "",
        last_name: "",
        city: "",
        post_code: "",
        county: "",
        email: "",
        password: ""
      },
      error: ""
    };
  },

  methods: {
    signup() {
      console.log(this.form);
      auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
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


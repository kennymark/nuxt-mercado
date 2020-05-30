<template>
  <div class v-if="order">
    <h1 class="title">
      Order
      <span class="font-normal text-green-500">{{order.id}}</span>
    </h1>
    <div class="sm:flex justify-between lg:flex-row md:flex-col">
      <div class="lg:w-1/2 sm:w-full lg:mr-10 p-3" v-if="order.cart">
        <h2 class="text-xl font-semibold py-4">Cart</h2>

        <div
          v-for="(item,key) in order.cart"
          :key="key"
          class="border border-gray-200 p-4 mb-3 shadow-sm rounded-lg bg-white"
        >
          <p class="flex justify-between text-gray-600">
            Quantity
            <span>{{item.quantity}}</span>
          </p>
          <p class="flex justify-between text-gray-600">
            Product ID
            <span>{{item.id}}</span>
          </p>
          <button
            class="btn mt-2 text-gray-600 text-sm px-2 py-1 bg-gray-200 rounded"
            @click="viewProduct(item.id)"
          >View Product</button>
        </div>
      </div>

      <div
        class="rounded-lg border border-gray-200 py-3 lg:w-1/2 sm:w-full shadow-md"
        style="height:fit-content"
      >
        <h2 class="text-xl font-semibold p-4 border-b">Order Details</h2>
        <p class="flex justify-between border-b p-4 text-gray-600">
          Full name
          <span>{{order.customer}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Order ID
          <span>{{order.id}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Stripe ID
          <span>{{order.stripe_id}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Date
          <span>{{new Date(order.created_at * 1000).toLocaleString()}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Currency
          <span class="font-semibold uppercase">{{order.currency}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Total
          <span class="font-semibold">{{order.total /100 | currency('£')}}</span>
        </p>

        <p class="flex justify-between border-b p-4 text-gray-600">
          Item count
          <span>{{order.metadata.item_count}}</span>
        </p>

        <p class="flex justify-between p-4 text-gray-600 border-b">
          Fulfilled
          <span class="bg-green-200 text-green-500 rounded-lg px-3">{{order.fufilled}}</span>
        </p>

        <p class="flex justify-between p-4 text-gray-600">
          Address
          <span class="mt-3">
            <p>{{order.shipping.address.line1}}</p>
            <p>{{order.shipping.address.city}} {{order.shipping.address.state}}</p>
            <p>{{order.shipping.address.country || 'United Kingdom'}}</p>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from "~/firebase.config";
import { mapState } from "vuex";

export default {
  layout: "admin",
  head() {
    return {
      title: `Order by ${this.order.customer}`
    };
  },
  computed: {
    ...mapState({
      order: state => state.admin.currentOrder
    })
  },
  mounted() {
    const ref = firestore.collection("products");
    console.log("order", this.order);
  },
  methods: {
    viewProduct(id) {
      this.$router.push(`/admin/products/edit-product/${id}`);
    }
  }
};
</script>


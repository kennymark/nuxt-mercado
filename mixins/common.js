export default {
  methods: {
    viewProduct(product) {
      this.$store.commit("product/setCurrentProduct", product);
      this.$emit("viewProduct", product);
    },
    addToCart(product) {
      this.$store.commit("product/addToCart", product);
      this.$message({
        message: "Product has been added succesfully to cart.",
        type: "success"
      });
    },

    removeFromCart(product) {
      this.$store.commit("product/removeFromCart", product);
      this.$message({
        message: "Product has been added succesfully removed from cart.",
        type: "success"
      });
    },
    resetCart() {
      this.$store.commit("product/resetCart");
      this.$message({
        message: "Cart is empty now",
        type: "success"
      });
    },
    handleClose() {
      this.$store.commit("product/openCart", false);
    },
    checkout() {
      this.$store.commit("product/openCart", false);
      this.$router.push("/checkout");
    }
  }
}
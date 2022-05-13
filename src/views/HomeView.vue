<template>
  <div class="home">
    <Navbar />
    <div class="hero"><Hero /></div>

    <div class="container">
      <div class="row mt-4">
        <div class="col-10">
          <h2 class="bestFood">Best <strong>Food</strong></h2>
        </div>
        <div class="col">
          <b-button pill class="button1" to="/food">Lihat Semua</b-button>
        </div>
      </div>

      <div class="row mt-3 mb-4">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardProduct,
    Footer,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://fake-server-alta.herokuapp.com/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <div class="FoodItems">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <h2 class="bestFood">Daftar<strong> Makanan</strong></h2>
      </div>

      <div class="row">
        <div class="col">
          <div class="input-group mb-3 mt-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari makanan kesukaan anda"
              aria-label="Username"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon-search></b-icon-search
            ></span>
          </div>
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
import Footer from "@/components/Footer.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "FoodItems",
  components: {
    Navbar,
    Footer,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("https://fake-server-alta.herokuapp.com/products?q=" + this.search)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://fake-server-alta.herokuapp.com/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

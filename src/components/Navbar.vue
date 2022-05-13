<template>
  <b-navbar toggleable="lg" type="dark">
    <div class="container">
      <b-navbar-brand href="#"><strong>MyResto</strong></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/food"
                >Food</router-link
              >
            </li>
          </ul>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <ul class="navbar-nav" id="navbarSupportedContent">
            <li class="nav-item float-right">
              <router-link class="nav-link text-light" to="/keranjang"
                >Keranjang
                <b-icon-cart2></b-icon-cart2>
                <span class="badge bg-success ms-2">{{
                  updateKeranjang ? updateKeranjang.length : jumlah_pesan.length
                }}</span>
              </router-link>
            </li>
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import axios from "axios";
export default {
  name: `Navbar`,
  data() {
    return {
      jumlah_pesan: [],
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah_pesan(data) {
      this.jumlah_pesan = data;
    },
  },
  mounted() {
    axios
      .get("https://fake-server-alta.herokuapp.com/keranjangs")
      .then((response) => this.setJumlah_pesan(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

<template>
  <div class="DetailFood">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="row mt-1">
          <h2 class="bestFood">Detail<strong> Makanan</strong></h2>
        </div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/food">Food</router-link>
            </li>
            <li class="breadcrumb-item active text-dark" aria-current="page">
              Food Details
            </li>
          </ol>
        </nav>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="card-img-top-detail shadow"
            alt="..."
          />
        </div>
        <div class="col-6 mt-4">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <p class="card-text">
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </p>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="order.jumlah_pesan"
                required
              />
            </div>
            <div class="form-group mb-4 mt-1">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="order.keterangan"
                type="number"
                class="form-control"
                placeholder="Ex : Pedes gapedes banget"
                required
              ></textarea>
            </div>
          </form>
          <b-button
            pill
            @click="addTrolley"
            class="button1"
            :to="'/food/' + product.id"
            >Masukkan Keranjang</b-button
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "DetailFood",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: {},
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    addTrolley() {
      this.order.product = this.product;
      axios
        .post("https://fake-server-alta.herokuapp.com/keranjangs", this.order)
        .then(() => {
          this.$router.push({ path: "/keranjang" });
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get(
        "https://fake-server-alta.herokuapp.com/products/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

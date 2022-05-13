<template>
  <div class="DetailFood">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container">
      <div class="row mt-5">
        <h2 class="bestFood">Daftar<strong> Keranjang</strong></h2>
      </div>

      <div class="row mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-dark" to="/food">Food</router-link>
            </li>
            <li class="breadcrumb-item active text-dark" aria-current="page">
              Keranjang
            </li>
          </ol>
        </nav>
      </div>

      <div class="table-responsive mt-3">
        <table class="table">
          <thead>
            <tr>
              <!-- <h2>
                <strong>{{ keranjang.product.nama }}</strong>
              </h2> -->
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
              <th>{{ index + 1 }}</th>
              <td>
                <img
                  :src="'../assets/images/' + keranjang.product.gambar"
                  class="card-img-top-detail-keranjang shadow"
                  alt="..."
                  width="250"
                />
              </td>
              <td>
                <strong>{{ keranjang.product.nama }}</strong>
              </td>
              <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
              <td>{{ keranjang.jumlah_pesan }}</td>
              <td align="left">Rp. {{ keranjang.product.harga }}</td>
              <td align="left">
                Rp. {{ keranjang.jumlah_pesan * keranjang.product.harga }}
              </td>
              <td align="center" class="text-danger">
                <b-icon-trash
                  @click="hapusKeranjang(keranjang.id)"
                ></b-icon-trash>
              </td>
            </tr>

            <tr>
              <td colspan="6" align="right">
                <strong>Total Harga :</strong>
              </td>
              <td>
                <strong>Rp. {{ totalHarga }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesan">Nama :</label>
              <input
                type="text"
                class="form-control"
                v-model="order.jumlah_pesan"
                required
              />
            </div>
            <div class="form-group mb-4 mt-1">
              <label for="keterangan">No Meja :</label>
              <input
                v-model="order.keterangan"
                type="number"
                class="form-control"
                placeholder=""
                required
              />
            </div>
          </form>
          <b-button pill @click="checkout" class="button1" :to="/food/"
            >Pesan</b-button
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
  name: "KeranjangPesan",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      keranjangs: [],
      search: "",
      order: {},
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("https://fake-server-alta.herokuapp.com/keranjangs/" + id)
        .then(() => {
          console.log("Berhasil Hapus");
          axios
            .get("https://fake-server-alta.herokuapp.com/keranjangs")
            .then((response) => this.setKeranjang(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      this.order.keranjangs = this.keranjangs;
      axios
        .post("https://fake-server-alta.herokuapp.com/pesanans", this.order)
        .then(() => {
          this.keranjangs.map(function (item) {
            return axios
              .delete(
                "https://fake-server-alta.herokuapp.com/keranjangs" + item.id
              )
              .catch((err) => console.log(err));
          });

          this.$router.push({ path: "/checkout" });
          console.log("Berhasil");
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("https://fake-server-alta.herokuapp.com/keranjangs")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.jumlah_pesan * data.product.harga;
      }, 0);
    },
  },
};
</script>

<style></style>

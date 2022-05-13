<template>
  <div class="SuccessOrder">
    <Navbar />
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col-2"></div>
        <div class="col-3">
          <img src="assets/images/success.png" class="card-img-top" alt="..." />
        </div>
        <div class="col-5">
          <h2 class="bestFood mt-4">
            <strong>Successfully</strong>
          </h2>
          <h2 class="bestFood"><strong>Ordered</strong></h2>
          <p class="bestFood">
            Pesanan Anda Segera Di proses, <strong>Selamat Menunggu</strong>
          </p>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SuccessOrder",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>

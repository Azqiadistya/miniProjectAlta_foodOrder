<template>
  <div class="card shadow card-product border-0 mb-4">
    <img
      :src="'assets/images/' + product.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body border-0">
      <h5 class="card-title text-light">
        <strong>{{ product.nama }}</strong>
      </h5>
      <p class="card-text text-light">
        Harga : <strong>Rp. {{ product.harga }}</strong>
      </p>
      <b-button pill class="button2" :to="'/food/' + product.id"
        >Pesan</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: `CardProduct`,
  props: ["product"],
};
</script>

<style></style>

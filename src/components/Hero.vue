<template>
  <div class="container">
    <div class="hero">
      <!-- Desktop -->
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-self-center">
          <div>
            <h2 class="text-light">
              <strong>Delicious Food Menu, </strong><br />
              in your Gadget
            </h2>
            <h6 class="text-light">
              Ayo segera pilih dan pesan menu favorit kalian
            </h6>
            <b-button pill class="button1" to="/food">Pesan</b-button>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>

      <!-- Mobile -->
      <div class="row d-sm-block d-md-none">
        <div class="col">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6 d-flex justify-content-center align-self-center">
          <div>
            <h2 class="text-light">
              <strong>Delicious Food Menu, </strong><br />
              in your Gadget
            </h2>
            <h6 class="text-light">
              Ayo segera pilih dan pesan menu favorit kalian
            </h6>
            <b-button pill class="button1" to="/food">Pesan</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Hero`,
};
</script>

<style></style>

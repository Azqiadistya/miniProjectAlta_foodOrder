<template>
  <footer class="footer mt-5 p-2">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <h3 class="text-light"><strong>MyResto</strong></h3>
          </a>
          <br />
          <div class="col-md">
            <p class="text-light">Pracimantoro, Wonogiri, Jawa Tengah</p>
          </div>
          <div class="col-md">
            <h3 class="text-light"><strong>+64 823 2230 2193</strong></h3>
            <p class="text-light mb-5">azqiabdillah@gmail.com</p>
          </div>
        </div>

        <div class="col-md-2">
          <h6 class="text-light mb-5"><strong>EXPLORE</strong></h6>
          <ul class="nav flex-column mt-4">
            <li class="nav-item mb-2 mt-2">
              <a href="/" class="nav-link p-0 text-white">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="/food" class="nav-link p-0 text-white">Food</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Contact</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6 class="text-light mb-5"><strong>CONTACT</strong></h6>
          <ul class="nav flex-column mt-4">
            <li class="nav-item mb-2 mt-2">
              <a href="/" class="nav-link p-0 text-white"
                >Subscribe now to get daily update</a
              >
            </li>
            <li class="nav-item mb-2">
              <div class="input-group mb-3 border-0">
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon1"
                />
                <span
                  class="input-group-text text-light bg-dark border-0"
                  id="basic-addon1"
                  >SIGN UP</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="line text-light"></div>
      <hr class="text-light mt-4" />
      <div class="row mt-2">
        <div class="col-md-12" style="text-align: center">
          <p class="text-white">
            Copyright © 2022 All rights reserved | MyResto
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: `Footer`,
};
</script>

<style></style>

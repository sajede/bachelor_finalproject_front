<template>
    <div>
      <footer class="row footer-container">
        <div class="col-md-8">
          <div class="social">
            <router-link to="/" tag="a">
              <i class="fa fa-facebook"></i>
            </router-link>
            <router-link to="/" tag="a">
              <i class="fa fa-twitter"></i>
            </router-link>
            <router-link to="/" tag="a">
              <i class="fa fa-linkedin"></i>
            </router-link>
          </div>

          <div class="location">
            <router-link to="/" tag="a">
              <i class="fa fa-map-marker"></i>
              <span>تهران، اتوبان چمران، بلوار یمن، میدان دانشجو، دانشگاه شهید بهشتی، دانشکده مهندسی کامپیوتر</span>
            </router-link>
          </div>

          <div class="contact">
            <router-link to="/" tag="a">
              <i class="fa fa-phone"></i>
              <span>0912-3934667</span>
            </router-link>

          </div>

        </div>

        <div class="col-md-4 text-center">
          <div class="university">
            <router-link to="/" tag="a">
              <img class="sbu-img" src="../assets/img/sbu-logo.png" />
            </router-link>
            <div>
              <p>دانشگاه شهید بهشتی استان تهران</p>
              <p>آزمایشگاه فضای مجازی</p>
            </div>
          </div>

        </div>

      </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

  footer{
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ffaf20;
    padding: 30px 70px;

  }

  .social, .location, .contact, .university{
    direction: rtl;
    width: 100%;
    margin: 10px;
    font-size: 2rem;
    padding: 3px 0;
  }

  a {
    color: #000;
  }

  .social a, .location a, .contact a{
    margin: 0 10px;
  }

  .sbu-img {
    height: 8rem;
    margin-bottom: 10px;
  }

  .university p {
    font-size: 1.5rem;
  }

</style>

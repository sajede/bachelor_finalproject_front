<template>
  <div>
    <footer class="section footer-classic context-dark bg-image" style="background: #222222;">
      <div class="container">
        <div class="row row-30">
          <div class="col-md-4 col-xl-5">
            <div class="pr-xl-4">
              <router-link to="/" tag="a" class="brand"><img class="brand-logo-light" src="../assets/img/sbu.png" alt=""></router-link>
              <p>smart automatic exploit generation</p>
              <p class="rights"><span>All Rights Belong to Shahid Beheshti University</span></p>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Contact us</h5>
            <dl class="contact-list">
              <dt>Address:</dt>
              <dd>Tehran, District 1, Daneshjou Boulevard </dd>
            </dl>
            <dl class="contact-list">
              <dt>email:</dt>
              <dd><router-link to="mailto:secureLab@gmail.com" tag="a">secureLab@gmail.com</router-link></dd>
            </dl>
            <dl class="contact-list">
              <dt>phones:</dt>
              <dd><router-link to="" tag="a">+91 7568543012 </router-link><span>or</span><router-link to="" tag="a"> +91 9571195353</router-link></dd>
            </dl>
          </div>
          <div class="col-md-4 col-xl-3">
            <h5>Social links</h5>
            <ul class="nav-list">
              <router-link to="" tag="li"><a><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a></router-link>
              <router-link to="" tag="li"><a><span class="icon mdi mdi-instagram"></span><span>instagram</span></a></router-link>
              <router-link to="" tag="li"><a><span class="icon mdi mdi-twitter"></span><span>twitter</span></a></router-link>
              <router-link to="" tag="li"><a><span class="icon mdi mdi-youtube-play"></span><span>google+</span></a></router-link>
            </ul>
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
  footer {
    margin-top: 10px;
  }

  row {
    margin: 0;
    padding: 0;
  }

  img {
    width: 120px;
    height: 120px;
    padding: 2%;
  }

  .context-dark, .bg-gray-dark, .bg-primary {
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-classic a, .footer-classic a:focus, .footer-classic a:active {
    color: #ffffff;
  }
  .nav-list li {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .nav-list li a:hover:before {
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-list li a:before {
    content: "\f14f";
    font: 400 21px/1 "Material Design Icons";
    color: #4d6de6;
    display: inline-block;
    vertical-align: baseline;
    margin-left: -28px;
    margin-right: 7px;
    opacity: 0;
    visibility: hidden;
    transition: .22s ease;
  }
</style>

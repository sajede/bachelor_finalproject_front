<template>
    <div>
      <footer>
        <div class="footer-container">
          <div class="footer-contact">
            <div class="footer-social-accounts">
              <a href="#">
                <img src="../assets/img/facebook-icon.png" />
              </a>
              <a href="#">
                <img src="../assets/img/twitter-icon.png" />
              </a>
              <a href="#">
                <img src="../assets/img/linkedin-icon.png" />
              </a>
            </div>
            <div class="footer-location-info">
              <div>
                <div class="footer-info-location">
                  <p class="footer-info-location-p font">
                    <span>     تهران، اتوبان چمران، بلوار یمن، میدان دانشجو، دانشگاه شهید بهشتی، دانشکده مهندسی کامپیوتر</span>
                  </p>
                </div>
                <div class="footer-info-location-icon">
                  <img src="../assets/img/pinmap-icon.png" />
                </div>
              </div>
            </div>
            <div class="footer-contact-info">
              <div>
                <div class="footer-info-location">
                  <p class="footer-info-location-p font">
                    <span class="footer-phone">09126018608</span>
                    <span >09118866836</span>
                  </p>
                </div>
                <div class="footer-info-location-icon">
                  <img src="../assets/img/contact-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="footer-info">
            <div>
              <div class="footer-info-img-container">
                <div>
                  <img src="../assets/img/asa-logo.png" />
                  <img src="../assets/img/sbu-logo.png" />
                </div>
              </div>
            </div>
            <div class="footer-desc-p font">
              <p>  سامانه رسیدگی به اعتراضات و پیشنهادات دانشجویان </p>
              <p>دانشگاه شهید بهشتی استان تهران</p>
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
    height: 100%;
    background-color: #ffaf20;
    z-index: 999;
    max-height: 255px;
  }

  .footer-container{
    position: relative;
    display: flex;
    padding: 30px 70px 30px 70px;
  }

  .footer-contact{
    flex : 0 0 65%;
  }

  .footer-info-img-container{
    display: flex;
    width: 100%;
  }

  .footer-info-img-container img{
    width: 95px;
    height: 95px;
    margin: 5px
  }

  .footer-desc-p{
    display: flow-root;
    width: 100%;
    text-align: center;
    padding-top: 15px;
  }

  .footer-info-img-container > div{
    text-align:center;
    margin:auto;
  }

  .footer-info{
    flex: 1;
    width: 100%;
    display: flow-root;
  }

  .footer-info > div{
    width: 100%;
    display: flow-root;
  }

  .footer-social-accounts{
    width: 100%;
    display: flow-root;
  }

  .footer-social-accounts img{
    float: right;
    height: 35px;
    margin: 15px;
  }

  .footer-contact-info img{
    float: right;
    height: 35px;
    margin: 15px;
  }

  .footer-location-info{
    width: 100%;
    display: flow-root;
  }

  .footer-contact-info{
    width: 100%;
    display: flow-root;
  }

  .footer-contact-info > div{
    display: flex;
  }

  .footer-phone{
    padding-right: 50px
  }

  .footer-location-info > div{
    display: flex;
  }

  .footer-info-location{
    flex: 0 0 90%;
    text-align: right;
  }

  .footer-info-location-p{
    padding-top: 15px;
    float: right;
    text-align: right;
  }

  .footer-info-location-icon{
    flex: 1;
  }

  @media screen and (max-width: 1200px) {
    .footer-info-location{
      flex: 0 0 87%;
      text-align: right;
    }

    footer{
      max-height: 275px;
    }
  }

  @media screen and (max-width: 950px) {
    .footer-info-location{
      flex: 0 0 83%;
      text-align: right;
    }

    footer{
      max-height: 275px;
    }
  }

  @media screen and (max-width: 768px) {
    .footer-info-location{
      flex: 0 0 78%;
      text-align: right;
    }

    .footer-container{
      position: relative;
      display: flex;
      padding: 30px 30px 30px 30px;
    }

    .footer-phone{
      padding-right: 30px
    }

    footer{
      max-height: 295px;
    }

    .footer-info-img-container img{
      width: 80px;
      height: 80px;
      margin: 5px
    }
  }

  @media screen and (max-width:605px) {
    .footer-info-img-container img{
      width: 60px;
      height: 60px;
      margin: 5px
    }
  }

  @media screen and (max-width:521px) {
    .footer-info-location{
      flex: 0 0 75%;
      text-align: right;
    }

    .footer-phone{
      padding-right: 20px
    }

    footer{
      max-height: 310px;
    }
  }


  .footer-location-info img{
    float: right;
    height: 35px;
    margin: 15px;
  }

</style>

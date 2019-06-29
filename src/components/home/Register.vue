<template>
  <div class="register-wrapper">

    <div class="row">
      <div class="col-md-3"/>
      <div class="col-md-3 text-center">
        <router-link to="/Register" tag="button" class="register-btn font">ثبت نام</router-link>
      </div>
      <div class="col-md-3 text-center">
        <router-link to="/Register" tag="button" class="login-btn font"> ورود</router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="title font">به سایت secure code خوش آمدید</h2>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
  .register-wrapper{
    padding: 45vh 0 15vh 0;
    background-image: url('../../assets/img/main.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .row {
    padding: 2vh 0;
  }

  .title{
    direction: rtl;
    background: rgba(255,255,255,0.3);
    line-height: 10rem;
    color: rgb(48, 63, 159);
    font-size: 27px;
    font-weight: bold;
  }

  button {
    width: 80%;
    height: 48px;
    font-size: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border: solid 3px #ffaf20;
  }

  .register-btn{
    background-color: #ffaf20;
    color: white;
  }

  .login-btn{
    background-color: transparent;
    color: #ffaf20;
  }


</style>

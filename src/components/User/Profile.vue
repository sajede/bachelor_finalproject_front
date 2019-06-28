<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">اطلاعات کاربری</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 text-center hidden-sm">
          <img class="form-picture" src="../../assets/img/login-pic.png">
        </div>

        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12">
              <label for="name">نام</label>
              <input type="text" id="name" v-model="user.name">
            </div>

            <div class="col-md-12">
              <label for="family">نام خانوادگی</label>
              <input type="text" id="family" v-model="user.family">
            </div>

            <div class="col-md-12">
              <label for="username">نام کاربری</label>
              <input type="text" id="username" v-model="user.username" disabled>
            </div>

            <div class="col-md-12">
              <label for="email">ایمیل </label>
              <input type="email" id="email" v-model="user.emailAddress">
            </div>

            <div class="col-md-12">
              <label for="password">رمز عبور</label>
              <input type="text" id="password" name="نام کاربری" v-model="user.password">
            </div>

            <div class="col-md-12">
              <label for="">تغییرات اعمال شود؟ </label>
              <button class="btn" id="">ثبت تغییرات</button>
            </div>
          </div>
        </div>

      </div>

    </form>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data(){
      return {
        user: {
          id: '',
          username: '',
          name: '',
          family: '',
          emailAddress: '',
          password: '',
          role: ''
        }
      }
    },
    mounted() {
      this.user = this.$store.getters.userInfo;
    }
  }
</script>

<style scoped>
  row {
    direction: rtl;
  }

  .form{
    direction: rtl;
    max-width:92vw;
    margin: 10px auto;
    background-color: #fbfbfb;
    border: solid 1px #d9d9d9;;
    border-radius: 1rem;
    z-index: 1;
    padding: 5vh 3vw;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }

  input[type='text'],input[type='email'],button {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  img {
    width: 70%;
    padding: 10px;
    margin: 10px;
  }

  label{
    font-size: 12px;
    color: #333333;
    margin-top: 25px;
  }

  button{
    color: white;
    background-color: rgb(48, 63, 159);
  }

  button:hover {
    color: white;
    background-color: rgba(48, 63, 159, 0.9);
  }
</style>

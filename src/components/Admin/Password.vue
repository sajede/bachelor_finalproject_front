<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">تغییر رمز عبور</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label for="password">تکرار عبور جدید</label>
          <input type="text" id="password" v-model="user.family">
        </div>
        <div class="col-md-6">
          <label for="passwordR">رمز عبور جدید</label>
          <input type="text" id="passwordR" v-model="user.name">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label for="email">تغییرات اعمال شود؟ </label>
          <button class="btn" id="email">ثبت تغییرات</button>
        </div>
        <div class="col-md-6 ">
          <label for="username">رمز عبور فعلی</label>
          <input type="text" id="username" name="نام کاربری" v-model="user.userName">
        </div>
      </div>


    </form>
  </div>
</template>

<script>
  export default {
    name: "Password",
    data(){
      return {
        user: {
          userName: '',
          name: '',
          family: '',
          emailAddress: '',
          department:'',
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

  input, select, button {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
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
    background-color: rgb(48, 63, 159, 0.9);
  }

</style>

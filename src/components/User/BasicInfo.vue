<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">اطلاعات کاربری</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label for="lname">نام خانوادگی</label>
          <input type="text" id="lname" v-model="user.family">
        </div>
        <div class="col-md-6">
          <label for="fname">نام</label>
          <input type="text" id="fname" v-model="user.name">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label for="email">ایمیل </label>
          <input type="email" id="email" v-model="user.emailAddress">
        </div>
        <div class="col-md-6 ">
          <label for="username">نام کاربری</label>
          <input type="text" id="username" v-model="user.userName">
        </div>
      </div>


    </form>
  </div>
</template>

<script>
    export default {
        name: "BasicInfo",
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

  input, select {
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
</style>

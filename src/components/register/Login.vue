<template>
  <div class="panel">
    <div class="row form">
      
      <div class="col-md-6 hidden-sm">
        <img class="form-picture" src="../../assets/img/login-pic.png">
      </div>

      <div class="col-md-6 col-sm-12">
        <form class="row">
          <div>
            <h6 class="col-sm-12 font title">ورود</h6>

            <div class="col-sm-12">
              <p class="error"> {{ error }}</p>
              <input type="text"
                     class="form-control font"
                     name="username"
                     placeholder="نام کاربری"
                     required=""
                     autofocus=""
                     v-model="user.userName"
              />
              <input type="password"
                     class="form-control font"
                     name="password"
                     placeholder="رمز عبور"
                     required=""
                     v-model="user.password"/>
            </div>
            <div class="col-sm-12 text-center">
              <button class="btn font" type="submit" @click.prevent="loginBtn">ورود</button>
            </div>
            <div class="col-sm-12 text-center">
              <router-link to="/Forget" tag="a" class="font">فراموشی رمز عبور</router-link>
            </div>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        user: {
          id: '',
          username: '',
          name: '',
          family: '',
          emailAddress: '',
          password: '',
          role: 'user'
        },
        error: 'نام کاربری یا رمز عبور اشتباه است',
      }
    },
    methods : {
      loginBtn(){
        this.$http.post('user/login',
          this.user,
          {
            headers: {'SessionID': this.$store.getters.sessionId}
          }).then(
          response =>{
            // success callback
            response.json().then(
              data => {
                if (data.error = true){
                  this.error = data;
                }
                else{
                  this.$store.commit('user',data)
                }
              }
            )
          },
          error => {
            // error callback
          });
      },
    }
  }
</script>

<style scoped>
  .alert {
    margin: 2vh 0;
  }

  .panel{
    background-image: url('../../assets/img/login-bg.png');
    background-size: cover;
    padding: 10vh 5vw;
  }

  .form{
    direction: rtl;
    max-width: 60vw;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;
    z-index: 1;
  }

  .form-picture{
    max-height:100%;
    max-width:100%;
  }

  .title{
    font-size: 18px ;
    text-align: right;
    margin-top: 3vh;
    padding-right: 2vw;
    text-decoration: underline;
    text-decoration-color: #303f9f;
    text-decoration-style: solid;
  }

  .form-control {
    font-size: 12px;
    height: 25px;
    margin: 20px auto;
    width: 70%;
    padding: 10px;
  @include box-sizing(border-box);
    z-index: 2;
    border-radius: 4px ;
  }

  .error {
    direction: rtl;
    font-size: 10px;
    margin: 10px auto;
    width: 70%;
    color: red;
  }

  button{
    margin: 10px 0;
    border-radius: 4px;
    background-color: rgb(48, 63, 159);
    color: white;
    width: 104px;
    height: 34px;
  }
  button:hover {
    background-color: rgba(48, 63, 159, 0.9);
    color: white;
  }

</style>

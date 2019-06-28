<template>
  <div class="panel">
    <div class="row form">

      <div class="col-md-6 hidden-sm">
        <img class="form-picture" src="../../assets/img/register-pic.png">
      </div>

      <div class="col-md-6 col-sm-12">
        <form class="row">
          <div>
            <h6 class="col-sm-12 font title">ثبت نام</h6>

            <div class="col-sm-12">
              <input type="text"
                     class="form-control font"
                     name="username"
                     placeholder="نام کاربری"
                     required=""
                     autofocus=""
                     v-model="user.username"
                     @focusout="validateUsername"
              />
              <p class="error"> {{ error.username }}</p>

              <input type="email"
                     class="form-control font"
                     name="email"
                     placeholder="ایمیل"
                     required=""
                     v-model="user.emailAddress"
                     @focusout="validateEmail"
              />
              <p class="error"> {{ error.emailAddress }}</p>

              <input type="password"
                     class="form-control font"
                     name="password"
                     placeholder="رمز عبور"
                     required=""
                     v-model="user.password"
                     @focusout="validatePassword"
              />
              <p class="error"> {{ error.password }}</p>

            </div>

            <div class="col-sm-12 text-center">
              <button class="btn font" type="submit" @click.prevent="registerBtn">ثبت نام</button>
            </div>
            <div class="col-sm-12 text-center">
              <router-link to="/Login" tag="a" class="font">حساب کاربری دارم</router-link>
            </div>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "Register",
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
          error: {
            username:'',
            emailAddress: '',
            password: '',
          },
      }
      },

      methods : {

        validateUsername(){
          const re = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])+$/;
          let check = re.test(this.user.username);
          if (check){
            this.error.username = '';
          }
          else{
            this.error.username = 'نام کاربری باید شامل اعداد و حروف انگلیسی باشد.';
          }
          return check;
        },

        validateEmail(){
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let check = re.test(this.user.emailAddress);
          if (check){
            this.error.emailAddress = '';
          }
          else{
            this.error.emailAddress = 'ایمیل وارد شده صحیح نیست';
          }
          return check;
        },

        validatePassword(){
          const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
          let check = re.test(this.user.password);
          if (check){
            this.error.password = '';
          }
          else{
            this.error.password = 'پسورد باید حداقل 6 حرف شامل حروف و اعداد انگلیسی باشد';
          }
          return check;
        },

        registerBtn(){
          if (this.validateUsername()
              && this.validateEmail()
              && this.validatePassword()){
            //registering
            this.$http.post('user/register',
              this.user,
              {
                headers: {'SessionID': this.$store.getters.sessionId}
              }).then(
              response =>{
                // success callback
                response.json().then(
                  data => {
                    if (data.error = true){
                      this.errorAlert=data;
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

          }

        },
      },
      mounted() {

      }
    }
</script>

<style scoped>

  .panel{
    background-image: url('../../assets/img/register-bg.png');
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
    margin: 30px auto 20px;
    width: 70%;
    padding: 10px;
    @include box-sizing(border-box);
    z-index: 2;
    border-radius: 4px ;
  }

  .error {
    direction: rtl;
    font-size: 10px;
    margin: -15px auto 0;
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

<template>
  <div class="panel">
    <div class="row form">

      <div class="col-md-6 hidden-sm">
        <img class="form-picture" src="../../assets/img/login-pic.png">
      </div>

      <div class="col-md-6 col-sm-12">
        <form class="row">
          <div>
            <h6 class="col-sm-12 font title">فراموشی رمز عبور</h6>

            <div class="col-sm-12">
              <input type="email"
                     class="form-control font"
                     name="email"
                     placeholder="ایمیل"
                     required=""
                     v-model="user.emailAddress"
                     @focusout="validateEmail"
              />
              <p class="error">{{ error }}</p>
            </div>
            <div class="col-sm-12 text-center">
              <button class="btn font" type="submit" @click.prevent="forgetBtn">ارسال رمز عبور</button>
            </div>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Forget",
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
        error: '',
      }
    },
    methods: {
      validateEmail(){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let check = re.test(this.user.emailAddress);
        if (check){
          this.error = '';
        }
        else{
          this.error = 'ایمیل وارد شده صحیح نیست';
        }
        return check;
      },

      forgetBtn(){
        if (this.validateEmail()){
          //forget password sending
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

    }
  }
</script>

<style scoped>

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

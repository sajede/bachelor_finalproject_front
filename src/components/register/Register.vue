<template>
  <div class="panel">
    <div class="row form">


      <div class="col-md-12" v-if="errorAlert.show">
        <div class="alert alert-danger alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a>
          <i class="fa fa-coffee"></i>
          <p>{{ errorAlert.text }}</p>
        </div>
      </div>

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
                     v-model="user.userName"
              />
              <input type="email"
                     class="form-control font"
                     name="email"
                     placeholder="ایمیل"
                     required=""
                     v-model="user.emailAddress"
              />
              <select
                name="department"
                class="form-control font"
                v-model="user.department">
                <option
                  v-for="dep in departments"
                  :key="dep"
                >{{ dep }}</option>

              </select>
              <input type="password"
                     class="form-control font"
                     name="password"
                     placeholder="رمز عبور"
                     required=""
                     v-model="user.password"/>
              <div class="font radio-role form-group col-sm-8 col-sm-offset-2">
                <nav class="nav nav-pills nav-justified">
                  <li>
                    <input
                      type="radio"
                      id="student"
                      value="student"
                      v-model="user.role">
                    <label for="student"> دانشجو</label>
                  </li><li>
                  <input
                    type="radio"
                    id="professor"
                    value="professor"
                    v-model="user.role">
                  <label for="professor"> استاد</label>
                </li><li>
                  <input
                    type="radio"
                    id="employee"
                    value="employee"
                    v-model="user.role">
                  <label for="employee"> کارمند</label>
                </li>
                </nav>
              </div>
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
            userName: '',
            name: '',
            family: '',
            emailAddress: '',
            department:'',
            password: '',
            role: ''
          },
          departments: [],
          errorAlert: {
            show: false,
            text: ''
          }
        }
      },
      methods : {
        registerBtn(){
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
        },
      },
      mounted() {

        this.$http.get('departments',
          {
            headers: {'SessionID': this.$store.getters.sessionId}
          }).then(
          response => {
          // success callback
              response.json().then(
                data => {
                  this.departments = data;
                }
              )
          },
          error => {
          // error callback

          });

      }
    }
</script>

<style scoped>
  .alert {
    margin: 2vh 0;
  }

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
    margin: 20px auto;
    width: 70%;
    padding: 10px;
    @include box-sizing(border-box);
    z-index: 2;
    border-radius: 4px ;
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
    background-color: rgb(48, 63, 159, 0.9);
    color: white;
  }

</style>

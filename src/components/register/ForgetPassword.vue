<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">

            <ul class="nav nav-tabs">
              <router-link to="/Login" tag="li" active-class="active" exact><a>Login</a></router-link>
              <router-link to="/Register" tag="li" active-class="active" exact><a>Register</a></router-link>
            </ul>

            <div id="forgetPass">
              <form role="form" class="form-horizontal">
                <div class="form-group">
                  <label for="email" class="col-sm-2 control-label">
                    Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-2">
                  </div>
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary btn-sm" @click.prevent="forgetBtn">
                      Send Password</button>
                  </div>
                </div>
              </form>
            </div>

          </div>

          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="row text-center sign-with">
              <div class="col-md-12">
                <h3>Sign in with</h3>
              </div>
              <div class="col-md-12">
                <div class="btn-group btn-group-justified">
                  <router-link to="/Login" tag="a" class="btn btn-primary" @click.prevent="facebookBtn">Facebook</router-link>
                  <router-link to="/Login" tag="a" class="btn btn-danger" @click.prevent="googleBtn">Google</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ForgetPassword",
      methods : {
        forgetBtn() {

        }
      }
    }
</script>

<style scoped>
  #forgetPass {
    margin: 30px;
    padding: 50px 0;
    height: 200px;
  }
</style>

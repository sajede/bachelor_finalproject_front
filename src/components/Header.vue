<template>
    <div>
      <nav>

        <router-link to="/" tag="a">
          <img src="../assets/img/logo.png" class="logo" />
        </router-link>

        <div class="navbar-form navbar-right navbar-item-container">

          <div class="input-group">
            <input type="text" class="form-control" placeholder="جستجو" name="search">
            <div class="input-group-btn">
              <button class="btn btn-default">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>

          <router-link to="/register" tag="button" class="btn btn-default">
            <i class="glyphicon glyphicon-user"></i>
          </router-link>

        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

  nav{
    height: 50px;
    width: 100%;
    background-color: white;
    border-bottom: solid 1px #979797;
  }

  .logo{
    float: left;
    max-height: 35px;
    margin: 10px 10px 0 30px;
  }

  .navbar-item-container{
    margin-right: 50px;
  }

  input {
    direction: rtl;
  }
  input:focus {
    border-color: rgb(255, 175, 32);
    box-shadow: 0 1px 1px rgba(255, 175, 32,0.5) inset, 0 0 8px rgba(255, 175, 32, 0.5);
    outline: 0 none;
  }


</style>

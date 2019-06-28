<template>
    <div>
      <nav>
        <router-link to="/" tag="a">
          <img src="../assets/img/logo.png" class="logo" />
        </router-link>
        <div class="navbar-item-container">
<!--          <router-link to="/" tag="a">-->
<!--            <img src="../assets/img/navbar-serach.png" class="navbar-item" />-->
<!--          </router-link>-->
          <router-link to="/" tag="a">
            <img src="../assets/img/navbar-account.png" class="navbar-item" />
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
    height: 70px;
    width: 100%;
    background-color: white;
    position: relative;
    border-bottom: solid 1px #979797;
  }

  .logo{
    float: left;
    height: 50px;
    margin: 10px 10px 10px 50px;
  }

  .navbar-item{
    float: right;
    height: 35px;
    margin: 18px;
  }

  .navbar-item-container{
    margin-right: 50px;
  }

</style>

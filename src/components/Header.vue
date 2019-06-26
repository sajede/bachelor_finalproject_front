<template>
  <div class="row">
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <router-link to="/" tag="a" class="navbar-brand">SecureCode WebSite</router-link>
        </div>
<!--        <ul class="nav navbar-nav">-->
<!--          <li class="active"><a href="#">Home</a></li>-->
<!--          <li><a href="#">Page 1</a></li>-->
<!--        </ul>-->

        <form class="navbar-form navbar-right">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="search">
            <div class="input-group-btn">
              <button class="btn btn-default"><!--type="submit"-->
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>

          <router-link to="/register" tag="button" class="btn btn-default">
            <i class="glyphicon glyphicon-user"></i>
          </router-link>
        </form>

    </nav>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  img {
    height: 5vh;
  }

  div a {
    font: 400 21px/1 "Material Design Icons";
  }

  nav {
    padding: 0 2%;
    margin: 0;
  }
</style>

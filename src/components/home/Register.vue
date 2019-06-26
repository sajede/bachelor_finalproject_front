<template>
  <div>
    <nav class="nav nav-pills nav-justified">
      <router-link to="/login" tag="li" class="" active-class="active" exact><a>Login</a></router-link>
      <router-link to="/register" tag="li" class="" active-class="active" exact><a>Register</a></router-link>
    </nav>

  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
  nav {
    margin: 5% 0;
    padding: 0 10%;
  }
  nav li a {
    color: white;
  }
  nav li a:hover{
    color: #000;
    /*background-color: #2483A3;*/
  }

</style>

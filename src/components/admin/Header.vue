<template>
  <div>
    <nav class="nav nav-pills nav-justified">
      <router-link to="/admin" tag="li" class="" active-class="active" exact><a>new Orders</a></router-link>
      <router-link to="/admin/all" tag="li" class="" active-class="active" exact><a>all Orders</a></router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  nav {
    border-bottom: solid white 2px;
    margin-bottom: 2%;
  }

  nav li a {
    color: white;
    /*background-color: white;*/
  }
  nav li a:hover{
    color: #000;
    background-color: transparent;
  }

  .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    background-color: white;
    color: #000;
  }

</style>

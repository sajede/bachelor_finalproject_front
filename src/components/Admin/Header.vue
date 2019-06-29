<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <ul class="nav nav-pills nav-justified">
          <router-link to="/admin" tag="li" class="nav-item" active-class="active" exact><a>بسته ها</a></router-link>
          <router-link to="/admin/list/1" tag="li" class="nav-item" active-class="active" exact><a>مشاهده کدهای ثبت شده</a></router-link>
          <router-link to="/help" tag="li" class="nav-item" active-class="active" exact><a>راهنما</a></router-link>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    name: "Header",

  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  nav {
    direction: rtl;
  }

  li >a:hover, li >a:active {
    background-color: rgba(255, 175, 32, 0.2);
  }

  .nav-pills>li.active>a {
    color: rgb(68, 82, 168);
    background-color: rgba(255, 175, 32, 0.2);
  }

</style>

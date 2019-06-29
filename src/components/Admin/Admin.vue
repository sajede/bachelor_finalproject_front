<template>
    <div>
      <admin-header></admin-header>
      <router-view></router-view>
    </div>
</template>

<script>

    import Header from "./Header";

    export default {
      name: "Admin",
      components : {
        adminHeader: Header,

      }
    }
</script>

<style scoped>

</style>

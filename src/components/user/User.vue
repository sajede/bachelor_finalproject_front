<template>
    <div>
      <user-header></user-header>
      <router-view></router-view>
    </div>
</template>

<script>

    import Header from "./Header";

    export default {
      name: "User",
      components : {
        userHeader: Header,

      }
    }
</script>

<style scoped>

</style>

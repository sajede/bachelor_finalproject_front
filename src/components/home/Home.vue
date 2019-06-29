<template>
  <div>
    <home-register></home-register>
    <home-introduction></home-introduction>
  </div>
</template>

<script>
    import Register from "./Register";
    import Introduction from "./Introduction";

    export default {
        name: "Home",
      components : {
        homeRegister: Register,
        homeIntroduction : Introduction,
      }
    }
</script>

<style scoped>

</style>

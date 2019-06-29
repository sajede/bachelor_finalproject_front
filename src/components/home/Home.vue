<template>
  <div>
    <home-register></home-register>
    <home-introduction></home-introduction>
    <home-pic-holder></home-pic-holder>
  </div>
</template>

<script>
    import Register from "./Register";
    import Introduction from "./Introduction";
    import PicHolder from "./PicHolder";

    export default {
        name: "Home",
      components : {
        homeRegister: Register,
        homeIntroduction : Introduction,
        homePicHolder: PicHolder
      }
    }
</script>

<style scoped>

</style>

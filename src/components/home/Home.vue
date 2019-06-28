<template>
  <div>
    <home-header></home-header>
    <home-register></home-register>
    <home-introduction></home-introduction>
    <home-pic-holder></home-pic-holder>
  </div>
</template>

<script>
    import Header from "./Header";
    import Register from "./Register";
    import Introduction from "./Introduction";
    import PicHolder from "./PicHolder";

    export default {
        name: "Home",
      components : {
        homeHeader : Header,
        homeRegister: Register,
        homeIntroduction : Introduction,
        homePicHolder: PicHolder
      }
    }
</script>

<style scoped>

</style>

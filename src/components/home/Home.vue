<template>
  <div>
    <app-slider></app-slider>
    <app-paper></app-paper>
    <app-register></app-register>
  </div>
</template>

<script>
  import Slider from './Slider.vue';
  import Paper from './Paper.vue';
  import Register from './Register.vue';


  export default {
        name: "Home",
        components: {
          appSlider : Slider,
          appPaper : Paper,
          appRegister : Register
        }
    }
</script>

<style scoped>
  div {
    height: fit-content;
  }
</style>

<template>
  <div id="app" class="container-fluid">
    <app-header></app-header>
    <router-view id="mainContainer"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components:{
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
  #app {
    position: relative;
    min-height: 100vh;
    background-color: rgb(70, 70, 70);
  }
  #mainContainer {
    min-height: 60vh;
  }

  * {
    margin: 0;
    padding: 0;
  }


</style>

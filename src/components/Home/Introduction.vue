<template>
  <div class="panel">
    <div class="row text-center">
      <h3  class="title font">برای استفاده از smart aeg</h3>
    </div>

    <div class="row text-center">
      <div class="col-md-4">
        <img src="../../assets/img/ic1.png">
        <h6 class="font subtitle">
          1. وارد سایت شوید
        </h6>
      </div>

      <div class="col-md-4">
        <img src="../../assets/img/ic2.png">
        <h6 class="font subtitle">
          2. کد خود را آپلود کنید
        </h6>
      </div>

      <div class="col-md-4">
        <img src="../../assets/img/ic3.png">
        <h6 class="font subtitle">
          3. گزارش نتیجه را دانلود کنید
        </h6>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style scoped>

  .panel{
    /*background-color: #ffaf20;*/
    padding: 10vh 0 15vh 0;
    position: relative;
  }

  .title{
    direction: rtl;
    color: rgb(48, 63, 159);
    -webkit-text-stroke: 0.5px rgba(48, 63, 159, 0.4);
    font-size: 27px;
    font-weight: bold;
  }

  img {
    width: 90%;
  }

  .subtitle{
    direction: rtl;
    font-size: 20px;
    padding: 2vw 3vw;
  }

</style>

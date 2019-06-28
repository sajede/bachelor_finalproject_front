<template>
  <div class="panel">
    <div class="row text-center">
      <h3  class="title font">خصوصیات پنل آسا</h3>
    </div>

    <div class="row text-center">
      <div class="col-md-4">
        <img src="../../assets/img/ic3.png">
        <h6 class="font subtitle">استادان، کارمندان و همه ی مسئولین دانشگاه، در جهت داشتن دانشگاه بهتر همکاری خواهند کرد</h6>
      </div>

      <div class="col-md-4">
        <img src="../../assets/img/ic2.png">
        <h6 class="font subtitle">هر نوع انتقاد، پیشنهاد، ایده و نظر در قالب -مورد- ثبت و به مسئول مربوطه ارجاع داده میشود.</h6>
      </div>

      <div class="col-md-4">
        <img src="../../assets/img/ic1.png">
        <h6 class="font subtitle">در هر سازمان یا تشکلی، قطعا کمی ها و کاستی هایی وجود دارد که باعث نارضایتی و کاهش عملکرد اعضا میشود.</h6>
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
    background-color: #ffaf20;
    padding: 10vh 0 15vh 0;
    position: relative;
  }

  .title{
    color: white;
    -webkit-text-stroke: 0.3px #797979;
    font-size: 27px;
    font-weight: bold;
    text-shadow: 0 2px 4px #000000;
  }

  .subtitle{
    direction: rtl;
    color: white;
    font-size: 20px;
    padding: 2vw 3vw;
  }

</style>

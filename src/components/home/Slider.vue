<template>
  <div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
<!--          <li data-target="#myCarousel" data-slide-to="2"></li>-->
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../../assets/img/slider1.jpg" alt="" style="width:100%;">
            <div class="carousel-caption">
              <h3>PHP Programs</h3>
              <p>More secure in the world wide web</p>
            </div>
          </div>

          <div class="item">
            <img src="../../assets/img/slider1.jpg" alt="" style="width:100%;">
            <div class="carousel-caption">
              <h3>PHP Programs</h3>
              <p>More secure in the world wide web</p>
            </div>
          </div>

<!--          <div class="item">-->
<!--            <img src="ny.jpg" alt="New York" style="width:100%;">-->
<!--            <div class="carousel-caption">-->
<!--              <h3>New York</h3>-->
<!--              <p>We love the Big Apple!</p>-->
<!--            </div>-->
<!--          </div>-->

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Slider"
    }
</script>

<style scoped>
  .carousel-caption {
    color: #000;
  } 
</style>

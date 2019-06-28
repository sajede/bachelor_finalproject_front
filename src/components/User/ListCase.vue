<template>
  <div>
    <div class="form" v-for="caseParam in cases">
      <div class="font">

        <div class="row">
          <div class="col-md-12">
            <h3 class="title font">مورد</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 row">
            <h6 class="col-md-2 case-title">عنوان:</h6>
            <h4 class="col-md-10 case-subtitle">{{ caseParam.topic }}</h4>
          </div>
          <div class="col-md-6 row">
            <h6 class="col-md-2 case-title">موضوع:</h6>
            <h4 class="col-md-10 case-subtitle">{{ caseParam.type }}</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 row">
            <h6 class="col-md-2 case-title" >وضعیت:</h6>
            <h4 class="col-md-10 case-subtitle">{{ caseParam.proceedingStatus }}</h4>
          </div>
          <div class="col-md-6 row">
            <h6 class="col-md-2 case-title" >کاربر مسئول:</h6>
            <h4 class="col-md-10 case-subtitle">{{ caseParam.referrerNumbers }}</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 row"/>
          <div class="col-md-6 row">
            <h6 class="col-md-2 case-title" >تاریخ ثبت:</h6>
            <h4 class="col-md-10 case-subtitle">{{ caseParam.sendDate }}</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 row">
            <a v-if="$store.getters.userRole == 'student'" href="#opinion_popup">
              <button class="btn button2">ثبت رضایت</button>
            </a>
            <button class="btn button1" @click="seeCase(caseParam.id)">مشاهده مورد</button>
          </div>
        </div>

        <div id="opinion_popup" class="overlay">
          <div class="popup" >
            <div style="height: 30px;">
              <a class="close" href="#">&times;</a>
            </div>
            <div>
              <p style="text-align: right" class="font">رضایت دارین یا نه ؟</p>
              <div style="display: table;margin: 0 auto">
                <div style="display: flex;">
                  <a href="#" class="rezayat">
                    <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/angry.jpg" />
                  </a>
                  <a href="#" class="rezayat">
                    <img class="popup-img" style="flex: 0 0 20%" src="../../assets/img/sad.jpg" />
                  </a>
                  <a href="#" class="rezayat">
                    <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/poker.jpg" />
                  </a>
                  <a href="#" class="rezayat">
                    <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/good.jpg" />
                  </a>
                  <a href="#" class="rezayat">
                    <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/nice.jpg" />
                  </a>
                </div>

              </div>
            </div>
            <div style="text-align: center;margin-top: 30px">
              <button class="button1 font" >مشاهده مورد</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "ListCase",
      data() {
        return {
          cases: [
            {
              id: '125',
              sendDate: '12/4/2019',
              referrerNumbers: 'دکتر شمس فرد (مدیر دانشکده)',
              topic: 'افزایش ساعات کاری کتابخانه',
              type: 'درخواست',
              proceedingStatus: 'باز',
              satisfactionStatus: '',
              comment: 'لطفا ساعات کاری کتابخانه در ایاف فرجه ها بیشتر شود',
            },
          ],
        }
      },
      methods : {
        seeCase: function(id) {
          this.$router.push('/user/case/'+id);
        }
      }
    }
</script>

<style scoped>
  row {
    direction: rtl;
  }

  .form{
    direction: rtl;
    max-width:92vw;
    margin: 10px auto;
    background-color: #fbfbfb;
    border: solid 1px #d9d9d9;;
    border-radius: 1rem;
    z-index: 1;
    padding: 3vh 5vw 8vh;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }

  .case-title{
    font-size: 14px;
    color: #727272;
    float: right;
  }

  .case-subtitle{
    font-size: 17px;
    color: #333333;
    float: right;
  }

  .button1{
    width: 102px;
    height: 36px;
    border-radius: 5px;
    background-color: #303f9f;
    color: white;
  }

  .button2{
    width: 102px;
    height: 36px;
    border-radius: 5px;
    background-color: #ffaf20;
    opacity: 0.5;
    color: white;
    margin-left: 5px;
  }

  /* for popup */

  .box {
    width: 40%;
    margin: 0 auto;
    background: rgba(255,255,255,0.2);
    padding: 35px;
    border: 2px solid #fff;
    border-radius: 20px/50px;
    background-clip: padding-box;
    text-align: center;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
  }

  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
  .popup .close:hover {
    color: #ffaf20;
  }
  .popup .content {
    max-height: 30%;
    overflow: auto;
  }

  @media screen and (max-width: 700px){
    .box{
      width: 70%;
    }
    .popup{
      width: 70%;
    }
  }
  .popup-img{
    opacity: 0.7;
    width: 40px;
    height: 36px;
    padding: 0px 2.5px 0px 2.5px
  }

  .popup-img:hover{
    opacity: 1 !important;
  }
  /* end of popup */
</style>

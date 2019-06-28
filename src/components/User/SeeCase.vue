<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">مشاهده مورد</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 ">
          <label>نوع مورد</label>
          <input type="text" v-model="caseParam.type" disabled>
        </div>
        <div class="col-md-6">
          <label>دریافت کننده</label>
          <input type="text" v-model="caseParam.referrerNumbers" disabled>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6"/>
        <div class="col-md-6">
          <label for="topic">عنوان</label>
          <input type="text" id="topic" v-model="caseParam.topic" disabled>
        </div>

      </div>

      <div class="row">
        <div class="col-md-6"/>
        <div class="col-md-6 ">
          <label for="description">شرح مورد</label>
          <textarea id="description" rows="12" v-model="caseParam.comment" disabled/>
        </div>
      </div>
      <div v-if="$store.getters.userRole != 'student'" class="col-md-12 text-center">
        <button class="btn" @click.prevent="closeCase">اقدام و بستن این مورد</button>
        <button class="btn button1" @click.prevent="refering">ارجاع</button>
      </div>

      <div v-if="$store.getters.userRole == 'student'" class="col-md-12 text-center">
        <button class="btn" @click.prevent="backToList">بازشگت</button>
      </div>


    </form>
  </div>
</template>

<script>
  export default {
    name: "SeeCase",
    data(){
      return {
        caseParam: {
          id: '125',
          sendDate: '12/4/2019',
          referrerNumbers: 'دکتر شمس فرد (مدیر دانشکده)',
          topic: 'افزایش ساعات کاری کتابخانه',
          type: 'درخواست',
          proceedingStatus: 'باز',
          satisfactionStatus: '',
          comment: 'لطفا ساعات کاری کتابخانه در ایاف فرجه ها بیشتر شود',
        },
      }
    },
    methods : {
      closeCase() {
        this.$router.push('/user/list/'+1);
      },
      backToList() {
        this.$router.push('/user/list/'+1);
      },
      refering() {
        this.$router.push('/user/refer/'+this.$route.params.id );
      }
    },
    mounted() {
      this.user = this.$store.getters.userInfo;
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
    padding: 3vh 3vw 8vh;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }

  input, textarea, select, option {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  select {
    height: 40px;
  }

  label{
    font-size: 12px;
    color: #333333;
    margin-top: 25px;
  }

  button{
    color: white;
    background-color: #303f9f;
  }

  button:hover {
    color: white;
    background-color: rgb(48, 63, 159, 0.9);
  }

  .button1{
    color: white;
    background-color: rgb(255, 175, 32);
  }

  .button1:hover {
    color: white;
    background-color: rgb(255, 175, 32, 0.8);
  }

</style>

<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">ثبت مورد</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 ">
          <label>نوع مورد</label>
          <select
            name="fname"
            class="form-control font"
            v-model="caseParam.type">
            <option
              v-for="type in types"
              :key="type"
            >{{ type }}</option>

          </select>
        </div>
        <div class="col-md-6">
          <label>دریافت کننده</label>
          <select
            name="fname"
            class="form-control font"
            v-model="caseParam.referrer">
            <option
              v-for="ref in referrers"
              :key="ref"
            >{{ ref }}</option>

          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6"/>
        <div class="col-md-6">
          <label for="topic">عنوان</label>
          <input type="text" id="topic" v-model="caseParam.topic">
        </div>

      </div>

      <div class="row">
        <div class="col-md-6"/>
        <div class="col-md-6 ">
          <label for="description">شرح مورد</label>
          <textarea id="description" rows="12" v-model="caseParam.comment"/>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <button class="btn" id="email">ثبت مورد</button>
      </div>


    </form>
  </div>
</template>

<script>
  export default {
    name: "NewCase",
    data(){
      return {
        caseParam: {
          sendDate: 'dd/mm/yyyy',
          referrerNumbers: 'ارجاع به',
          topic: 'موضوع',
          type: '',
          proceedingStatus: 'باز',
          satisfactionStatus: '',
          comment: '',
        },
        referrers : ['دکتر شمس','دکتر قوامی','دکتر علی اکبری'],
        types : ['انتقاد','درخواست','پیشنهاد']
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
    background-color: rgb(48, 63, 159);
  }
  button:hover {
    color: white;
    background-color: rgb(48, 63, 159, 0.9);
  }
</style>

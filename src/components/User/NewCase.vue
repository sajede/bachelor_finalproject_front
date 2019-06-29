<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">ثبت کد جدید</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">

        </div>

        <div class="col-md-6 row">
          <div class="col-md-12">
            <label>نوع سفارش</label>
            <select
              name="type"
              class="form-control font"
              v-model="caseParam.type">
              <option
                v-for="type in types"
                :key="type"
              >{{ type }}</option>

            </select>
          </div>
          <div class="col-md-12">
            <label for="topic">عنوان</label>
            <input type="text" id="topic" v-model="caseParam.topic">
          </div>
          <div class="col-md-12">
            <label for="description">توضیحات</label>
            <textarea id="description" rows="8" v-model="caseParam.comment"/>
          </div>
          <div class="col-md-12">
            <input type="file" id="file" class="inputfile" v-on="caseParam.file"/>
            <label for="file">آپلود کد</label>
          </div>
        </div>
      </div>
      <div class="row">

      </div>

      <div class="col-md-12 text-center">
        <button class="btn" @click.prevent="sendBtn">ثبت کد</button>
        <button class="btn" v-if="this.caseParam.type=='طلایی' && this.pack.count=='0'" @click.prevent="purchaseBtn">خرید پکیج طلایی</button>
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
          id: '',
          type: '',
          topic: '',
          sendDate: '',
          proceedingStatus: '',
          comment: '',
        },
        pack: {
          name: '',
          count: '',
          price: '',
          comment: '',
          file: ''
        },
        types : ['رایگان','طلایی']
      }
    },
    methods: {
      purchaseBtn(){

      },
      sendBtn(){
        if (this.caseParam.type=='طلایی' && this.pack.count=='0'){

        }
      },
    },
    mounted() {
      this.caseParam = this.$store.getters.case;
      this.pack = this.$store.getters.pack;
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

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

  input, textarea, select, option, .inputfile + label {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  select, button {
    height: 40px;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    cursor: pointer;
    font-size: 1.25em;
    color: rgb(48, 63, 159);
    background-color: rgba(255, 175, 32,0.7);
  }

  .inputfile:focus + label,
  .inputfile + label:hover {
    background-color: rgba(255, 175, 32, 0.9);
  }

  label{
    font-size: 12px;
    color: #333333;
    margin-top: 25px;
  }

  button{
    color: white;
    padding: 0 20px;
    background-color: rgb(48, 63, 159);
  }
  button:hover {
    color: white;
    background-color: rgba(48, 63, 159, 0.9);
  }
</style>

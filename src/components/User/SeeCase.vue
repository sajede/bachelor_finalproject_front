<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">مشاهده کد ثبت شده</h3>
        </div>
      </div>

      <div class="row">
        <div class="padd col-md-6 row">
          <template v-if="caseParam.proceedingStatus != 'در انتظار'">
            <div class="col-md-12">
              <label for="reply">توضیحات پاسخ</label>
              <textarea id="reply" rows="16" v-model="caseParam.comment" disabled/>
            </div>
            <div class="col-md-12">
              <router-link to="/" tag="a" target="_blank" class="upload">
                دانلود گزارش کد
              </router-link>
            </div>
          </template>
        </div>

        <div class="padd col-md-6 row">
          <div class="col-md-12">
            <label>نوع سفارش</label>
            <select
              name="type"
              class="form-control font"
              v-model="caseParam.type"
              disabled>
              <option
                v-for="type in types"
                :key="type"
              >{{ type }}</option>

            </select>
          </div>
          <div class="col-md-12">
            <label for="topic">عنوان</label>
            <input type="text" id="topic" v-model="caseParam.topic" disabled>
          </div>
          <div class="col-md-12">
            <label for="description">توضیحات</label>
            <textarea id="description" rows="8" v-model="caseParam.comment" disabled/>
          </div>
          <div class="col-md-12">
            <router-link to="/" tag="a" target="_blank" class="upload">
              دانلود کد
            </router-link>
          </div>
        </div>
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
        reply: {
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

  .padd {
    padding: 0 5px;
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

  input, textarea, select, option, .upload {
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

  .upload {
    cursor: pointer;
    font-size: 1.25em;
    color: white;
    background-color: rgb(48, 63, 159);
  }

  .upload:hover {
    background-color: rgba(48, 63, 159, 0.9);
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

<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <h3 class="title font">ایجاد بسته ی جدید</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">

        </div>

        <div class="col-md-6 row">
          <div class="col-md-12">
            <label for="name">نام بسته</label>
            <input type="text" id="name" v-model="pack.name">
          </div>
          <div class="col-md-12">
            <label for="count">تعداد گزارش</label>
            <input type="number" id="count" v-model="pack.count">
          </div>
          <div class="col-md-12">
            <label for="price">قیمت</label>
            <input type="number" id="price" v-model="pack.price">
          </div>
        </div>
      </div>
      <div class="row">

      </div>

      <div class="col-md-12">
        <p class="error"> {{ error }}</p>
        <button class="btn" @click.prevent="sendBtn">ثبت بسته</button>
      </div>



    </form>
  </div>
</template>

<script>
  export default {
    name: "NewCase",
    data(){
      return {
        pack: {
          id: '',
          name: '',
          count: '',
          price: '',
          comment: '',
          file: ''
        },
        error: '',
      }
    },
    methods: {
      sendBtn(){
        if (this.pack.name=='' || this.pack.count=='' || this.pack.price==''){
          this.error = 'شما باید همه ی قسمت ها را پر کنید.';
        }
        else {
          this.$store.commit('addPack',this.pack);
          this.$router.push('/admin');
        }
      },
    },
    mounted() {
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
    padding: 3vh 3vw 10vh;
  }

  .error {
    direction: rtl;
    font-size: 14px;
    width: 70%;
    color: red;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  label{
    font-size: 12px;
    color: #333333;
    margin-top: 25px;
  }

  button{
    height: 40px;
    color: white;
    padding: 0 20px;
    background-color: rgb(48, 63, 159);
  }
  button:hover {
    color: white;
    background-color: rgba(48, 63, 159, 0.9);
  }
</style>

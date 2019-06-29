<template>
  <div class="form" >
    <form class="font">

      <div class="row">
        <div class="col-md-12">
          <router-link to="admin/new" tag="button" class="btn" @click.prevent="addBtn">
            <span class="glyphicon glyphicon-plus"></span>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 text-center" v-for="pack in packs">
          <div class="pack">
            <p>{{pack.name}}</p>
            <p>{{pack.count}} گزارش</p>
            <p>{{pack.price}} هزار تومان</p>
            <button class="btn" @click.prevent="purchaseBtn(pack.id,pack.count)">خرید بسته</button>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    name: "Packages",
    data(){
      return {
        package: {
          name: '',
          count: '',
          price: '',
          comment: '',
          file: ''
        },
        packs: [
          {
            id: '',
            name: '',
            count: '',
            price: '',
            comment: '',
            file: ''
          },
        ],
        types : ['رایگان','طلایی']
      }
    },
    methods: {
      purchaseBtn(index, count){
        this.$store.commit('addCount',count);
      },
      addBtn(){

      },
      removeBtn(index){
      },
    },
    mounted() {
      this.packs = this.$store.getters.packs;
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

  .pack{
    /*background: white;*/
    background-color: rgba(255, 175, 32, 0.4);
    border: solid 1px #d9d9d9;;
    border-radius: 1rem;
    max-width: 80%;
    margin: 5px auto;
    padding: 3vh 0;
  }

  .pack p{
    font-size: 2rem;
    padding: 5px 0;
    color: rgb(48, 63, 159);
  }

  .pack button {
    padding: 10px 20px;
    margin: 10px auto;
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

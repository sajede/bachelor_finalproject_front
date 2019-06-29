<template>
  <div>
    <ul class="form list-group">
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-2 hidden-sm" @click="sortDate">
            <a>تاریخ</a>
          </div>
          <div class="col-md-5 col-sm-7" @click="sortSubject">
            <a>عنوان</a>
          </div>
          <div class="col-md-5 col-sm-5">
            نتیجه
          </div>
        </div>
      </li>
      <li v-for="order in cases" class="list-group-item">
        <div class="row">
          <div class="col-md-2 hidden-sm">
            {{ order.sendDate }}
          </div>
          <div class="col-md-5 col-sm-7">
            {{ order.topic }}
          </div>
          <div class="col-md-5 col-sm-5">
            <button class="btn button1" @click.prevent="seeCase(order.id)">
              {{ order.proceedingStatus }}
            </button>
          </div>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
    export default {
      name: "ListCase",
      data() {
        return {
          cases: [
            {
              id: '10',
              type: 'طلایی',
              topic: 'پروزه یونی',
              sendDate: '12/05/2018',
              proceedingStatus: 'در انتظار',
              comment: '',
              file: 'http://url'
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

  .row div a{
    cursor: pointer;
    color: #000;
  }

  .form{
    direction: rtl;
    max-width:95vw;
    margin: 10px auto;
    background-color: #fbfbfb;
    border: solid 1px #d9d9d9;;
    border-radius: 1rem;
    z-index: 1;
    padding: 3vh 5vw 8vh;
  }

  .button1{
    min-width: 40%;
    border-radius: 5px;
    color: white;
  }

  .button1 {
    background-color: #303f9f;
  }

</style>

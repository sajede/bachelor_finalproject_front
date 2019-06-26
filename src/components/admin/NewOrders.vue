<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div class="row">
        <div class="col-md-2" @click="sortDate">
          <a>Date</a>
        </div>
        <div class="col-md-5" @click="sortSubject">
          <a>Subject</a>
        </div>
        <div class="col-md-5">
          Result
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-md-2">
          2019/6/23
        </div>
        <div class="col-md-5">
          Uni Project
        </div>
        <div class="col-md-5" @click="result(1)">
          <a>Coming soon.....</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "NewOrders",
      methods: {
        sortDate(){

        },
        sortSubject(){

        },
        result: function(id){
          this.$router.push('/admin/'+id+'/order');
        }
      }
    }
</script>

<style scoped>
  .row div a{
    cursor: pointer;
  }
</style>

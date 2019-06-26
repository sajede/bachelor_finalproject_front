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
    <li v-for="(Order,indx) in getOrders" class="list-group-item">
      <div class="row">
        <div class="col-md-2">
          {{ Order.date }}
        </div>
        <div class="col-md-5">
          {{ Order.subject }}
        </div>
        <div class="col-md-5" @click="result(indx)">
          <a>{{ Order.result }}</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "AllOrders",
    computed: mapGetters([
      'getOrders'
    ]),
    methods: {
      sortDate(){

      },
      sortSubject(){

      },
      result: function(id){
        this.$router.push('/user/'+id+'/order');
      }
    }
  }
</script>

<style scoped>
  .row div a{
    cursor: pointer;
  }
</style>

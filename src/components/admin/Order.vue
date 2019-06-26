<template>
    <div>
      <div class="row">
        <div class="col-md-12">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label">Subject:</label>
              <div class="col-lg-6">
                <input class="form-control" type="text" :value="getOrders[$route.params.id].subject" disabled/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-2"/>
              <div class="col-lg-9">
                <textarea class="form-control" rows="10" type="text" :value="getOrders[$route.params.id].descriptionQ" disabled/>
              </div>
            </div>

            <div class="form-group">
              <label class="col-lg-2"/>
              <div class="col-lg-7">
                <a :href="getOrders[$route.params.id].fileQ" target="_blank">
                  <input class="form-control" type="text" :value="getOrders[$route.params.id].fileQ" disabled/>
                </a>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-2"/>
              <div class="col-lg-9">
                <textarea class="form-control" rows="10" type="text" :value="getOrders[$route.params.id].descriptionR"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-2"/>
              <div class="col-lg-7">
                <input type="file" class="form-control" value="c:/passwords.txt">
              </div>
              <div class="col-lg-2">
                <input type="button" class="btn btn-default" value="Send">
              </div>
            </div>

          </form>
        </div>
      </div>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "Order",
    computed: mapGetters([
      'getOrders'
    ]),
    }
</script>

<style scoped>
  textarea[disabled], input[disabled] {
    cursor: default;
  }
</style>

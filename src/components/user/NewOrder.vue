<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label">Subject:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value=""/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-2"/>
              <div class="col-lg-9">
                <textarea class="form-control" rows="10" type="text" value=""/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-2"/>
              <div class="col-lg-7">
                <input type="file" class="form-control">
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
    export default {
        name: "NewOrder"
    }
</script>

<style scoped>
  input[type="button"] {
    width: 100%;
  }
</style>

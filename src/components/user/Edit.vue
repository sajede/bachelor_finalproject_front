<template>
  <div class="container">
    <div class="row">
      <!-- left column -->
      <div class="col-md-3 text-center">
        <img src="//placehold.it/100" class="avatar img-circle" alt="avatar">
        <input type="file" class="form-control">
      </div>

      <!-- edit form column -->
      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a>
          <i class="fa fa-coffee"></i>
          welcome to <strong>Secure Code</strong>
        </div>

        <form class="form-horizontal" role="form">
          <div class="form-group">

            <label class="col-lg-3 control-label">Name:</label>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-md-3">
                  <select class="form-control">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                  </select>
                </div>
                <div class="col-md-9">
                  <input type="text" class="form-control" placeholder="Name"/>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Universty:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janesemail@gmail.com">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Confirm password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" value="Save Changes">
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
    export default {
      name: "Edit",
      data() {
        return {

        }
      }
    }
</script>

<style scoped>

  label {
    color: white;
  }

  img {
    padding: 2%;
  }

  input[type="file"] {
    background-color: transparent;
    border: none;
    color: white;
  }

</style>

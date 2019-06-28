<template>
    <div>
      <refer-see-case></refer-see-case>
      <div class="form" >
        <form class="font">

          <div class="row">
            <div class="col-md-12">
              <h3 class="title font">ارجاع</h3>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6"/>
            <div class="col-md-6">
              <label>دریافت کننده</label>
              <select
                name="fname"
                class="form-control font"
                v-model="refer.referrer">
                <option
                  v-for="ref in referrers"
                  :key="ref"
                >{{ ref }}</option>

              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6"/>
            <div class="col-md-6 ">
              <label for="description">شرح مورد</label>
              <textarea id="description" rows="12" v-model="refer.comment"/>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button class="btn" id="email">ارجاع شود</button>
          </div>


        </form>
      </div>
    </div>
</template>

<script>
    import SeeCase from "./SeeCase";

    export default {
        name: "Refer",
      components: {
          referSeeCase: SeeCase
      },
      data(){
        return {
          refer: {
            comment: '',
            caseEntity: '',
            fromUser: '',
            toUser: '',
            referrerNumber: '0'
          },
          referrers : ['دکتر شمس','دکتر قوامی','دکتر علی اکبری'],
        }
      },
    }
</script>

<style scoped>
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

  input, textarea, select, option {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  select {
    height: 40px;
  }

  label{
    font-size: 12px;
    color: #333333;
    margin-top: 25px;
  }

  button{
    color: white;
    background-color: rgb(48, 63, 159);
  }
  button:hover {
    color: white;
    background-color: rgb(48, 63, 159, 0.9);
  }
</style>

<template>
  <div>
    <user-basic-info></user-basic-info>
    <user-password></user-password>
  </div>
</template>

<script>
  import Header from "./Header";
  import BasicInfo from "./BasicInfo";
  import Password from "./Password";

  export default {
    name: "Profile",
    components : {
      userBasicInfo: BasicInfo,
      userPassword: Password
    }
  }
</script>

<style scoped>

</style>

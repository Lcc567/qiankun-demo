<template>
  <el-button @click="handleLogin">login</el-button>
</template>
<script>
//  "UserDao in class UserService in 
//  class UserController is not valid in current context"
import request from "@/utils/request";
export default {
  name: "login",
  methods: {
    handleLogin() {
      request({
        url: "/user/1",
        method: "get",
      });
    },
  },
  mounted() {},
};
</script>
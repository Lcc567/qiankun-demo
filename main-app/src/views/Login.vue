<template>
  <el-col :span="12" :offset="6" class="login-wrap">
    <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { LOGIN } from "../store/actions-type";

const { mapActions } = createNamespacedHelpers("login");
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions([LOGIN]),
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this[LOGIN](this.loginForm);
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {},
};
</script>

<style>
.login-wrap {
  margin-top: 20px;
}
</style>
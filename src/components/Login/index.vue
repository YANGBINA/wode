<template>
  <div class="login">
    <div class="login-container">
      <div class="main">
        <img src="../../assets/images/icon_logo.png" class="logo" />
        <div class="form_box">
          <div class="title">
            <p>琳琅后台业务管理系统</p>
            <p>Business Management System</p>
          </div>
          <div class="layui-form">
            <div class="layui-form-item">
              <input type="text" placeholder="请输入用户名称" class="long" v-model="userName">
            </div>
            <div class="layui-form-item">
              <input type="password" placeholder="请输入登录密码" class="long" v-model="password">
            </div>
            <div class="layui-form-item">
              <div class="btn primary" @click="login">登陆</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Login",
  data() {
    return {
      userName: this.$store.state.login.userName.trim(),
      password: this.$store.state.login.password.trim(),
    }
  },

  methods: {
    login() {
      this.$store.dispatch('login/login',
        {
          username: this.userName,
          password: this.password,
        },
      )
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: table;
  background: #1abc9c;
  .login-container {
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    .main {
      display: inline-block;
      width: 430px;
    }
  }
}

.logo {
  width: 120px;
  height: 130px;
  display: block;
  margin: 0px auto 20px auto;
}

.form_box {
  background: #fff;
  width: 430px;
  height: 400px;
  border-radius: 10px;
  padding-top: 10px;
}

.title p {
  color: #1abc9c;
  font-size: 26px;
  text-align: center;
}

.layui-input {
  height: 50px;
  padding-left: 44px;
}

.layui-input-inline {
  width: 240px !important;
  position: relative;
}

.layui-form {
  margin: 50px 85px;
}

.layui-form-item {
  margin: 20px 0;
  text-align: center;
}

.inputStyle {
  width: 240px;
}
</style>

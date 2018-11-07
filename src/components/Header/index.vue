<template>
  <div class="header">
    <div class="header-log">
      <img src="../../assets/images/icon_logo.png" alt="" class="icon_logo">
      <span class="header-title">琳琅后台管理系统</span>
    </div>
    <ul class="header-main-ul">
      <li class="user_edite"><img src="../../assets/images/icon_head.png" alt="">
        <span class="user">111</span>
      </li>
      <li><img src="../../assets/images/icon_house.png" alt="" class="house"></li>
      <li><img src="../../assets/images/icon_three.png" alt=""></li>
      <li><img src="../../assets/images/icon_bell.png" alt=""></li>
      <li><img src="../../assets/images/icon_color.png" alt=""></li>
      <li><img src="../../assets/images/icon_close.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #1abc9c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header-log {
  display: flex;
  align-items: center;
}

.header-title {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}

.icon_logo {
  width: 34px;
  height: 34px;
}

.header-main-ul {
  height: 100%;
  display: flex;
}

.header-main-ul li {
  padding: 10px 20px;
  display: inline-block;
}

.header-main-ul li img {
  width: 30px;
  height: 30px;
}

.header-main-ul li:hover {
  border-bottom: solid 4px #5FB878;
}

.user_edite {
  width: 120px;
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
}

.user {
  position: absolute;
  right: 10px;
  bottom: 0;
  line-height: 60px;
  color: rgba(255, 255, 255, .7);
}

.house {
  width: 34px !important;
  height: 34px !important;
}
</style>

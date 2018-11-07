<template>
  <div class="main_container">
    <div class="main_header">
      <span>数据列表</span>
      <div class="refresh_btn">
        <img src="../../../../../assets/images/refresh.png" class="main_refresh_icon"/>
        刷新
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .main_container {
    width: 100%;
    height: 100px;
  }
  .main_header {
    background-color: #F3F3F3;
    border-color: #E4E4E4;
    font-size: 20px;
    color: #373737;
    margin: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .main_refresh_icon {
    width: 20px;
    height: 20px;
  }
  .refresh_btn {
    float: right;
    background: #FFF;
    justify-content: center;
    font-size: 16px;
    

  }
</style>

<template>
  <div class="ThirdPage">
       <div class="ThirdPage-aside-left">
            <span class="section-router-title">用户</span>
            <div class="ThirdPage-con-aside">
              <ul>
                  <li v-for="(item,index) in tabsList" :key="index"><router-link :to='item.link'>{{item.text}}</router-link></li>
              </ul>
            </div> 
       </div>  
       <div class="ThirdPage-con">  
         <div class="ThirdPage-con-scroll">
              <div class="ThirdPage-con-head">
                  <span class="line"></span>
                  <span class="third-router-title">用户列表</span>
             </div>
             <div class="ThirdPage-con-content">
              <router-view></router-view>
            </div>
         </div>  
       </div> 
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabsList: [
        { id: 1, text: "订单列表", link: "/Order/OrderList" },
        { id: 2, text: "退款申请处理", link: "/Order/ReturnRequest" }
       
      ]
    };
  }
};
</script>

<style>
@import url("../index.css");
</style>

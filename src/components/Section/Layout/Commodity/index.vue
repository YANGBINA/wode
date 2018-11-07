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
        { id: 1, text: "商品列表", link: "/Commodity/AddCommodity" },
        { id: 2, text: "添加商品", link: "/Commodity/CommodityList" },
        { id: 3, text: "后端品类", link: "/Commodity/BackCategory" },
        { id: 4, text: "属性管理", link: "/Commodity/AttrManagement" },
        { id: 5, text: "前端类目", link: "/Commodity/WebCategory" },
        { id: 6, text: "品牌管理", link: "/Commodity/BrandManagement" },
        { id: 7, text: "服务保障", link: "/Commodity/ServiceGuarantee" }
      ]
    };
  }
};

</script>

<style>
@import url("../index.css");
</style>

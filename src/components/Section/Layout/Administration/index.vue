<template>
  <div class="ThirdPage">
       <div class="ThirdPage-aside-left">
            <span class="section-router-title">专题</span>
            <div class="ThirdPage-con-aside">
              <ul>
                  <li v-for="(item,index) in tabsList" :key="index" ><router-link :to='item.link' >{{item.text}}</router-link></li>
              </ul>
            </div> 
       </div>  
       <div class="ThirdPage-con">  
         <div class="ThirdPage-con-scroll">
              <div class="ThirdPage-con-head">
                  <span class="line"></span>
                  <span class="third-router-title">迈外迪专题管理</span>
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
        { id: 1, text: "专题管理", link: "/TopicAdmin" }
      ],
      
    };
  },
  methods: {
   
  }
};
</script>

<style>
@import url("../index.css");
</style>

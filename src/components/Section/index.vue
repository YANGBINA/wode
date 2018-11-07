<template>
  <div class="layui-layout-main">
    <Header></Header>
    <div class="layout-lay">
      <div class="layout-aside">
        <ul class="aside-ul">
          <li v-for="(item, index) in tabs" :key="index" @click="Hight(index)" :class="index ===checkindex?'active':''">
            <router-link :to='item.link'>
              {{item.text}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="layout-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
export default {
  name: "App",
  data() {
    return {
      tabs: [
        { id: 1, text: "首页", link: "/homePage/System" },
        { id: 2, text: "商品", link: "/Commodity/AddCommodity" },
        { id: 3, text: "订单", link: "/Order/OrderList" },
        { id: 4, text: "用户", link: "/User/UserList" },
        { id: 5, text: "促销", link: "/Promotion/CouponsList" },
        { id: 6, text: "财务", link: "/Finance" },
        { id: 7, text: "权限", link: "/Jurisdiction" },
        { id: 8, text: "供货商", link: "/Supplier" },
        { id: 9, text: "供货商订单", link: "/SupplierOrder" },
        { id: 10, text: "分销", link: "/Distribution" },
        { id: 11, text: "云贷营销", link: "/YDMarketing" },
        { id: 12, text: "版本", link: "/Edition" },
        { id: 13, text: "用户管理", link: "/UserManagement" },
        { id: 14, text: "琳琅圈", link: "/LinLangCoop" },
        { id: 15, text: "运营管理", link: "/Management" },
        { id: 16, text: "专题", link: "/Administration" },
        { id: 17, text: "工具", link: "/Tool" }
      ],
      checkindex: 0
    };
  },
  mounted() {},
  methods: {
    Hight(index) {
      this.checkindex = index;
    }
  },
  components: {
    Header
  }
};
</script>
<style>
.layui-layout-main {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.layout-lay {
  flex: 1;
  overflow-y: auto;
  display: flex;
}

.layout-aside {
  width: 100px;
  height: 100%;
  background-color: #393d49;
}

.layout-aside {
  width: 120px;
  height: 100%;
  overflow-y: auto;
}

.aside-ul {
  width: 100%;
  height: auto;
  overflow-y: auto;
}

.aside-ul li {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.active {
  background: #eee;
  color: #1abc9c;
}
.aside-ul li a {
  color: #ccc;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
}


</style>

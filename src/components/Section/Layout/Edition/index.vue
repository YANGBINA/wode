<template>
  <div>
        <!-- 版本 -->
        版本
  </div>
</template>

<script>
import { api } from "../../../../common/js/request";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      let data = await api.GET(
        "apis/backstage/treasurebackstage/back/userinfo"
      );
      this.list = data;
     console.log(data);

    }
  }
};
</script>

<style>

</style>

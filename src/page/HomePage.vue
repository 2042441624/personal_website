<template>
  <div class="home">
    <el-row :gutter="5" id="headerContent" type="flex">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <!-- 主体第二行 -->
    <el-row :gutter="5" id="mainContent" type="flex">
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!-- 底部第三行 -->
    <el-row :gutter="5" id="footerContent" type="flex">
      <el-col :xs="12" :sm="6" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home_page",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.home {
  padding: 0.5%;
  height: 100%;
  box-sizing: border-box;
}
.el-row {
  padding-bottom: 20px;
  &:last-child {
    padding-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    width: 100%;
    height: 100%;
  }
}

#headerContent {
  height: 25%;
}

#mainContent {
  height: 50%;
}

#footerContent {
  height: 25%;
}

#headerContent .bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
</style>

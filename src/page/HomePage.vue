<template>
  <div class="home">
    <div v-if="!isimg">
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
    <div id="per_img" v-else>
      <div class="img_footer"><a>我很低端;我脚步不停</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_page",
  data() {
    return {
      isimg: true,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    setTimeout(() => {
      this.isimg = true;
    }, 500);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.img_footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(189, 189, 189);
  text-align: center;
}
.home {
  padding: 0.5%;
  height: 100%;

  box-sizing: border-box;
  display: grid;
  align-items: center;
}
#per_img {
  height: 100%;
  position: relative;
  background-image: url("@/assets/images/个人简历3.19.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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

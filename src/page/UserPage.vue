<template>
  <div class="user">
    <el-row :gutter="5" id="mainContent">
      <el-col :xs="16" :sm="16" :md="4" :lg="18" :xl="18">
        <div class="grid-content bg-purple" v-if="loadedState"></div>
        <div class="grid-content bg-purple" v-else>加载完成</div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="20" :lg="6" :xl="6">
        <div class="grid-content bg-purple" v-if="loadedState"></div>
        <div class="grid-content afterLoading" v-else>
          <div>
            <BorderShadowAnimation
              :nowSecond="nowSecond"
              :nowMinute="nowMinute"
              :nowHour="nowHour"
            ></BorderShadowAnimation>
          </div>
          <!-- 头像以及联系信息 -->
          <div>
            <div id="userPortraitContent">
              <img src="../assets/images/me.jpg" alt="" />
            </div>

            <div
              id="headPortraitContent"
              ref="headPortraitContent"
              style="
                transform: perspective(800px) rotate(10deg) rotateY(-30deg);
                backface-visibility: hidden;
              "
            ></div>
          </div>
          <div>3</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
// 里面的字符可以根据自己的需要进行调整
import moment from "../moment/moment";
import BorderShadowAnimation from "../components/BorderShadowAnimation.vue";
export default {
  name: "user_page",
  components: {
    BorderShadowAnimation,
  },
  data: function () {
    return {
      loadedState: false,
      dateTime: "",
      nowSecond: "",
      nowMinute: "",
      nowHour: "",
    };
  },
  created() {
    this._dateTime = setInterval(() => {
      this.nowSecond = String(moment().second());
      this.nowHour = String(moment().hour());
      this.nowMinute = String(moment().minute());
    }, 1000);
  },
  mounted() {
    let userChart = echarts.init(this.$refs.headPortraitContent);
    let option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 2042441624, name: "QQ" },
            { value: 20000914000, name: "Birth" },
            { value: 18926730109, name: "Phone" },
          ],
        },
      ],
    };
    userChart.setOption(option);
  },
  destroyed() {
    clearInterval(this._dateTime);
  },
};
</script>

<style lang='scss'>
.user {
  padding: 0.5%;
  height: 100%;
  box-sizing: border-box;
}
#mainContent {
  height: 100%;
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

    div {
      position: relative;
      overflow: hidden;
    }
  }
  #headPortraitContent {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99; //适应父级的高度
  }
  #userPortraitContent {
    width: 40%;
    height: 40%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    z-index: 99; //适应父级的高度
  }
  img {
    height: 100%;

    transform: perspective(800px) translateZ(80px) rotate(5deg) rotateY(-15deg);
  }
  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
}
.afterLoading {
  display: flex;
  flex-flow: column nowrap; //竖着排列 不可以换行
  div {
    flex-basis: 40%; //规定初始值
    flex-grow: 1; //分配规定后的剩余空间
  }

  div:first-child {
    flex-basis: 20%;
  }
  div:last-child {
    flex-basis: 30%; //规定初始值
  }
}
</style>
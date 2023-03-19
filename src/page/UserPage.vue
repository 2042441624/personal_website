<template>
  <div class="userpage">
    <el-row :gutter="20" id="mainContent">
      <!--userMainCol主体盒子-->
      <el-col :xs="16" :sm="16" :md="4" :lg="18" id="userMainCol">
        <el-card class="grid-content" v-if="loadedState">
          <el-empty description="加载中"></el-empty>
        </el-card>
        <router-view class="viewTop"></router-view>
      </el-col>
      <!--userAsideCol主体相关盒子-->
      <el-col :xs="8" :sm="8" :md="20" :lg="6" id="userAsideCol">
        <div class="grid-content bg-purple" v-if="loadedState"></div>
        <div class="grid-content afterLoading" v-else>
          <!-- user时间组件 -->
          <el-card class="time_card">
            <BorderShadowAnimation
              :nowSecond="nowSecond"
              :nowMinute="nowMinute"
              :nowHour="nowHour"
            ></BorderShadowAnimation>
          </el-card>

          <!-- 头像以及联系信息 -->
          <div class="userContent">
            <div id="userPortraitContent"></div>
            <div id="headPortraitContent" ref="headPortraitContent"></div>
          </div>
          <!-- userpage走马灯 -->
          <CradComponent class="userNav" :cardContent="cardContent">
            <template slot="center">
              <ul>
                <li>
                  <el-button icon="el-icon-s-custom" el-icon-s-custom
                    >姓名：杨金锐</el-button
                  >
                  <el-button icon="el-icon-sugar" el-icon-s-custom
                    >年龄：22</el-button
                  >
                </li>
                <li>
                  <el-button icon="el-icon-notebook-1" el-icon-s-custom>
                    学历：大专</el-button
                  >
                  <el-button icon="el-icon-male" el-icon-s-custom>
                    性别：男</el-button
                  >
                </li>

                <li>
                  <el-button icon="el-icon-loading" el-icon-s-custom>
                    状态：待业</el-button
                  >
                </li>
                <li>
                  <el-button icon="el-icon-phone-outline" el-icon-s-custom>
                    18926730109</el-button
                  >
                </li>
                <li>
                  <a href="https://beian.miit.gov.cn/" target="_blank"
                    >备案/许可证：</a
                  >
                  <p>
                    <a href="https://beian.miit.gov.cn/" target="_blank"
                      >粤ICP备2023017771号</a
                    >
                  </p>~
                </li>
              </ul></template
            ></CradComponent
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { mapActions } from "vuex";
// 里面的字符可以根据自己的需要进行调整
import moment from "../moment/moment";
import BorderShadowAnimation from "../components/BorderShadowAnimation.vue";
import CradComponent from "../components/CradComponent.vue";
let userChart;
export default {
  name: "user_page",
  components: {
    BorderShadowAnimation,
    CradComponent,
  },

  data: function () {
    return {
      media: 5,
      nowScrollNumber: 0,
      el_carousel_height: "60px",
      showText: false,
      loadedState: false,
      dateTime: "",
      nowSecond: "",
      nowMinute: "",
      nowHour: "",
      cradTitle: "个人信息",

      cardContent: [
        {
          path: "/user/experience",
          title: "技术背景",
        },

        {
          path: "/user/project",
          title: "项目实例",
        },
        {
          path: "/user/technology",
          title: "工作经历",
        },
      ],
    };
  },
  created() {
    this.resizeEcharts();
    if (this.$route.path !== "/user/experience") {
      this.$router.replace({ path: "/user/experience" });
    }

    this._dateTime = setInterval(() => {
      this.nowSecond = String(moment().second());
      this.nowHour = String(moment().hour());
      this.nowMinute = String(moment().minute());
    }, 1000);

    window.addEventListener("resize", () => {
      this.resizeEcharts();
      echarts.getInstanceByDom(this.$refs.headPortraitContent).resize();
    });
  },
  mounted() {
    this.resizeEcharts();
    this.init();
    document
      .getElementById("headPortraitContent")
      .addEventListener("click", () => {
        let text = document.getElementById("headPortraitContent").childNodes[1]
          .childNodes[0].innerText;
        console.log(text);
        if (text.length) {
          let Text = text.split("\n");
          this.$message({
            showClose: true,
            message: `${Text[0]}: ${Text[1]}`,
            type: "success",
          });
        }
      });
  },
  watch: {
    media(o, n) {
      if (o !== n && n !== undefined) {
        this.init();
      }
    },
  },
  methods: {
    ...mapActions(["isAddroute"]),
    toAddroute(item) {
      this.isAddroute(item);
      this.$router.push({
        path: item.path,
      });
    },
    //在初始化页面的时候注册一下
    resizeEcharts() {
      if (window.matchMedia("(max-width: 425px)").matches) {
        this.media = 5;
      } else {
        this.media = 50;
      }
    },
    init() {
      // 初始化canvas
      if (userChart != null && userChart != "" && userChart != undefined) {
        userChart.dispose(); //销毁
      }
      let headPortraitContent = this.$refs.headPortraitContent;
      userChart = echarts.init(headPortraitContent);

      let media = this.media;
      console.log("初始化：" + media);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          itemWidth: media,
          top: "3%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            // 是否填充环形
            radius: ["40%", "70%"],
            avoidLabelOverlap: true,
            // 环形样式
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
            },
            // 中间显示的字体位置
            label: {
              show: false,
              position: "center",
            },
            // 中间显示的字体
            emphasis: {
              label: {
                show: true,
                fontSize: 36,
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
  },
  destroyed() {
    clearInterval(this._dateTime);
  },
};
</script>

<style lang="scss" scoped>
//userpage用户内容盒子初始化
.userpage {
  padding: 0.5%;
  height: 100%;
  box-sizing: border-box;
}
//userpage下的#mainContent行初始化
#mainContent.el-row {
  height: 100%;
  padding-bottom: 20px;
  &:last-child {
    padding-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  //userMainCol主体行初始化
  #userMainCol.el-col {
    // 路由盒子撑开高度
    .viewTop {
      height: 100%;
    }
  }
  //行下面的加载盒子样式
  .el-col .grid-content {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    // 所有内容盒子的初始化
    div {
      position: relative;
      overflow: hidden;
      // ec画布盒子
      #headPortraitContent {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99; //适应父级的高度
      }
      // 头像图片盒子
      #userPortraitContent {
        width: 45%;
        height: 45%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
        z-index: 99; //适应父级的高度
        background-image: url("../assets/images/user.jpg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}
// 主体相关盒子下的盒子排序
#userAsideCol .afterLoading {
  display: flex;
  flex-flow: column nowrap;
  .afterLoading > .el-card {
    flex-basis: 10%;
  }
  .userContent {
    flex-basis: 30%;
  }
  .userNav {
    height: 100%;
    box-sizing: border-box;

    ul {
      padding: 2px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      li {
        display: inline;
        flex-shrink: 1;
      }
    }
  }
}

/*屏幕下于425px触发*/
@media screen and (max-width: 425px) {
  #headPortraitContent {
    font-size: 0.5rem;
  }
  .viewTop {
    margin-top: 0.25rem;
  }

  // 手机屏幕下是竖着排序
  #mainContent {
    display: flex;
    // 竖着倒序排雷
    flex-flow: column-reverse nowrap;
    justify-content: flex-end;
    // 主体盒子
    #userMainCol.el-col:first-child {
      width: 100%;
      height: 70%;
    }

    // 主体相关盒子
    #userAsideCol.el-col:last-child {
      width: 100%;
      height: 30%;
      .afterLoading {
        display: flex;
        flex-flow: column wrap;
        gap: 0;
        .el-card:first-child {
          width: 40%;
          padding: 0;
          flex-basis: 20%;
          /deep/.el-card__body {
            padding: 0.5rem;
          }
        }

        .userContent {
          width: 40%;
          flex-basis: 80%;
        }
        .userNav {
          height: 100%;
          overflow: scroll;
          ul {
            gap: auto;
          }
          li {
            font-size: 14px;
          }
        }
      }
    }
    // userNav深度样式
    /deep/ .el-card.box-card.userNav.is-always-shadow > div.el-card__body {
      padding: 0;
    }
    // time_card深度样式
    /deep/.el-card__body.time_card {
      padding: 0;
    }
    /deep/.el-button {
      padding: 2px;
    }
  }
}
</style>
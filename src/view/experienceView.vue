<template>
  <CradComponent class="maxHeight">
    <template slot="cradHeader">
      <el-card class="app_breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item, index) in $store.state.GlobalRouteArray"
            :key="index"
            :to="{ path: item.path }"
            >{{ item.anotherName }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </el-card>
    </template>
    <template slot="center">
      <div class="container">
        <uechnicalBGCarl
          v-for="cobj in uechnicalBGCarlList"
          :key="cobj.title"
          :crad="cobj"
        ></uechnicalBGCarl>
      </div>
    </template>
  </CradComponent>
</template>
<script>
import CradComponent from "../components/CradComponent.vue";
import uechnicalBGCarl from "../components/user/U_echnicalBGCarl.vue";

export default {
  components: { CradComponent, uechnicalBGCarl },
  props: {},
  data() {
    return {
      cradTitle: "技术背景",
      activeNames: [],
      uechnicalBGCarlList: [
        {
          title: "Html",
          content: ["程度：基本了解", "BFC ,canvas"],
          imgUrl: require("@/assets/images/Html.png"),
        },
        {
          title: "Css",
          content: [],
          imgUrl: require("@/assets/images/Css.png"),
        },
        {
          title: "Javascript",
          content: [],
          imgUrl: require("@/assets/images/Javascript.png"),
        },
        {
          title: "Axios",
          content: [],
          imgUrl: require("@/assets/images/Axios.png"),
        },
        {
          title: "Sass",
          content: ["", "css预处理，变量，块级编程，css函数"],
          imgUrl: require("@/assets/images/Sass.png"),
        },
        {
          title: "",
          content: [
            "",
            "生命周期，双向绑定，计算属性，和属性监听，数据通信，pubsub，$trim,prop,vuex全局数据管理，vuerouter路由",
          ],
          imgUrl: require("@/assets/images/Vue.png"),
        },
        {
          title: "element-ui",
          content: [],
          imgUrl: require("@/assets/images/element-ui.png"),
        },
        {
          title: "Echarts",
          content: [],
          imgUrl: require("@/assets/images/Echarts.png"),
        },
        {
          title: "wechat",
          content: [],
          imgUrl: require("@/assets/images/wechat-logo-mini-program.png"),
        },
        {
          title: "uniapp",
          content: [],
          imgUrl: require("@/assets/images/uniapp.png"),
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // document.styleSheets[0].addRule(
    //   "span::before",
    //   'left:0;top:0;content:"";background:"fff";width:100%;height:50%;position:absolute;border-bottom:1px solid #fff;'
    // );
  },
  mounted() {
    //滚动事件的操作
    let maxHeight = document.querySelector(".maxHeight");
    let app_breadcrumb = document.querySelector(".app_breadcrumb");
    let container = document.querySelector(".container");
    maxHeight.addEventListener("scroll", function () {
      this.nowScrollNumber = maxHeight.scrollTop;
      if (
        maxHeight.scrollTop >=
        container.parentNode.offsetTop - container.offsetTop
      ) {
        app_breadcrumb.style.top = `${maxHeight.scrollTop - 10}px`;
      } else {
        app_breadcrumb.style.top = `0px`;
      }
    });

    //card的操作
    let cardHeros = document.querySelectorAll(".card-Hero");
    // 操作伪类的样式
    let style = document.createElement("style");
    document.head.appendChild(style);
    let sheet = style.sheet;
    let time = 360 / cardHeros.length;
    for (var i = 0; i < cardHeros.length; i++) {
      // 操作伪类延时
      sheet.addRule(
        `.card-Hero:nth-child(${i})::before`,
        `animation-delay: ${time * 10 * i}ms;`,
        0
      );
      cardHeros[i].index = i; // 为第i个li元素添加一个index属性，赋值为i
      cardHeros[i].addEventListener("click", function () {
        // 隐藏不是被点击的crad
        for (let index = 0; index < cardHeros.length; index++) {
          if (index !== this.index) {
            cardHeros[index].classList.remove("card-HeroMax");
            cardHeros[index].children[0].children[0].classList.add("card-visi");
            cardHeros[index].children[0].children[1].classList.add(
              "card-img-center"
            );
          }
          cardHeros[index].children[0].children[0].classList.remove(
            "card-visi"
          );
          cardHeros[index].children[0].children[1].classList.remove(
            "card-img-center"
          );
        }

        // 是否有[触发后toggle]card-HeroMax的样式；没有使用集成class，需要还原加载时候样式
        if (this.classList.toggle("card-HeroMax")) {
          console.log("没有就是显示");
          this.children[0].children[0].style.opacity = 1;
          this.children[0].children[0].style.visibility = "visible";
          this.children[0].children[1].style.width = 25 + "%";
          this.children[0].children[1].style.height = 50 + "%";
          this.children[0].children[1].style.scale = 1;
          this.children[0].children[1].style.transform =
            "translateX(" + 300 + "%)";
        } else {
          this.children[0].children[0].style.opacity = 0;
          this.children[0].children[0].style.visibility = "hidden";
          this.children[0].children[1].style.width = 100 + "%";
          this.children[0].children[1].style.height = 100 + "%";
          this.children[0].children[1].style.scale = 0.5;
          this.children[0].children[1].style.transform =
            "translateX(" + 0 + "%)";
        }
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.maxHeight {
  overflow-y: scroll;
  .app_breadcrumb {
    position: relative;
    z-index: 99999999;
  }
}
.maxHeight::-webkit-scrollbar {
  width: 0.25rem;
  height: 100%;
}
.maxHeight::-webkit-scrollbar-thumb {
  background: linear-gradient(
    to bottom,
    #ffa0d3 0%,
    #d8edd8 0%,
    #d3fad3 0%,
    #f4d596 30%,
    #f0ffc0 64%,
    #92fbfd 100%
  );
}
/deep/ .el-card__body {
  width: 100%;
  height: 100%;
}
.container {
  font-family: "Poppins", sans-serif;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 10px 2%;
}

// 操作性的css
.card-HeroMax {
  min-width: 100%;
  max-height: 200px;
}
.card-visi {
  opacity: 0;
  visibility: hidden;
}
.card-img-center {
  width: 100%;
  height: 100%;
  transform: translateX(0%);
  scale: 0.5;
}
@media screen and (max-width: 425px) {
  .container {
    margin: 0;
    gap: 5% 5px;
  }
  .container .card-Hero {
    border-radius: 5px;
    max-height: 150px;
  }

  .container .card-Hero .content-Hero p {
    -webkit-line-clamp: 5;
  }
  .container .card-Hero .content-Hero .content-show div a {
  }
}
</style>
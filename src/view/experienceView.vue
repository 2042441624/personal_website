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
        <div class="card-Hero">
          <div class="content-Hero clearfix">
            <div class="content-show">
              <h3>Html</h3>
              <div>
                <p>程度：基本了解</p>
                <p>BFC ,canvas</p>
              </div>
              <a href="#">查看日记</a>
            </div>
            <img src="../assets/images/Html.png" />
          </div>
        </div>
        <div class="card-Hero">
          <div class="content-Hero clearfix">
            <div class="content-show">
              <h3>Css</h3>
              <div>
                <p>程度：基本了解</p>
                <p>@media/font适配,flex,定位,动画过渡，canvas</p>
              </div>
              <a href="#">查看日记</a>
            </div>

            <img src="../assets/images/Css.png" />
          </div>
        </div>
        <div class="card-Hero">
          <div class="content-Hero">
            <div class="content-show">
              <h3>Javascript</h3>
              <div>
                <p>程度：基本了解</p>
                <p>原型链,闭包,this,引用类型,数据类型,DOM,BOM,冒泡事件</p>
              </div>
              <a href="#">查看日记</a>
            </div>
            <img src="../assets/images/Javascript.png" />
          </div>
        </div>
      </div>
    </template>
  </CradComponent>
</template>
<script>
import CradComponent from "../components/CradComponent.vue";

export default {
  components: { CradComponent },
  props: {},
  data() {
    return { cradTitle: "技术背景", activeNames: [] };
  },
  watch: {},
  computed: {},
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  created() {},
  mounted() {
    let cardHeros = document.querySelectorAll(".card-Hero");
    for (var i = 0; i < cardHeros.length; i++) {
      cardHeros[i].index = i; // 为第i个li元素添加一个index属性，赋值为i
      cardHeros[i].addEventListener("click", function () {
        console.log(this.index);
        for (let index = 0; index < cardHeros.length; index++) {
          if (index !== this.index) {
            cardHeros[index].classList.remove("card-HeroMax");
            cardHeros[index].children[0].children[0].style.opacity = 0;
            cardHeros[index].children[0].children[0].style.visibility =
              "hidden";
            cardHeros[index].children[0].children[1].style.height = 100 + "%";
            cardHeros[index].children[0].children[1].style.transform =
              "translateX(" + 0 + "%)";
          }
        }
        // content - HeroShow;

        console.log();
        if (this.classList.toggle("card-HeroMax")) {
          console.log("显示了");
          this.children[0].children[0].style.opacity = 1;
          this.children[0].children[0].style.visibility = "visible";
          this.children[0].children[1].style.height = 50 + "%";
          this.children[0].children[1].style.transform =
            "translateX(" + 33 + "%)";
        } else {
          console.log("隐藏了");
          this.children[0].children[0].style.opacity = 0;
          this.children[0].children[0].style.visibility = "hidden";
          this.children[0].children[1].style.height = 100 + "%";
          this.children[0].children[1].style.transform =
            "translateX(" + 0 + "%)";
        }
        // 为第i个li元素添加一个click事件，当元素被点击时，则会在控制台输出索引
      });
    }
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-card__body {
  width: 100%;
  height: 100%;
}

@keyframes slidein {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
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
.container .card-Hero {
  max-width: 32%;
  flex-grow: 1;
  padding: 0.25rem;
  height: 300px;
  background: linear-gradient(89deg, #000, #064c67);
  border-radius: 15px;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.container .card-Hero::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 200%;
  left: 50%;
  top: 50%;
  background: rgb(255, 255, 255);
  transform-origin: left top;
  animation: card-Hero-bg 6s linear infinite;
}
.container .card-Hero:nth-child(1)::before {
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
.container .card-Hero:nth-child(2)::before {
  animation-delay: 1.5s;
}
.container .card-Hero:nth-child(3)::before {
  animation-delay: 0.07s;
}
@keyframes card-Hero-bg {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.container .card-Hero .content-Hero {
  width: 99%;
  height: 99%;
  background-color: #064c67;
  position: relative;
  margin: 0.5%;
  z-index: 99;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: left;

  transition: 0.5s;
}
.container .card-Hero .content-Hero .content-show {
  opacity: 0;
  visibility: hidden;
}
.container .card-Hero .content-Hero img {
  display: block;
  position: absolute;
  transition: 0.5s;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 9;
}

.container .card-Hero .content-Hero h3 {
  max-width: 100%;
  overflow: hidden;
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.container .card-Hero .content-Hero p {
  max-width: 80%;
  font-size: 0.75rem;
  overflow: hidden;
  color: #fff;
  white-space: wrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  text-align: left;
}
.container .card-Hero .content-Hero a {
  width: 80%;
  text-align: center;
  position: relative;
  color: #111;
  background: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
  display: inline;
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

  .card-HeroMax {
    min-width: 100%;
    max-height: 200px;
  }

  .container .card-Hero .content-Hero p {
    -webkit-line-clamp: 5;
  }
}
</style>
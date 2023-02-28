<template>
  <el-card class="box-card">
    <slot name="cradHeader">
      <el-carousel
        height="100px"
        :interval="1500"
        direction="vertical"
        :autoplay="true"
      >
        <el-carousel-item v-for="item in cardContent" :key="item.title">
          <div class="medium" @click="toAddroute(item)">
            <h3>{{ item.title }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 默认面包屑 -->
    </slot>

    <slot name="center"> </slot>
  </el-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  props: {
    cardContent: {
      type: Array,
    },
  },
  data() {
    return {
      el_carousel_height: "60px",
    };
  },
  watch: {},
  computed: {
    // 映射 this.increment() 到 this.$store.dispatch('increment')}
  },
  methods: {
    ...mapActions(["isAddroute"]),
    toAddroute(item) {
      this.isAddroute(item);
      if (this.$route.path !== item.path) {
        this.$router.push({
          path: item.path,
        });
      }
    },
  },
  created() {},
  mounted() {
    // 初始化cradHeader的走马灯按钮大小
    // let carousel__buttons = document.getElementsByClassName(
    //       "el-carousel__button"
    //     );
    //     this.$nextTick(() => {
    //       for (let index = 0; index < carousel__buttons.length; index++) {
    //         const element = carousel__buttons[index];
    //         console.log(element);
    //         element.style.height = "10px";
    //       }
    //     });
  },
};
</script>
<style lang="scss" scoped>
.el-carousel__item > .medium {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-carousel__item h3 {
  position: absolute;
  font-size: 30px;
  line-height: 30px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
@media screen and (max-width: 425px) {
}
</style>
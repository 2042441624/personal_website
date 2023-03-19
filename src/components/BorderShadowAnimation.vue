<template>
  <section>
    <div class="box">
      <div>
        <span>
          {{ nowHour[0] ? (nowHour[1] ? nowHour[0] : "0") : nowHour[0] }}</span
        >
      </div>
      <div>
        <span>{{ nowHour[1] ? nowHour[1] : nowHour[0] }}</span>
      </div>
    </div>
    <div class="box">
      <div>
        {{ nowMinute[0] ? (nowMinute[1] ? nowMinute[0] : "0") : nowMinute[0] }}
      </div>
      <div>{{ nowMinute[1] ? nowMinute[1] : nowMinute[0] }}</div>
    </div>
    <!-- 11 -->
    <div class="box">
      <div>
        {{ nowSecond[0] ? (nowSecond[1] ? nowSecond[0] : "0") : nowSecond[0] }}
      </div>
      <div>{{ nowSecond[1] ? nowSecond[1] : nowSecond[0] }}</div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    nowSecond: {
      type: String,
      default: "00",
      require: true,
    },
    nowMinute: {
      type: String,
      default: "00",
      require: true,
    },
    nowHour: {
      type: String,
      default: "00",
      require: true,
    },
  },
  data() {
    return {};
  },

  watch: {},
  computed: {},
  methods: {
    // 页面窗口高度计算
  },
  created() {},
  mounted() {},
  beforeUpdate() {},
};
</script>
<style lang="scss" scoped>
/* CSS */
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700|Ruthie);
@font-face {
  font-weight: normal;
  font-style: normal;
  font-family: "Gioicons";
  src: url("http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.eot");
  src: url("http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.eot?#iefix")
      format("embedded-opentype"),
    url("http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.woff")
      format("woff"),
    url("http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.ttf")
      format("truetype"),
    url("http://disantimonia.pixub.com/codepen/codropsicons/Gioicons.svg#Gioicons")
      format("svg");
}
section {

}
/*屏幕425px以下*/
@media screen and (max-width: 425px) {
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    font-size: 1rem;
    .box {
      flex: 1;
      display: flex;
      div {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center; /*水平主轴居中*/
        align-items: center; /*垂直交叉轴居中*/
      }
    }
  }
}
/*屏幕425px以上*/
@media screen and (min-width: 425px) {
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      flex: 1;
      display: flex;
      div {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center; /*水平主轴居中*/
        align-items: center; /*垂直交叉轴居中*/
      }
    }
  }
}
</style>
<template>
  <div id="resumeContent">
    <!--  120dpi的时候为1487×2105(像素/英寸)， -->
    <main id="imgContent">
      <img
        id="imgs"
        src="@/assets/images/blue.png"
        @load="Picture_view_center"
      />
      <div id="FormContent">
        <div><img class="resumeImg" :src="this.resmuForm.pictureSrc" /></div>
        <div style="right: 0">
          {{ resmuForm.name }}
        </div>
        <div style="bottom: 0; left: 0">leftBottom</div>
        <div style="bottom: 0; right: 0">RightBottom</div>
      </div>
    </main>
  </div>

  <!-- 个人简历的纸张应选用比较规格化的尺寸大小，一般以复印纸的A4纸张为宜。
  实际的尺寸应该是物理大小是21厘米×29.7厘米，
  简历封面的尺寸至少
  72dpi(像素/英寸)应该是595×842(px)，
  96dpi的时候是794×1123(px)，
  120dpi的时候为1487×2105(像素/英寸)，
  150dpi的时候为1240×1754(像素/英寸)，
  300dpi的时候为2480×3508(像素/英寸)。
  纸张颜色以白纸打印黑字为最佳，米色和浅黄色也可。
  个人简历的排版打印要精心设计，四周必须留出足够的空白。每行之间要有一定的空间便于人们阅读。 -->
</template>

<script>
import $ from "jquery";
import { distinguishFacility } from "@/utility/viewport/viewport.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      scale: 0,
      resmuForm: { pictureSrc: "" },
    };
  },
  watch: {},
  computed: {},
  methods: {
    Picture_view_center() {
      let imgW = $("#imgs").width();
      let imgH = $("#imgs").height();
      let viewW = $("#resumeContent").width();
      let viewH = $("#resumeContent").height();
      let scale;
      //distinguishFacility判断设备视口?【手机以宽为基准】- (缩小一点):【pc以高为基准】- (缩小一点)
      scale = distinguishFacility()
        ? viewW / imgW - 0.005
        : viewH / imgH - 0.005;
      console.log(this.scale);
      this.scale = scale;
      console.log(this.scale);
      $("#imgContent").css("font-size", `50px`);
      //初始化简历模板option设置
      if (scale < 1) {
        $("#imgContent").css("transform", `scale(${scale})`);
        $(".resumeImg")
          .eq(0)
          .css("width", `${$(".resumeImg").width() * scale}px`);
      }

      // $("#resumeContent").scrollLeft(
      //   imgW / 2 -
      //     $("#imgs").width() * (scale / 2) -
      //     (viewW - $("#imgs").width() * scale) / 2
      // );
      // $("#resumeContent").scrollTop(
      //   imgH / 2 -
      //     $("#imgs").height() * (scale / 2) -
      //     (viewH - $("#imgs").height() * scale) / 2
      // );
      // $("#resumeContent").css("overflow", `hidden`);
    },
  },
  created() {
    this.resmuForm = this.$route.query.form
      ? JSON.parse(this.$route.query.form)
      : sessionStorage.getItem("myresumeform")
      ? JSON.parse(sessionStorage.getItem("myresumeform"))
      : {};

    this.$route.query.form
      ? (this.form = sessionStorage.setItem(
          "myresumeform",
          this.$route.query.form
        ))
      : {};
    console.log(this.resmuForm);
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
#resumeContent {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
  }
  #imgContent {
    position: relative;
    #FormContent {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      div {
        position: absolute;
      }
    }
  }
}
</style>
<template>
  <div id="resumeContent">
    <div id="Sdiv">
      <h3 style="background: red; position: absolute">leftTop</h3>
      <h3 style="background: red; position: absolute; right: 0">rightTop</h3>
      <h3 style="background: red; position: absolute; bottom: 0">leftBottom</h3>
      <h3 style="background: red; position: absolute; right: 0; bottom: 0">
        rightBottom
      </h3>
      <!--  120dpi的时候为1487×2105(像素/英寸)， -->
      <img
        id="imgs"
        src="@/assets/images/简历蓝色.png"
        @load="Picture_view_center"
      />
    </div>
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
    return {};
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
        : viewH / imgH - 0.03;
      console.log(scale);
      //初始化简历模板option设置
      $("#Sdiv").css("transform", `scale(${scale})`);
      $("#resumeContent").scrollLeft(
        imgW / 2 -
          $("#Sdiv").width() * (scale / 2) -
          (viewW - $("#Sdiv").width() * scale) / 2
      );
      $("#resumeContent").scrollTop(
        imgH / 2 -
          $("#Sdiv").height() * (scale / 2) -
          (viewH - $("#Sdiv").height() * scale) / 2
      );
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
#resumeContent {
  height: 100%;
  overflow: scroll;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  #Sdiv {
    position: relative;
    display: inline-block;
  }
  #Sdiv::before,
  #Sdiv::after {
    content: " ";
    display: block;
    clear: both;
  }
}
</style>
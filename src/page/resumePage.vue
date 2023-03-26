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
        <el-col :xs="8">
          <el-row type="flex"
            ><img class="resumeImg" :src="this.srcurl"
          /></el-row>
          <el-row>
            <div v-show="!checkState">{{ resmuForm.name }}</div>
            <el-input
              type="text"
              v-model="resmuForm.name"
              v-show="checkState"
            />
          </el-row>

          <el-row>
            <span>求职意向:</span>
            <inputcontent
              v-for="(o, index) in resmuForm.occupation"
              :key="index"
              :inputCcontent="o"
              @setFormAtt="childSetFormAtt($event, 'occupation', index)"
            ></inputcontent>
          </el-row>
          <el-row>个人信息</el-row>
          <el-row
            >出生年月：
            <el-input
              v-show="checkState"
              type="text"
              v-model="resmuForm.birthday"
            /><span v-show="!checkState">{{ resmuForm.birthday }}</span></el-row
          >
          <el-row
            >现住地址：
            <el-input
              type="text"
              v-model="resmuForm.address"
              v-show="checkState"
            />
            <div v-show="!checkState">{{ resmuForm.address }}</div>
          </el-row>
          <el-row
            >最高学历：
            <el-input
              type="text"
              v-model="resmuForm.education"
              v-show="checkState"
            />
            <div v-show="!checkState">{{ resmuForm.education }}</div></el-row
          >
          <el-row
            >毕业学校：
            <el-input
              type="text"
              v-model="resmuForm.school"
              v-show="checkState"
            />
            <div v-show="!checkState">{{ resmuForm.school }}</div></el-row
          >
          <el-row
            >性别：<inputcontent :inputCcontent="resmuForm.sex"></inputcontent>
          </el-row>
          <el-row
            >联系方式：
            <div v-for="(contact, index) in resmuForm.contact" :key="index">
              <div v-if="contact.ischecked">
                <el-input
                  type="text"
                  v-model="contact.content"
                  v-show="checkState"
                />
                {{ contact.title }}

                <div v-show="!checkState">
                  {{ contact.content }}
                </div>
              </div>
            </div>
          </el-row>
        </el-col>
        <el-col :xs="16">
          <div>leftBottom</div>
          <div>RightBottom</div></el-col
        >
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
import inputcontent from "@/components/Input.vue";
export default {
  components: {
    inputcontent,
  },
  props: {},
  data() {
    return {
      scale: 0,
      checkState: false,
      resmuForm: {},
    };
  },
  watch: {},
  computed: {
    srcurl() {
      return this.resmuForm.pictureSrc ? this.resmuForm.pictureSrc : "";
    },
  },
  methods: {
    Picture_view_center() {
      let imgW = $("#imgs").width();
      let imgH = $("#imgs").height();
      let viewW = $("#resumeContent").width();
      let viewH = $("#resumeContent").height();
      let scale;
      //distinguishFacility判断设备视口?【手机以宽为基准】- (缩小一点):【pc以高为基准】- (缩小一点)
      if (distinguishFacility()) {
        scale = viewW / imgW - 0.005;
        $("#imgContent").css("font-size", `25px`);
      } else {
        scale = viewH / imgH - 0.005;
        $("#imgContent").css("font-size", `50px`);
      }

      this.scale = scale;

      //初始化简历模板option设置
      if (scale < 1) {
        $("#imgContent").css("transform", `scale(${scale})`);
        $(".resumeImg")
          .eq(0)
          .css("width", `${$(".resumeImg").width() * scale}px`);
      }
    },
    childSetFormAtt(e, ...agrs) {
      // 第一个参数子集传来的value，第二个参数string当前的属性，第三个索引
      this.resmuForm[[...agrs][0]][[...agrs][1]] = e;
      this.$route.query.form = "";
      sessionStorage.removeItem("myresumeform");
      sessionStorage.setItem("myresumeform", JSON.stringify(this.resmuForm));
    },
  },
  created() {
    // 判断刷新

    this.resmuForm = sessionStorage.getItem("myresumeform")
      ? JSON.parse(sessionStorage.getItem("myresumeform"))
      : this.$route.query.form
      ? JSON.parse(this.$route.query.form)
      : {};
    this.$nextTick(() => {
      this.$route.query.form = "";
    });
    console.log(this.resmuForm);
  },
  destroyed() {
    //不删除see的form，等去到模板再删
    this.$route.query.form = "";
  },
  mounted() {},
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
        position: relative;
        display: inline-block;
        .el-row {
          display: block;
        }
      }
    }
  }
}
</style>
<template>
  <el-form-item
    class="newLabel"
    style="display: block; width: 100%; padding-right: 10px"
  >
    <div
      style="margin-bottom: 10px; display: flex; justify-content: space-between"
    >
      <span slot="label">
        <!-- 用这个为标识 -->
        <span>{{ labletitle.split("_")[0] }}</span>
        <el-tooltip class="item" effect="light" placement="right-start">
          <span slot="content"
            ><!--slot-->
            <span v-for="item in 10" :key="item">{{ item }}<br /></span>
          </span>
          <i class="el-icon-question" /><!--小问号提示-->
        </el-tooltip>
      </span>
      <div>经历时间</div>
      <div style="float: right">
        <el-button type="primary" size="mini">创建大标签</el-button>
        <el-button type="primary" size="mini">删除大标签</el-button>
      </div>
    </div>
    <main>
      <!-- 输入部分 -->
      <el-row class="inner">
        <el-col :sm="4" :xs="4"
          ><el-input
            type="textarea"
            style="display: inline"
            placeholder="你的标签"
            v-model="ItemInput.fInput"
            class="fInput"
            @blur="setInput($event)"
          ></el-input>
        </el-col>
        <el-col :sm="16" :xs="16">
          <el-input
            type="textarea"
            v-model="ItemInput.lInput"
            placeholder="你的标签概述"
            class="lInput"
            @blur="setInput($event)"
          ></el-input>
          <!-- @blur="setLInput($event)" -->
        </el-col>
        <!-- //按钮部分 -->
        <el-col :sm="4" :xs="4">
          <el-row style="width: 100%; display: block; height: 100%">
            <el-col :sm="12" :xs="12">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                circle
                class="createdItem"
                @click.stop="createdInputItem($event)"
              ></el-button>
            </el-col>
            <el-col :sm="12" :xs="12">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                class="delectItem"
                circle
                @click.stop="delectInputItem($event)"
              ></el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </main>
  </el-form-item>
</template>

<script>
import $ from "jquery";
import { getparent } from "@/utility/viewport/DOMcorrelation.js";
export default {
  name: "newLabel",
  components: {},
  props: {
    ExperiencerelatedTitle: {
      type: String,
    },
  },
  data() {
    return {
      labletitle: this.ExperiencerelatedTitle,
      formItem: this.relevantInformationList,
      ItemInput: {
        fInput: "",
        lInput: "",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 新建大标签
    handleEdit() {},
    // 删除大标签
    handleDelete() {},
    // 新建输入
    createdInputItem(event) {
      event.stopPropagation();
      let eventParent = $(event.target).closest("main");
      $(eventParent).append(
        `<div data-v-15bc4f64="" class="inner el-row"><div data-v-15bc4f64="" class="el-col el-col-24 el-col-xs-4 el-col-sm-4"><div data-v-15bc4f64="" class="fInput el-textarea" style="display: inline;"><textarea autocomplete="off" placeholder="你的标签" class="el-textarea__inner" style="min-height: 32.1429px;"></textarea><!----></div></div><div data-v-15bc4f64="" class="el-col el-col-24 el-col-xs-16 el-col-sm-16"><div data-v-15bc4f64="" class="lInput el-textarea"><textarea autocomplete="off" placeholder="你的标签概述" class="el-textarea__inner" style="min-height: 32.1429px;"></textarea><!----></div></div><div data-v-15bc4f64="" class="el-col el-col-24 el-col-xs-4 el-col-sm-4"><div data-v-15bc4f64="" class="el-row" style="width: 100%; display: block; height: 100%;"><div data-v-15bc4f64="" class="el-col el-col-24 el-col-xs-12 el-col-sm-12"><button data-v-15bc4f64="" type="button" class="el-button createdItem el-button--primary el-button--mini is-circle"><!----><i class="el-icon-edit"></i><!----></button></div><div data-v-15bc4f64="" class="el-col el-col-24 el-col-xs-12 el-col-sm-12"><button data-v-15bc4f64="" type="button" class="el-button delectItem el-button--danger el-button--mini is-circle"><!----><i class="el-icon-delete"></i><!----></button></div></div></div></div>`
      );
      //获取新建的inner
      let newInner = eventParent.children().eq(-1);
      //获取新建创建按钮并且绑定新建事件
      let newCreatButton = newInner
        .children()
        .eq(-1)
        .children()
        .find(".createdItem");
      $(newCreatButton).on("click", this.createdInputItem);
      // 获取删除按钮并且绑定删除事件
      let newDeleButton = newInner
        .children()
        .eq(-1)
        .children()
        .find(".delectItem");
      $(newDeleButton).on("click", this.delectInputItem);
      // 获取头部Input并且绑定失去焦点事件
      let newFInput = newInner.children().eq(0).find(".el-textarea__inner");
      $(newFInput).on("blur", this.setInput);
      console.log(newFInput);
      // 获取尾部部Input并且绑定失去焦点事件
      let newLInput = newInner.children().eq(1).find(".el-textarea__inner");
      console.log(newLInput);
      $(newLInput).on("blur", this.setInput);
      //父级添加对应的对象暂存区
      this.resInnerObj();
    },
    // 删除输入
    delectInputItem(event) {
      console.log(event);
      event.stopPropagation();
      let eventParent = getparent(event.target, ".inner");
      console.log(eventParent);
      $(eventParent).remove();
    },
    // 封装获取当前main的inner
    getMainIndex() {
      let innerInMain_Index = 0;
      if (!event.target.value) {
        return;
      }
      let innerList = [...$(event.target).closest("main").children()];

      innerList.forEach((item, index) => {
        if (item === [...$(event.target).closest(".inner")][0]) {
          innerInMain_Index = index;
        }
      });
      return innerInMain_Index;
    },
    // 写入INPUT标签
    setInput(event) {
      // 标签main个iner
      if (!event.target.value) {
        return;
      }
      let innerList = [...$(event.target).closest("main").children()];
      let innerInMain_Index = 0;
      innerList.forEach((item, index) => {
        if (item === [...$(event.target).closest(".inner")][0]) {
          innerInMain_Index = index;
        }
      });
      // 判断当前的item的哪个input
      let nowInput = $(event.target).parent(".fInput").length;
      console.log(nowInput);
      let newItemInput = nowInput ? "fInput" : "lInput";
      let inputValue = event.target.value;
      // 发送数据到父级组件
      this.$emit("setInput", [
        { index: innerInMain_Index, inputkey: newItemInput, inputValue },
        this.labletitle,
      ]);
    },
    // 父级添加响应的对象进行赋值
    resInnerObj() {
      this.$emit("resInnerObj", this.labletitle);
    },
  },

  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
main {
  .inner {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
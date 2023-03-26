<template>
  <div class="InputContent">
    <el-row style="padding: 10px; margin-bottom: 20px"
      ><div v-show="!inputState" @click.self="handlShow">
        {{ showcontent }}
      </div>
      <el-input
        type="text"
        v-model="showcontent"
        v-show="inputState"
        @click.native="handlShow"
        @blur.capture="nodeInput($event)"
        @keyup.enter.native="nodeInput($event)"
    /></el-row>
    <el-row><slot name="main"></slot></el-row>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "inputContent",

  components: {},
  props: {
    inputCcontent: {
      type: String,
      require: true,
    },
  },
  data() {
    return { inputState: false, showcontent: this.inputCcontent };
  },
  watch: {
    // inputState: {
    //   handler(newV, oldV) {
    //     console.log(newV, oldV);
    //     if (newV) {
    //       this.$refs.InputF.focus();
    //     }
    //   },
    // },
  },
  computed: {},
  methods: {
    handlShow(e) {
      this.inputState = !this.inputState;
      if (this.inputState) {
        this.$nextTick(() => {
          $(e.target)
            .parent()
            .children()
            .eq(1)
            .find(".el-input__inner")
            .focus();
          $(e.target)
            .parent()
            .children()
            .eq(1)
            .find(".el-input__inner")
            .select();
        });
        this.$emit("setFormAtt", e.target.value);
      }
    },
    nodeInput(e) {
      this.inputState = false;
      this.$emit("setFormAtt", e.target.value);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.InputContent {
  display: inline-flex;
  span {
    display: inline-block;
  }
}
</style>
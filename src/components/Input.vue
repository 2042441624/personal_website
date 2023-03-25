<template>
  <div class="InputContent" @click="handlShow">
    <span v-show="!inputState">{{ showcontent }}</span>
    <el-input
      type="text"
      v-model="showcontent"
      v-show="inputState"
      @blur="nodeInput($event)"
      @keyup.enter.native="nodeInput($event)"
    />
  </div>
</template>

<script>
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
    handlShow() {
      this.inputState = !this.inputState;
      const allInput = document.getElementsByTagName("input");
      [...allInput].forEach((item) => {
        if (item.value === this.showcontent) {
          this.$nextTick(() => {
            item.focus();
          });
        }
        item.blur();
      });
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
<template>
  <div id="bio" v-loading.fullscreen.lock="fullscreenLoading">
    <div id="per_img">
      <div class="img_footer"><a>我很低端;我脚步不停</a></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      fullscreenLoading: true,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    setTimeout(() => {
      this.fullscreenLoading = false;
      this.isimg = true;
    }, 1500);
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#bio {
  padding: 0.5%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  align-items: center;
}
#per_img {
  height: 100%;
  position: relative;
  background-image: url("@/assets/images/mybio3_27.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.img_footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(189, 189, 189);
  text-align: center;
}
</style>
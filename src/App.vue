<template>
  <div id="app">


    <div class="app_router_view"><router-view></router-view></div>
    <div class="bottom-navigation"><bottom-navigation></bottom-navigation></div>
  </div>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation";
export default {
  name: "App",
  components: {
    BottomNavigation,
  },
  data() {
    return {};
  },
  created() {

  },
  mounted() {},
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
div.el-card__body {
  padding: 10px;
}
div.el-breadcrumb {
  font-size: 1rem;
  line-height: 1rem;
}
.app_router_view {
  height: 100%;
  overflow: hidden;
}
.bottom-navigation {
  position: relative;
  flex-basis: 80px;
  border-radius: 10px;
}

@media screen and (min-width: 1080px) {
  div.bottom-navigation {
    position: fixed;
    max-height: 80px;
    bottom: 400px;
    transform-origin: left bottom;
    transform: rotate(90deg) translateY(80px);
    transition: 1s;
  }
  div.bottom-navigation:hover {
    max-height: 80px;
    transform: rotate(90deg) translateY(0px);
  }
}
</style>


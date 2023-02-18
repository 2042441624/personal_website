<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HomePage from "./components/HomePage.vue";
// import UserPage from "./page/UserPage.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    // UserPage,
  },
  created() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>

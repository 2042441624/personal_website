<template>
  <div class="tab">
    <div class="menuToggle"><div></div></div>
    <div class="circularbg1"></div>
    <div class="circularbg2"></div>
    <div class="circular">
      <ul class="circle">
        <li>
          <!-- 个人简历icon -->
          <router-link :to="{name:'mybio'}"
            ><ion-icon name="id-card-sharp"></ion-icon
          ></router-link>
        </li>
        <!-- 简历模板 -->
        <li>
          <router-link :to="{name:'resume'}"
            ><ion-icon name="folder-sharp"></ion-icon
          ></router-link>
        </li>
        <!-- 开发页面icon -->
        <li>
          <router-link :to="{name:'app'}"
            ><ion-icon name="apps"></ion-icon>
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/home"><ion-icon name="home"></ion-icon></router-link>
      </li>
      <li></li>
      <li>
        <router-link to="/user"
          ><ion-icon name="person"></ion-icon
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    const menuToggle = document.querySelector(".menuToggle");
    const tab = document.querySelector(".tab");
    menuToggle.onclick = function () {
      tab.classList.toggle("active");
    };
  },
};
</script>
<style lang="scss" scoped>
.tab {
  position: relative;
  min-width: 100%;
  height: 80px;
  z-index: 1;
  user-select: none;
}

.tab .menuToggle {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 10px;
  left: 50%;
  background-color: #ff3b7e;
  z-index: 1;
  border-radius: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: 1s ease-in-out;
  div {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 30px;
    vertical-align: middle;
    background: #fff;
  }
}

.tab.active .menuToggle {
  transform: translateX(-50%) rotate(225deg);
}

.tab .circular,
.tab .circularbg1,
.tab .circularbg2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 80px;
  background-color: #fff;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  transform-origin: top center;
  transition: 1s ease-in-out;
}

.tab .circularbg1 {
  background-color: #8bc34a;
  transition: 0.6s ease-in-out;
  transition-delay: 0.4s;
}

.tab .circularbg2 {
  background-color: #ffeb3b;
  transition: 0.8s ease-in-out;
  transition-delay: 0.2s;
}

.tab.active .circular,
.tab.active .circularbg1,
.tab.active .circularbg2 {
  transform: translateX(-50%) rotate(180deg);
}

.tab.active .circularbg1,
.tab.active .circularbg2 {
  transition-delay: 0s;
}
.tab ul.circle,
.tab > ul.menu {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.tab ul.circle li {
  list-style: none;
  display: flex;
  position: absolute;
  cursor: pointer;
}

.tab ul.circle li:nth-child(1) {
  transform: translate(50px, -15px);
}

.tab ul.circle li:nth-child(2) {
  transform: translate(0, 15px);
}

.tab ul.circle li:nth-child(3) {
  transform: translate(-50px, -15px);
}

.tab ul.circle li ion-icon {
  transform: rotate(180deg);
  font-size: 1.25em;
  color: #bbb;
  pointer-events: none;
}

.tab ul.circle li:hover ion-icon {
  color: #ff3b7e;
}

.tab ul.menu {
  background-color: #fff;
  border-radius: 10px;

  box-shadow: 0 -15px 25px rgba(0, 0, 0, 0.1);
}

.tab ul.menu li {
  flex: 1;
  list-style: none;
  text-align: center;
}

.tab ul.menu li ion-icon {
  font-size: 1.5em;
  color: #bbb;
  pointer-events: none;
}

.tab ul.menu li:hover ion-icon {
  color: #2196f3;
}
@media screen and (min-width: 1080px) {
  .tab > ul.menu {
    width: 400px;
    transform: translateX(-50%);
  }
}
</style>

<template>
  <div class="tab">
    <div class="menuToggle">+</div>
    <div class="circularbg1"></div>
    <div class="circularbg2"></div>
    <div class="circular">
      <ul class="circle">
        <li>
          <a href="#"><ion-icon name="camera-outline"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="qr-code-outline"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="videocam-outline"></ion-icon></a>
        </li>
      </ul>
    </div>
    <ul class="menu">
      <li>
        <a href="#"><ion-icon name="home"></ion-icon></a>
      </li>
      <li></li>
      <li>
        <a href="#"><ion-icon name="person"></ion-icon></a>
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
    let menuToggle = document.querySelector(".menuToggle");
    let tab = document.querySelector(".tab");
    menuToggle.onclick = function () {
      tab.classList.toggle("active");
    };
  },
};
</script>
<style lang="scss" scoped>
div.tab {
  position: relative;
  width: 100%;
  height: 80px;
  z-index: 1;
  user-select: none;
  border-radius: 15px;
  background-color: #ff3b7e;
}

.tab .menuToggle {
  position: absolute;
  width: 60px;
  height: 60px;
  top: -30px;
  left: 50%;
  background-color: #ff3b7e;
  z-index: 1;
  border-radius: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 2.5em;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  transition: 1s ease-in-out;
  line-height: 60px;
}

.tab.active .menuToggle {
  transform: translateX(-50%) rotate(180deg);
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
.tab ul.circle {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
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
  position: relative;
  width: 100%;
  padding: 0 10px;
  inset: 0;
  background-color: #fff;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
  box-shadow: 0 -15px 25px rgba(0, 0, 0, 0.1);
}

.tab ul.menu li {
  list-style: none;
}

.tab ul.menu li ion-icon {
  font-size: 1.5em;
  color: #bbb;
  pointer-events: none;
}

.tab ul.menu li:hover ion-icon {
  color: #2196f3;
}
</style>
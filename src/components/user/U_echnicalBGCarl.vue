<template>
  <div class="card-Hero">
    <div class="content-Hero clearfix">
      <div class="content-show" style="">
        <h3>cradObj.title</h3>
        <div>
          <p>{{ cradObj.content[0] }}</p>
          <p>{{ cradObj.content[1] }}</p>
        </div>
        <div><a href="#" style="display: inline">查看日记</a></div>
      </div>
      <img :src="cradObj.imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    crad: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      cradObj: this.crad,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.card-Hero {
  max-width: 32%;
  flex-grow: 1;
  padding: 0.25rem;
  height: 300px;
  background: rgba(#eeeeee, 0.3);
  border-radius: 15px;
  transition: 0.7s;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  .content-Hero {
    width: 99%;
    height: 99%;
    background-color: rgb(255, 252, 238);
    position: relative;
    margin: 0.5%;
    z-index: 99;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: left;
    color: #111;
    transition: 0.5s;
    img {
      display: block;
      position: absolute;
      transition: 0.5s;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: 9;
      scale: 0.5;
    }
    h3 {
      max-width: 100%;
      overflow: hidden;

      text-transform: uppercase;
      font-size: 1.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      max-width: 80%;
      font-size: 0.75rem;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      text-align: left;
    }
    a {
      width: 80%;
      text-align: center;
      position: relative;
      color: #111;
      background: #fff;
      padding: 10px 20px;
      margin-top: 10px;
      text-decoration: none;
      font-weight: 700;
      border-radius: 5px;
      display: inline-block;
    }
    .content-show {
      opacity: 0;
      visibility: hidden;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: left;
    }
  }
}
.card-Hero::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 200%;
  left: 50%;
  top: 50%;
  background: linear-gradient(
    to right,
    #ffa0d3 0%,
    #d8edd8 0%,
    #d3fad3 0%,
    #f4d596 30%,
    #f0ffc0 64%,
    #92fbfd 100%
  );
  transform-origin: left top;
  animation: card-Hero-bg 6s linear infinite;
}
@media screen and (max-width: 425px) {
  .container {
    margin: 0;
    gap: 5% 5px;
  }
  .container .card-Hero {
    border-radius: 5px;
    max-height: 150px;
  }

  .card-HeroMax {
    min-width: 100%;
    max-height: 200px;
  }

  .container .card-Hero .content-Hero p {
    -webkit-line-clamp: 5;
  }
  .container .card-Hero .content-Hero .content-show > div > a {
    padding: 5px;
    font-size: 0.5rem;
  }
}
</style>
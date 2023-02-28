<template>
  <CradComponent class="maxHeight">
    <template slot="cradHeader">
      <el-card class="app_breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item, index) in $store.state.GlobalRouteArray"
            :key="index"
            :to="{ path: item.path }"
            >{{ item.anotherName }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </el-card>
    </template>
  </CradComponent>
</template>

<script>
import CradComponent from "../components/CradComponent.vue";

export default {
  components: { CradComponent },
  props: {},
  data() {
    return {
      cradTitle: "项目实例",
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
.wrapper {
}
</style>
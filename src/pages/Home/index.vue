<template>
  <div>
    <!-- 使用全局 三级联动组件 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入轮播图组件
import ListContainer from "@/pages/Home/ListContainer";
// 引入今日推荐组件
import Recommend from "@/pages/Home/Recommend";
// 引入排名组件
import Rank from "@/pages/Home/Rank";
// 引入猜你喜欢组件
import Like from "@/pages/Home/Like";
// 引入楼层组件
import Floor from "@/pages/Home/Floor";
// 引入商标组件
import Brand from "@/pages/Home/Brand";

// 获取仓库数据
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
  methods: {},
  mounted() {
    this.$store.dispatch("home/getFloorList");
  },
};
</script>

<style lang="less"></style>

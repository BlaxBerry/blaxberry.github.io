<template>
  <div id="works">
    <!-- title -->
    <Title>
      <h1 slot="title1">Works</h1>
      <h4 slot="title2">作品について</h4>
    </Title>

    <!-- list -->
    <WorkCardsPC :list="list"></WorkCardsPC>

    <!-- 5. Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// api
import {
  // get all works list
  getAllWorkList,
} from "@/api/api";

// components
import Title from "@/components/Title/Title.vue";
import WorkCardsPC from "@/components/Cards/CardWorksPC.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  data() {
    return {
      // works list
      list: [],
    };
  },

  components: {
    // components
    Title,
    WorkCardsPC,
    NavBottom,
  },

  created() {
    // get all skill list
    getAllWorkList.then((res) => {
      this.list = res.data;
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped></style>

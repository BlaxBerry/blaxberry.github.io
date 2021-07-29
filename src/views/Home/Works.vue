<template>
  <div id="home-works">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Works</h1>
      <h4 slot="title2" class="title2">一部の作品</h4>
    </Title>

    <!-- works cards PC-->
    <WorkCardsPC :list="list"></WorkCardsPC>
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
  },

  created() {
    // get all skill list
    getAllWorkList.then((res) => {
      this.list = [res.data[0], res.data[1]];
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped></style>

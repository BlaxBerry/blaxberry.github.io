<template>
  <div id="works">
    <!-- title -->
    <Title>
      <h1 slot="title1">Works</h1>
      <h4 slot="title2">作品について</h4>
    </Title>

    <!-- list -->
    <!-- works cards PC-->
    <WorkCardsPC :list="list"></WorkCardsPC>
    <!-- works cards Mobile-->
    <WorkCardsMobile :list="listMobile"></WorkCardsMobile>

    <!-- 5. Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// api
import {
  // get all PC works list
  getAllWorkList,
  // get all Mobile works list
  getAllWorkMobileList,
} from "@/api/api";

// components
import Title from "@/components/Title/Title.vue";
import WorkCardsPC from "@/components/Cards/CardWorksPC.vue";
import WorkCardsMobile from "@/components/Cards/CardWorkMobile.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  data() {
    return {
      // works list
      list: [],
      // Mobile list
      listMobile: [],
    };
  },

  components: {
    // components
    Title,
    WorkCardsPC,
    WorkCardsMobile,
    NavBottom,
  },

  created() {
    // get all skill list
    getAllWorkList.then((res) => {
      this.list = res.data;
      console.log(this.list);
    });
    // get all Mobile skill list
    getAllWorkMobileList.then((res) => {
      this.listMobile = [res.data[0], res.data[1]];
      console.log(this.listMobile);
    });
  },
};
</script>

<style lang="scss" scoped></style>

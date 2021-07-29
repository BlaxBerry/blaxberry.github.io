<template>
  <div id="works">
    works
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

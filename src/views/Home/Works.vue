<template>
  <div id="home-works">
       works
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

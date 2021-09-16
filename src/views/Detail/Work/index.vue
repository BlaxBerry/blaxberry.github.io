<template>
  <div id="work-detail">
    <v-container>
      <Descs :work="work" />

      <Skills :list="work.techTasks" />

      <Links />
    </v-container>
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
import Descs from "./WorkDesc.vue";
import Skills from "./WorkSkills.vue";
import Links from "./WorkBottomLinks.vue";

export default {
  components: { Descs, Skills, Links },

  data() {
    return {
      // route query
      urlQuery: "",
      // all works list from data
      allWorksList: [],
      // the work model
      work: {},
    };
  },

  methods: {
    init() {
      // 1. get the name of skill in detail page at the beginning
      this.urlQuery = this.$route.query.id;
      // console.log("query id:",this.urlQuery);

      // 2. get all skill list (PC? or Mobile?)
      let type = this.$route.query.type;
      if (type == "pc") {
        // pc work
        getAllWorkList.then((res) => {
          this.allWorksList = res.data;
          // console.log("all:", this.allWorksList);

          // 3. find the work
          this.work = this.allWorksList.find((item) => {
            return item.id == this.urlQuery;
          });
          // console.log(this.work);
        });
      } else if (type == "mobile") {
        // mobile work
        getAllWorkMobileList.then((res) => {
          this.allWorksList = res.data;
          // console.log("all:", this.allWorksList);

          // 3. find the work
          this.work = this.allWorksList.find((item) => {
            return item.id == this.urlQuery;
          });
          console.log(this.work);
        });
      } else {
        this.$router.go(-1);
      }
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="work-detail">
    <v-container>
      <!-- 1. carousel -->
      <Slider :list="work.pics" v-if="work.pics"></Slider>

      <!-- 2. description -->
      <Description
        :name="work.name"
        :desc="work.desc"
        :tags="work.keywords"
        :links="work.links"
        :time="work.time"
        v-if="work.desc"
      ></Description>

      <!-- 3. tech stacks -->
      <TechList :list="work.techTasks" v-if="work.techTasks"></TechList>

      <!-- 4. Function Details -->
      <Functions
        :list="work.function"
        :links="work.links"
        v-if="work.function"
      ></Functions>
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

// mian components
import Slider from "@/views/Detail/Work/Slider.vue";
import Description from "@/views/Detail/Work/Description.vue";
import TechList from "@/views/Detail/Work/TechList.vue";
import Functions from "@/views/Detail/Work/Functions.vue";

export default {
  components: {
    // main components
    Slider,
    Description,
    TechList,
    Functions
  },

  data() {
    return {
      // route query
      urlQuery: "",
      // all works list from data
      allWorksList: [],
      // the work model
      work: {},
      SmoothScrollAnchors: [
        // Description
        {
          name: "Desc",
          anchorID: "detail-work-description",
          icon: "mdi-bug",
        },

        // Tech Stacks
        {
          name: "TechStacks",
          anchorID: "detail-work-techlist",
          icon: "mdi-bug",
        },
        // Function Detail
        {
          name: "Functions",
          anchorID: "detail-work-functions",
          icon: "mdi-bug",
        },

        // Contact
        { name: "Contact", anchorID: "footer", icon: "mdi-hail" },
      ],
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
          console.log("all:", this.allWorksList);

          // 3. find the work
          this.work = this.allWorksList.find((item) => {
            return item.id == this.urlQuery;
          });
          console.log(this.work);
        });
      } else if (type == "mobile") {
        // mobile work
        getAllWorkMobileList.then((res) => {
          this.allWorksList = res.data;
          console.log("all:", this.allWorksList);

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

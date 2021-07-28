<template>
  <div id="work-detail">
    {{ work.name }}
    <!-- 1. carousel -->
    all : {{work.pics?work.pics.length:0}} pics
    <Slider :list="work.pics"></Slider>

    <!-- 2. description -->
    Work Desc
    {{ work.desc}}

    <!-- 3. tech tasks -->

    <!-- 4. Function Details -->

    <!-- 5. footer -->
    <Footer></Footer>

    <!-- 6. Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// api
import {
  // get all works list
  getAllWorkList,
} from "@/api/api";

// mian components
import Slider from "@/views/Detail/Work/Slider.vue";

// components
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // main components
    Slider,
    // components
    Footer,
    NavBottom,
  },

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

      // 2. get all skill list
      getAllWorkList.then((res) => {
        this.allWorksList = res.data;
        console.log("all:", this.allWorksList);

        // 3. find the work
        // this.work =
        this.work = this.allWorksList.find((item) => {
          return item.id == "01";
        });
        console.log(this.work);
      });
    },
  },

  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>

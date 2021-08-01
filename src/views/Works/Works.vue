<template>
  <div id="works" class="pb-15">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Works</h1>
        <h4 slot="title2">作品について</h4>
      </Title>

      <!-- desc -->
      <div class="pa-5">
        <p>
          最初は静的なページから知り始めましたが、その後Ajax技術やフレームワークのReact、Vueを学んで、最近はサーバーやデータベース関連の知識などを日々頑張っており、このような段階的に、独自の練習や開発の成果を残してきました。不足のところも認識していますが、今後は必ず努力し、より良い作品を提供するために、引き続き勉強して行きたいと思います。
        </p>
        <small>
          ＊ 各作品をクリックして、詳細をご確認ください。
        </small>
      </div>

      <!-- works cards PC-->
      <div id="works-pc">
        <Title><h3 slot="title2">PC端末</h3></Title>
        <WorkCardsPC :list="list" class="mt-5"></WorkCardsPC>
      </div>

      <!-- works cards Mobile-->
      <div id="works-mobile">
        <Title><h3 slot="title2">Mobile端末</h3></Title>
        <WorkCardsMobile :list="listMobile" class="mt-5"></WorkCardsMobile>
      </div>
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
import Title from "@/components/Title/Title.vue";
import WorkCardsPC from "@/components/Cards/CardWorksPC.vue";
import WorkCardsMobile from "@/components/Cards/CardWorkMobile.vue";

export default {
  data() {
    return {
      // works list
      list: [],
      // Mobile list
      listMobile: [],
      SmoothScrollAnchors: [
        // works PC
        { name: "PC", anchorID: "works-pc", icon: "mdi-pickaxe" },
        // works Mobile
        { name: "Mobile", anchorID: "works-mobile", icon: "mdi-pickaxe" },
        // Contact
        { name: "Contact", anchorID: "footer", icon: "mdi-hail" },
      ],
    };
  },

  components: {
    // components
    Title,
    WorkCardsPC,
    WorkCardsMobile,
  },

  created() {
    // get all skill list
    getAllWorkList.then((res) => {
      this.list = res.data;
      console.log(this.list);
    });
    // get all Mobile skill list
    getAllWorkMobileList.then((res) => {
      this.listMobile = res.data;
      console.log(this.listMobile);
    });
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

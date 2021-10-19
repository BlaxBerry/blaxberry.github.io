<template>
  <div id="works" class="pb-15">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Works</h1>
        <h4 slot="title2">作品について</h4>
      </Title>

      <!-- desc -->
      <div>
        <p class="text-caption text-sm-body-2 text-md-body-1 px-sm-2 px-md-0">
          フロントからサーバまで、<b>SPA開発、PC/Mobile端末向けのウェブアプリ、SSR/CSRウェブサイト、サーバー開発、デスクトップアプリケーション...</b>色々な開発成果を残してきました。これからポロジェットに携わりながら、作品集を不定期に更新します。
        </p>
        <small class="mb-4">
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

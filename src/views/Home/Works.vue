<template>
  <div id="home-works" class="py-10 pb-15">
    <!-- title -->
    <Title>
      <h1 slot="title1" class="title1">Works</h1>
      <h4 slot="title2" class="title2">一部の作品</h4>
    </Title>

    <!-- desc -->
    <div class="pa-5">
      <p>
        <br />
        SSR・CSR ウェブサイト、SPA、サーバの開発、PC/Mobile端末向けのウェブアプリ、フレームワーク...などを日々頑張っています。
        フロントからサーバまで段階的な勉強を通じて、色々な独自の成果を残してきました。その中に不足なところも認識していますが、今後は必ず努力して改善し、より良い作品を提供するために、引き続き勉強して行きたいと思います。
      </p>
      <small>
        ＊ 各作品をクリックして、詳細をご確認ください。
      </small>
    </div>

    <!-- works cards PC-->
    <WorkCardsPC :list="list"></WorkCardsPC>

    <!-- works cards Mobile-->
    <WorkCardsMobile :list="listMobile"></WorkCardsMobile>

    <!-- to works page -->
    <div class="text-center mt-2 px-10">
      <b>今までの作品集をご確認ください:</b>
      <v-btn
        block
        to="/works"
        class="my-2 cyan darken-2 white--text font-weight-black py-6"
        >More Works</v-btn
      >
    </div>
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
      listMobile: [],
    };
  },

  components: {
    // components
    Title,
    WorkCardsPC,
    WorkCardsMobile,
  },

  created() {
    // get all PC skill list
    getAllWorkList.then((res) => {
      this.list = [res.data[0], res.data[1], res.data[3]];
      console.log(this.list);
    });

    // get all Mobile skill list
    getAllWorkMobileList.then((res) => {
      this.listMobile = [res.data[0], res.data[1], res.data[3]];
      console.log(this.listMobile);
    });
  },
};
</script>

<style lang="scss" scoped></style>

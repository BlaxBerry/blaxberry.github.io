<template>
  <div class="background-pic full-screen-block">
    <div class="cover-mask">
      <v-container class="text-center">
        <!-- title -->
        <Title>
          <h2 slot="first" class="text-en">Thanks for Watching</h2>
          <h5 slot="second" class="text-jp">
            最後までご覧頂き、心より感謝致します
          </h5>
        </Title>

        <!-- content -->
        <div>
          <!-- text -->
          <div
            class="text-jp py-10 pure-text-content text-justify text-sm-center"
          >
            このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
            <br class="d-none d-sm-block" />
            もし何かコメントがありましたら、下記のリンクご利用ください。
            <br class="d-none d-sm-block" />
            開発していくうちに自分の不足も認識しました。今後も必ず深く勉強して改善し、専門性も高め、
            <br class="d-none d-sm-block" />
            一流のエンジニアを目指して、引き続き頑張っていきたいと思います。
          </div>

          <!-- links -->
          <div>
            <v-btn
              v-for="(btn, i) in FOOTER_LINK_BTNS"
              :key="i"
              icon
              dark
              :href="btn.href"
              target="_blank"
              class="mx-2"
            >
              <v-icon large>{{ btn.icon }}</v-icon>
            </v-btn>
          </div>
        </div>
      </v-container>

      <!-- copyright -->
      <div class="copyright text-center py-2">
        <v-card-text class="py-0">
          <!-- <span class="text-subtitle-2 mx-2">2021.12</span> -->
          <h3 class="font-weight-black text-en">
            <small class="font-italic text-jp">Latest Updated 2021.12</small>
            &nbsp;©Chen
          </h3>
        </v-card-text>
      </div>
    </div>
  </div>
</template>

<script>
import FOOTER_LINK_BTNS from "@/lib/Items/footerLinksList";
import Title from "../common/Titles/Titles.vue";
export default {
  components: { Title },
  data: () => ({ FOOTER_LINK_BTNS }),
};
</script>

<style lang="scss" scoped>
.background-pic {
  background: url(../../assets/upload/bgk01.png) center no-repeat;
  background-size: cover;
  height: 100vh !important;
  color: white;
  overflow: hidden;

  // to fix background-attachment: fixed cannot work in iphone
  @media screen and (min-width: 768px) {
    background-attachment: fixed;
  }

  .cover-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .v-divider {
    border-color: grey !important;
  }
}
</style>

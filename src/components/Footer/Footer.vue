<template>
  <v-footer class="cyan darken-2 white--text text-center" padless bottom>
    <v-container>
      <!-- title -->
      <Title>
        <h2 slot="first" class="text-en">Thanks for Watching</h2>
        <h5 slot="second" class="text-jp">
          最後までご覧頂き、心より感謝致します
        </h5>
      </Title>
      <!-- <div class="title">
        <h1 class="text-en">Thanks for Watching</h1>
        <h3 class="text-jp">最後までご覧頂き、心より感謝致します</h3>
        <br />
        <v-divider></v-divider>
      </div> -->

      <!-- content -->
      <v-card-text class="py-5">
        <!-- text -->
        <div class="text-jp pure-text-content text-justify text-sm-center">
          このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
          <br class="d-none d-sm-block" />
          もし何かコメントがありましたら、下記のリンクご利用ください。
          <br class="d-none d-sm-block" />
          開発していくうちに自分の不足も認識しました。今後も必ず深く勉強して改善し、専門性も高め、
          <br class="d-none d-sm-block" />
          一流のエンジニアを目指して、引き続き頑張っていきたいと思います。
        </div>

        <!-- links -->
        <div class="pt-5">
          <v-btn
            v-for="(btn, i) in FOOTER_LINK_BTNS"
            :key="i"
            icon
            large
            dark
            :href="btn.href"
            target="_blank"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </div>
      </v-card-text>

      <!-- copyright -->
      <v-card-text class="py-0">
        <v-divider class="pt-3"></v-divider>
        <!-- <span class="text-subtitle-2 mx-2">2021.12</span> -->
        <span class="font-weight-black text-en">Chen</span>
      </v-card-text>
    </v-container>
  </v-footer>
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
.title {
  margin-bottom: 0;
  h5 {
    margin-bottom: -10px;
  }
}
</style>

<template>
  <div id="profile-topinfo">
    <v-card
      elevation="2"
      outlined
      class="mx-auto pa-5 d-flex justify-center align-center"
      tile
      min-height="300"
    >
      <v-card-text class="pa-5">
        <b
          ><vue-typer
            :text="[
              '中国出身、外国語学部卒業、前職は不動産営業。\n前職でITプログラミングを知り始めてから、日々進化しているIT技術の魅力に深く惹かれました。将来エンジニアとして、より良いユーザ体験やサービスなどを開発して、この社会に貢献し続きたいと思います。その夢を目指して、日々勉強や練習を重ねて頑張っています。',
            ]"
            class="top-text"
            :repeat="0"
            :preTypeDelay="1000"
            :typeDelay="100"
            :preEraseDelay="5000"
            :eraseDelay="2000"
          ></vue-typer
        ></b>
      </v-card-text>
    </v-card>

    <!-- big screen links-->
    <div class="links mt-1 text-center">
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        :color="item.color"
        class="ma-1"
        dark
      >
        <v-icon large>
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/chenjiaxu333",
          color: "blue",
        },
        {
          name: "Github",
          icon: "mdi-github",
          link: "https://github.com/BlaxBerry",
          color: "grey darken-4",
        },
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/jiaxu.chen.96",
          color: "blue darken-4",
        },
        {
          name: "Gmail",
          icon: "mdi-gmail",
          link: "mailto:chenjiaxu333@gmail.com",
          color: "red",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 1.2rem !important;
  background: url(../../assets/upload/bgk02.jpg) center no-repeat;
  background-size: cover;
  .v-card__text {
    width: 100%;
    border-radius: 1rem;
    background-color: rgba(250, 250, 250, 0.7);
  }
}
</style>

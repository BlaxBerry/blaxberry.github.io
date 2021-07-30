<template>
  <div id="profile-topinfo">
    <!-- title -->
    <Title>
      <h1 slot="title1">About Me</h1>
      <h2 slot="title2">自己紹介</h2>
    </Title>

    <v-card
      elevation="2"
      outlined
      width="700"
      class="mx-auto pa-5 d-flex justify-center align-center"
      tile
      min-height="300"
    >
      <v-card-text class="pa-5">
        <b><vue-typer
          :text="[
            '中国出身、外国語学部卒業、前職は不動産営業。\n前職でITプログラミングを知り始めてから、日々進化しているIT技術の魅力に深く惹かれました。将来エンジニアとして、より良いユーザ体験やサービスなどを開発して、この社会に貢献し続きたいと思います。その夢を目指して、日々勉強や練習を重ねて頑張っています。',
          ]"
          class="top-text"
          :repeat="0"
          :preTypeDelay="1000"
          :typeDelay="100"
          :preEraseDelay="5000"
          :eraseDelay="2000"
        ></vue-typer></b>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";

export default {
  components: {
    Title,
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

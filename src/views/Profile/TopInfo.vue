<template>
  <div id="profile-topinfo">
    <v-card
      elevation="2"
      outlined
      width="700"
      class="mx-auto pa-2 d-flex flex-column flex-sm-row justify-center align-center"
      tile
      min-height="300"
    >
      <v-avatar tile size="100">
        <img
          src="https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg"
          lazy-src="@/assets/images/_lazyloading.gif"
          alt="chen"
        />
      </v-avatar>
      <v-card-text class="pa-5">
        <vue-typer
          :text="[
            '中国出身、外国語学部卒業、前職は不動産営業。\n前職でITプログラミングを知り始めてから、日々進化しているIT技術の魅力に深く惹かれました。将来エンジニアとして、より良いユーザ体験やサービスなどを開発して、この社会に貢献し続きたいと思います。その夢を目指して、日々勉強や練習を重ねて頑張っています。',
          ]"
          class="top-text"
          :repeat="0"
          :preTypeDelay="1000"
          :typeDelay="100"
          :preEraseDelay="5000"
          :eraseDelay="2000"
        ></vue-typer>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

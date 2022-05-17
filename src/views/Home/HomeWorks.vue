<template>
  <div class="home-work full-screen-block">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="first" class="text-center text-en">Works</h1>
        <h3 slot="second" class="text-center text-jp">作品集について</h3>
      </Title>

      <!-- text -->
      <p class="text-justify text-sm-center text-jp py-10 pure-text-content">
        フロントからバックエンドまで幅広く練習してきました。
        <br class="d-none d-sm-block" />
        今後もさらなる努力をしてより良い作品を提供して行きたいと思います。
        <br class="d-none d-sm-block" />
        これからポロジェットに携わりながら、作品集を不定期に更新します。
      </p>

      <!-- route change -->
      <div class="d-flex flex-column justify-center align-center text-jp">
        <span>今までの作品集をご確認</span>
        <v-btn class="ma-4" outlined dark color="cyan darken-1" to="/works">
          More
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import Title from "@/components/common/Titles/Titles.vue";
export default {
  components: { Title },
};
</script>

<style lang="scss" scoped>
.home-work {
  background-color: white;
}
</style>

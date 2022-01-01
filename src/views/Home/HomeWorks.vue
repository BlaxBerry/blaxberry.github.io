<template>
  <v-container class="full-screen-block">
    <!-- title -->
    <Title>
      <h1 slot="first" class="text-center text-en">Works</h1>
      <h3 slot="second" class="text-center text-jp">作品集について</h3>
    </Title>

    <!-- text -->
    <p class="text-justify text-sm-center text-jp pure-text-content">
      フロントからバックエンドまで幅広く練習してきました。
      <br class="d-none d-sm-block" />
      今後もさらなる努力をしてより良い作品を提供して行きたいと思います。
    </p>
  </v-container>
</template>

<script>
import Title from "@/components/common/Titles/Titles.vue";
export default {
  components: { Title },
};
</script>

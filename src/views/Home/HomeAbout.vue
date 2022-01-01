<template>
  <v-container class="full-screen-block">
    <!-- title -->
    <Title>
      <h1 slot="first" class="text-center text-en">About This</h1>
      <h3 slot="second" class="text-center text-jp">このサイトについて</h3>
    </Title>

    <!-- text -->
    <p class="text-justify text-sm-center text-jp py-10 pure-text-content">
      ここは Chen のポートフォリオサイトです。
      <br class="d-none d-sm-block" />
      これまでに手がけた作品や、身につけたスキルをまとめています。
      <br class="d-none d-sm-block" />
      このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
    </p>
  </v-container>
</template>

<script>
import Title from "@/components/common/Titles/Titles.vue";
export default {
  components: { Title },
};
</script>

<template>
  <div class="home-skills full-screen-block">
    <div class="cover-mask">
      <v-container>
        <!-- title -->
        <Title>
          <h1 slot="first" class="text-center text-en">Skills</h1>
          <h3 slot="second" class="text-center text-jp">スキルについて</h3>
        </Title>

        <!-- text -->
        <p class="text-justify text-sm-center text-jp py-10 pure-text-content ">
          フロントからバックエンドまで幅広くスキルアップに取り組んできました。
          <br class="d-none d-sm-block" />
          広く浅くではありますが、今後も幅広い領域に挑戦し、オールラウンドに対応できるように頑張りたいと考えています。
        </p>

        <!-- route change -->
        <div class="d-flex flex-column justify-center align-center text-jp">
          <span>全てのスキルをご確認</span>
          <v-btn class="ma-4" outlined color="white" to="/skills">
            More
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Title from "@/components/common/Titles/Titles.vue";
export default {
  components: { Title },
};
</script>

<style lang="scss">
.home-skills {
  color: white;

  .cover-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>

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
        <p class="text-justify text-sm-center text-jp pure-text-content">
          フロントからバックエンドまで幅広くスキルアップに取り組んできました。
          <br class="d-none d-sm-block" />
          広く浅くではありますが、今後も幅広い領域に挑戦し、オールラウンドに対応できるように頑張りたいと考えています。
        </p>
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
  background: url(../../assets/upload/bgk01.png) center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: white;
  overflow: hidden;
  .cover-mask {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .v-divider {
    border-color: grey !important;
  }
}
</style>

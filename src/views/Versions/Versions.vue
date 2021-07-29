<template>
  <div id="versions">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Protofilo Versions</h1>
        <h4 slot="title2">ポートフォリオのバージョンアップ</h4>
      </Title>

      <ul>
        <li>
          4.0: Vue2 + Vue-Cli3 + Vuetify + Sass + Vue-Router + Axios + JSON
        </li>
        <li>3.0: Vue2 + Vue-Cli2 + Vue-Router + Less + JSON</li>
        <li>2.0: jQuery + Bootstrap4 + Webpack</li>
        <li>1.0: jQuery + CSS + Webpack</li>
      </ul>
      So…. What it would be in the next version, maybe by TypeScript and Vite?

      <!-- 5. Nav Bottom -->
      <NavBottom></NavBottom>
    </v-container>
  </div>
</template>

<script>
// components
import NavBottom from "@/components/Nav/NavBottom.vue";
import Title from "@/components/Title/Title.vue";

export default {
  components: {
    // components
    Title,
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

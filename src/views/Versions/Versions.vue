<template>
  <div id="versions">
    <ul>
      <li>4.0: Vue2 + Vue-Cli3 + Vuetify + Sass + Vue-Router + Axios + JSON</li>
      <li>3.0: Vue2 + Vue-Cli2 + Vue-Router + Less + JSON</li>
      <li>2.0: jQuery + Bootstrap4 + Webpack</li>
      <li>1.0: jQuery + CSS + Webpack</li>
    </ul>
    So…. What it would be in the next version, maybe by TypeScript and Vite?
    <!-- 4. footer -->
    <Footer></Footer>

    <!-- 5. Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// components
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // components
    Footer,
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

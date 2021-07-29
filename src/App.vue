<template>
  <v-app>
    <div id="app">
      <!-- Nav Left -->
      <NavLeft></NavLeft>

      <v-container>
        <router-view />
      </v-container>

      <!-- footer -->
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import NavLeft from "@/components/Nav/NavLeft.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    NavLeft,
    Footer,
  },
};
</script>

<style lang="scss">
// common style
@import url("./assets/style/main.scss");
@import url("./assets/style/common.scss");
</style>

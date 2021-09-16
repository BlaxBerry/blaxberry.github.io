<template>
  <v-app>
    <div id="app">
      <!-- Nav to routes -->
      <NavRoutes />

      <!-- Nav for smooth scroll -->
      <!-- <NavScroll :SmoothScrollAnchors="SmoothScrollAnchors"></NavScroll> -->

      <!-- app routes contents -->
      <router-view />

      <!-- footer -->
      <Footer />

      <!-- Bottom -->
      <NavBottom />
    </div>
  </v-app>
</template>

<script>
// common components
import NavBottom from "@/components/Nav/NavBottom.vue";
import NavRoutes from "@/components/Nav/NavRoutes.vue";
// import NavScroll from "@/components/Nav/NavScroll.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    NavBottom,
    NavRoutes,
    // NavScroll,
    Footer,
  },

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>

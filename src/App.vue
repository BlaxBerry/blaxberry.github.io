<template>
  <v-app>
    <div id="app">
      <!-- Nav to routes -->
      <NavRoutes :mainRoutes="mainRoutes"></NavRoutes>

      <!-- Nav for smooth scroll -->
      <!-- <NavScroll :SmoothScrollAnchors="SmoothScrollAnchors"></NavScroll> -->

      <!-- app routes contents -->
      <router-view />

      <!-- footer -->
      <Footer></Footer>

      <!-- Bottom -->
      <NavBottom :mainRoutes="mainRoutes"></NavBottom>
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

      // page routes
      mainRoutes: [
        { name: "Home", icon: "mdi-home", to: "/",color:"teal" },
        { name: "Profile", icon: "mdi-account", to: "/profile",color:"indigo" },
        { name: "Skills", icon: "mdi-cards", to: "/skills" ,color:""},
        { name: "Works", icon: "mdi-rhombus-split", to: "/works",color:"brown" },
      ],

      // contnet id of each page
      SmoothScrollAnchors: [],
    };
  },
};
</script>

<style lang="scss">
// common style
@import url("./assets/style/main.scss");
@import url("./assets/style/common.scss");
</style>

<template>
  <div id="home">
    <!-- 1. about me -->
    <AboutMe></AboutMe>

    <v-container>
      <!-- 2. skills -->
      <Skills></Skills>

      <!-- 3. works -->
      <Works></Works>
    </v-container>
  </div>
</template>

<script>
// mian components
import AboutMe from "@/views/Home/AboutMe.vue";
import Skills from "@/views/Home/Skills.vue";
import Works from "@/views/Home/Works.vue";

export default {
  components: {
    // mian components
    AboutMe,
    Skills,
    Works,
  },

  data() {
    return {
      SmoothScrollAnchors: [
        // AboutMe
        { name: "About Me", anchorID: "home-aboutme", icon: "mdi-ghost" },
        // SKills
        { name: "Skills", anchorID: "home-skills", icon: "mdi-pickaxe" },
        // Works
        { name: "Works", anchorID: "home-works", icon: "mdi-bug" },
        // Contact
        { name: "Contact", anchorID: "footer", icon: "mdi-hail" },
      ],
    };
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

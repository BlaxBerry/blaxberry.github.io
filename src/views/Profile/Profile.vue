<template>
  <div id="profile">
    <v-container>
      <!-- 1. top info -->
      <TopInfo></TopInfo>

      <!-- 2. timeline -->
      <TimeLine></TimeLine>

      <!-- 3. skills  -->
      <Skills></Skills>
    </v-container>
  </div>
</template>

<script>
// mian component
import TopInfo from "@/views/Profile/TopInfo.vue";
import TimeLine from "@/views/Profile/TimeLine.vue";
import Skills from "@/views/Home/Skills.vue";

export default {
  components: {
    // mian components
    TopInfo,
    TimeLine,
    Skills,
  },

  data() {
    return {
      SmoothScrollAnchors: [
        // Top Info
        { name: "About Me", anchorID: "profile-topinfo", icon: "mdi-ghost" },
        // Time Line
        { name: "Experience", anchorID: "profile-timeline", icon: "mdi-bug" },
        // SKills
        { name: "Skills", anchorID: "home-skills", icon: "mdi-pickaxe" },
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

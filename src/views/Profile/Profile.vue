<template>
  <div id="profile">
    Profile
    <!-- 1. top info -->
    <TopInfo></TopInfo>

    <!-- 2. timeline -->
    <TimeLine></TimeLine>

    <!-- 3. skills  -->
    <Skills></Skills>

    <!-- Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// mian component
import TopInfo from "@/views/Profile/TopInfo.vue";
import TimeLine from "@/views/Profile/TimeLine.vue";
import Skills from "@/views/Home/Skills.vue";

// common componoents
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // mian components
    TopInfo,
    TimeLine,
    Skills,
    // common componoents
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

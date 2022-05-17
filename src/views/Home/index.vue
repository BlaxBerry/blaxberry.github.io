<template>
  <div id="home">
    <!-- top background -->
    <HomeTop />

    <!-- about -->
    <HomeAbout />

    <!-- skills -->
    <HomeSkills />

    <!-- works -->
    <HomeWorks />
  </div>
</template>

<script>
// components
import HomeTop from "./HomeTop.vue";
import HomeSkills from "./HomeSkills.vue";
import HomeAbout from "./HomeAbout.vue";
import HomeWorks from "./HomeWorks.vue";

export default {
  components: {
    HomeTop,
    HomeAbout,
    HomeSkills,
    HomeWorks,
  },
};
</script>

<style lang="scss" scoped>
#home {
  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100vh;
    background: url(../../assets/upload/bgk01.png) center no-repeat;
    background-size: cover;
  }
}
</style>

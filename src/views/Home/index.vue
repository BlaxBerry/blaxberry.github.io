<template>
  <div id="home">
    <!-- top background -->
    <div class="top-background-pic full-screen-block">
      <!-- title -->
      <div>
        <h1 class="text-center text-en">Welcome</h1>
        <h2 class="text-center text-en">Chen's Portfolio</h2>
      </div>
    </div>

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
import HomeSkills from "./HomeSkills.vue";
import HomeAbout from "./HomeAbout.vue";
import HomeWorks from "./HomeWorks.vue";

export default {
  components: {
    HomeAbout,
    HomeSkills,
    HomeWorks,
  },
};
</script>

<style lang="scss" scoped>
.top-background-pic {
  background: url(../../assets/upload/bgk01.png) center no-repeat;
  background-size: cover;
  // background-attachment: fixed;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;

  // to fix background-attachment: fixed cannot work in iphone
  @media screen and (min-width: 768px) {
    background-attachment: fixed;
  }
}
</style>

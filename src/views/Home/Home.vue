<template>
  <div id="home">
    <!-- 1.Top -->
    <Top></Top>

    <!-- 2. about me -->
    <AboutMe></AboutMe>

    <!-- 3. skills -->
    <Skills></Skills>

    <!-- footer -->
    <Footer></Footer>

    <!-- Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// mian components
import Top from "@/views/Home/Top.vue";
import AboutMe from "@/views/Home/AboutMe.vue";
import Skills from "@/views/Home/Skills.vue";

// common componoents
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // mian components
    Top,
    AboutMe,
    Skills,
    // common componoents
    Footer,
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="profile">
    Profile

    <!-- 2. timeline -->
    <TimeLine></TimeLine>

    <!-- footer -->
    <Footer></Footer>

    <!-- Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// mian component
import TimeLine from "@/views/Profile/TimeLine.vue";

// common componoents
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // mian components
    TimeLine,
    // common componoents
    Footer,
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

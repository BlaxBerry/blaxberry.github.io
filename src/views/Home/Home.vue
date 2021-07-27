<template>
  <div id="home">



    <v-icon>mdi-account</v-icon>

    <!-- footer -->
    <Footer></Footer>

    <!-- Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue"

export default {
  components: {
    Footer,
    NavBottom,
  },
};
</script>

<style lang="scss" scoped></style>

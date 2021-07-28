<template>
  <v-container>
    <v-carousel>
      <v-carousel-item v-for="(item, index) in list" :key="index">
        <v-img
          :src="item"
          lazy-src="./images/lazy-loading.gif"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss" scoped>
.v-image {
  width: 100vw;
}
</style>

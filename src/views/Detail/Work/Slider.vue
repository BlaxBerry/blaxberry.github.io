<template>
  <v-container>
    <v-carousel>
      <v-carousel-item v-for="(item, index) in list" :key="index">
        <v-img :src="item"></v-img>
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
.v-carousel {
  width: 100vw;
}
.v-image {
  width: 100vw;
}
</style>

<template>
  <v-col v-show="teamwork">
    <!-- title -->
    <h1 class="text-en">What I Have Done ?</h1>
    <!-- <br /> -->

    <!-- contnet -->
    <p
      v-for="(item, index) in teamwork"
      :key="index"
      v-html="item"
      class="text-jp pure-text-content ma-0"
    />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["teamwork"],
};
</script>

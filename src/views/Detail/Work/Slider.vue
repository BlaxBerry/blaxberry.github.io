<template>
  <div id="detail-work-slider">
    <v-carousel show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in list"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="pink" rounded v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-left</v-icon>
          Previous
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="info" rounded v-bind="attrs" v-on="on">
          Next
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

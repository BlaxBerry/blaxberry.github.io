<template>
  <div>
    <!-- xm show -->
    <carousel :perPage="2" class="d-flex d-sm-none">
      <slide v-for="(item, index) in list" :key="index" class="mx-0">
        <v-card class="ma-4 mobile-slide-card">
          <img v-lazy="item.pic" :alt="item.name" />
        </v-card>
      </slide>
    </carousel>
    <!-- sm show -->
    <carousel :perPage="3" class="d-none d-sm-flex d-md-none">
      <slide v-for="(item, index) in list" :key="index" class="mx-0">
        <v-card class="ma-4 mobile-slide-card">
          <img v-lazy="item.pic" :alt="item.name" />
        </v-card>
      </slide>
    </carousel>
    <!-- dm show -->
    <carousel :perPage="4" class="d-none d-md-flex">
      <slide v-for="(item, index) in list" :key="index" class="mx-0">
        <v-card class="ma-4 mobile-slide-card">
          <img v-lazy="item.pic" :alt="item.name" />
        </v-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: () => ({
    model: null,
  }),
};
</script>

<style lang="scss" scoped>
.VueCarousel-pagination {
  margin-top: -2.5rem !important;
}
.VueCarousel-inner {
  align-items: center;
}
</style>

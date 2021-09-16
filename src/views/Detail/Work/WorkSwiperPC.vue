<template>
  <v-card class="py-2 py-md-5 px-7 px-md-10 mb-5">
    <carousel
      :perPage="1"
      :navigationEnabled="true"
      :autoplay="true"
      :autoplayTimeout="4000"
      :paginationSize="10"
      paginationActiveColor="#00BCD4"
    >
      <slide v-for="(item, index) in list" :key="index" class="px-1">
        <img :src="item.pic" />
      </slide>
    </carousel>
  </v-card>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style>
.VueCarousel-pagination {
  margin-top: -3rem;
}
</style>

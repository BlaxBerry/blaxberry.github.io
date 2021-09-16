<template>
  <carousel
    class="px-md-10"
    :perPage="1"
    :autoplay="true"
    :autoplayHoverPause="true"
    :autoplayTimeout="4000"
    :paginationSize="10"
    paginationActiveColor="#00BCD4"
  >
    <slide v-for="(item, index) in list" :key="index" class="px-1">
      <img :src="item.pic" />
    </slide>
  </carousel>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss">
.VueCarousel-pagination {
  margin-top: -2.6rem !important;
}
.VueCarousel-wrapper {
  background-color: #eee;
  .VueCarousel-inner {
    // justify-content: center !important;
    align-items: center !important;
  }
}
</style>

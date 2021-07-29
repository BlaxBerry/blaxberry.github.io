<template>
  <div class="common-title">
    <!-- session title1 主标题-->
    <slot name="title1"></slot>

    <!-- session title2 副标题-->
    <slot name="title2"></slot>

    <!-- <v-divider class="my-2"></v-divider> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.common-title {
  padding-top: 2rem;
  text-align: center;

  // title1 主标题
  h1 {
    font-style: italic;
  }

  // title2 副标题
  //   h4 {

  //   }
}
</style>

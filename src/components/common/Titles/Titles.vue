<template>
  <div class="title">
    <!-- en -->
    <slot name="first"></slot>
    <!-- jp -->
    <slot name="second"></slot>
    <br />
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title {
  padding-top: 5%;
  margin-bottom: 2%;
  text-align: center;
  width: 100%;
}
</style>

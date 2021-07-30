<template>
  <v-bottom-navigation
    dark
    v-model="NavItemClickedDefault"
    absolute
    bottom
    class="d-flex justify-center px-4"
  >
    <v-btn
      v-for="(item, index) in mainRoutes"
      class="mx-0 white--text"
      :key="index"
      :value="item.name"
      :to="item.to"
    >
      <span>{{ item.name }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: ["mainRoutes"],

  data: () => ({
    NavItemClickedDefault: "Contact",
  }),

};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  height: 60px !important;
}
</style>

<template>
  <v-bottom-navigation
    dark
    v-model="value"
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
  data: () => ({
    value: 1,
    mainRoutes: [
      { name: "Home", icon: "mdi-home", to: "/", color: "teal" },
      { name: "Profile", icon: "mdi-account", to: "/profile", color: "indigo" },
      { name: "Skills", icon: "mdi-cards", to: "/skills", color: "" },
      {
        name: "Works",
        icon: "mdi-rhombus-split",
        to: "/works",
        color: "brown",
      },
    ],
  }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  height: 60px !important;
}
</style>

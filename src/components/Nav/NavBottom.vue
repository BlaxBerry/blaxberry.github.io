<template>
  <v-bottom-navigation dark v-model="NavItemClickedDefault" absolute bottom>
   <v-container class="d-flex justify-center pa-0">
      <v-btn
      v-for="(item, index) in NavItems"
      class="mx-4 white--text"
      :key="index"
      :value="item.name"
      @click="click"
    >
      <span>{{ item.name }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
   </v-container>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    NavItems: [
      { name: "About Me", icon: "mdi-ghost", color: "red" },
      { name: "Skills", icon: "mdi-pickaxe", color: "" },
      { name: "Works", icon: "mdi-bug", color: "" },
      { name: "Contact", icon: "mdi-hail", color: "" },
    ],
    NavItemClickedDefault: "Contact",
  }),

  methods: {
    click() {
      // change back to default value "Contact"
      clearTimeout(timer);
      let timer = setTimeout(() => {
        this.NavItemClickedDefault = "Contact";
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  height: 60px!important;
}
</style>

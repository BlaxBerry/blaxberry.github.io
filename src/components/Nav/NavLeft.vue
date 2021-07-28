<template>
  <div class="text-center" id="nav-left">
    <v-menu transition="scroll-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark color="primary" fab v-bind="attrs" v-on="on">
          Nav
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in NavItems" :key="index">
          <v-list-item-title>
            <v-btn fab :to="item.to">
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    NavItems: [
      { Name: "Home", icon: "mdi-home", to: "/" },
      { Name: "Profile", icon: "mdi-account", to: "/profile" },
      { Name: "Skills", icon: "mdi-cards", to: "/skills" },
      { Name: "Works", icon: "mdi-rhombus-split", to: "/works" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
#nav-left {
  position: fixed;
  z-index: 999;
  top: 15px;
  left: 15px;
}
.v-menu__content {
  top: 70px !important;
  left: 0px !important;
  box-shadow: none !important;
  .v-list {
    background-color: transparent !important;
    .v-list-item__title {
      overflow: visible !important;
      box-shadow: none !important;
      padding: 10px 0 !important;
    }
  }
}
</style>

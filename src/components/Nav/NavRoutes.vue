<template>
  <!-- 横行 nav page routes-->
  <div class="text-center nav-row-routes">
    <v-menu transition="slide-x-transition" bottom right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          color="purple"
          class="font-weight-black text-sm-h6"
          fab
          large
          elevation="5"
          v-bind="attrs"
          v-on="on"
        >
          GoTo
        </v-btn>
      </template>

      <v-list
        class="d-md-flex pl-2 pt-14 mt-5 pt-md-0 mt-md-1 pl-md-15 ml-md-5"
        width="400px"
      >
        <v-list-item
          class="px-0 py-1 px-md-2"
          max-width="60"
          v-for="(item, index) in mainRoutes"
          :key="index"
        >
          <v-list-item-title>
            <v-btn fab :to="item.to" elevation="5" color="secondary">
              <v-icon large>{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["mainRoutes"],
};
</script>

<style lang="scss" scoped>
.nav-row-routes {
  position: fixed;
  z-index: 999;
  top: 10px;
  left: 20px;
}
.v-menu__content {
  top: 0.5rem !important;
  left: 1rem !important;
  box-shadow: none !important;
  .v-list {
    background-color: transparent !important;
    box-shadow: none !important;
    .v-list-item {
      box-shadow: none !important;
      .v-list-item__title {
        overflow: visible !important;
        box-shadow: none !important;
      }
    }
  }
}
</style>

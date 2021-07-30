<template>
  <!-- 横行 nav page routes-->
  <div class="text-center nav-row-routes">
    <v-menu transition="slide-x-transition" bottom right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark color="primary" fab large v-bind="attrs" v-on="on">
          Pages
        </v-btn>
      </template>

      <v-list class="d-flex pb-5 ml-10 pl-10 ">
        <v-list-item
          class="px-1"
          v-for="(item, index) in mainRoutes"
          :key="index"
        >
          <v-list-item-title>
            <v-btn fab :to="item.to">
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
    .v-list-item__title {
      overflow: visible !important;
      box-shadow: none !important;
    }
  }
}
</style>

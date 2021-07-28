<template>
  <v-container class="TechList">
    <v-list subheader v-for="(l, index) in list" :key="index">
      <v-list-item class="py-2" v-for="(item, i) in l" :key="i">
        <v-card class="pa-1">
          <v-img
            :src="require(`@/assets/images/${item.pic}`)"
            lazy-src="@/assets/images/_lazyloading.gif"
            max-height="60"
            max-width="60"
          ></v-img>
        </v-card>
        <v-list-item-content class="px-4 d-none d-sm-flex">
          {{ item.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss" scoped>
.TechList {
  display: flex;
  justify-content: space-around;
  .v-list {
    display: flex;
    flex-direction: column;
    justify-content: start !important;
    // background-color: pink;
    width: 30%;
    .v-list-item {
      flex: none;
    }
  }
}
</style>

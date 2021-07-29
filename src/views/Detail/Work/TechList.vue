<template>
  <div id="detail-work-techlist">
    <v-list subheader v-for="(l, index) in list" :key="index">
      <v-list-item
        class="py-2 d-flex flex-column flex-sm-row"
        v-for="(item, i) in l"
        :key="i"
      >
        <v-card class="pa-1">
          <v-img
            :src="require(`@/assets/images/${item.pic}`)"
            lazy-src="@/assets/images/_lazyloading.gif"
            max-height="60"
            max-width="60"
          ></v-img>
        </v-card>
        <v-list-item-content class="px-4 text-no-wrap">
          {{ item.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="scss" scoped>
#detail-work-techlist {
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
      min-height: 0px;
    }
  }
}
</style>

<template>
  <div id="detail-work-techlist">
    <!-- title -->
    <Title>
      <h1 slot="title1">Tech Stacks</h1>
      <h4 slot="title2">テクノロジースタックについて</h4>
    </Title>

    <div class="techt-list mt-5">
      <v-list subheader v-for="(l, index) in list" :key="index">
        <v-list-item
          class="py-2 d-flex flex-column flex-md-row"
          v-for="(item, i) in l"
          :key="i"
        >
          <v-card class="pa-1">
            <v-img
              :src="require(`@/assets/images/${item.pic}`)"
              lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
              max-height="60"
              max-width="60"
              min-width="60"
            ></v-img>
          </v-card>
          <v-list-item-content class="px-4 text-no-wrap">
            {{ item.name }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";

export default {
  props: ["list"],

  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.techt-list {
  display: flex;
  justify-content: center;
  align-items: start;
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

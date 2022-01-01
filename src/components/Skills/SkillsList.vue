<template>
  <v-row class="px-2 d-sm-flex justify-sm-center">
    <v-col
      v-for="item in list"
      :key="item.id"
      class="d-flex child-flex pa-1"
      cols="3"
      sm="1"
      md="1"
      lg="1"
    >
      <v-hover v-slot="{ hover }">
        <Card :hover="hover" :item="item" />
      </v-hover>

      <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-hover v-slot="{ hover }">
            <Card :hover="hover" :on="on" :attrs="attrs" :item="item" />
          </v-hover>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip> -->
    </v-col>
  </v-row>
</template>

<script>
import Card from "./SkillsCard.vue";
export default {
  props: ["list"],
  components: {
    Card,
  },
};
</script>

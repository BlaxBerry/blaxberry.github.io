<template>
  <v-row>
    <v-col
      v-for="item in item.content"
      :key="item.id"
      class="d-flex child-flex"
      :cols="item.type == 'PC' ? 12 : 6"
      :sm="item.type == 'PC' ? 6 : 4"
      :md="item.type == 'PC' ? 6 : 3"
      :lg="item.type == 'PC' ? 4 : 2"
      :xl="item.type == 'PC' ? 3 : 2"
    >
      <v-hover v-slot="{ hover }">
        <Card :hover="hover" :item="item" />
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import Card from "./WorksCard.vue";
export default {
  props: ["item"],
    components: { Card },
};
</script>

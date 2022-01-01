<template>
  <div class="work-card">
    <v-card
      :elevation="
        hover ? ELEVATIONS.CARD_ELEVATION * 2 : ELEVATIONS.CARD_ELEVATION
      "
      :class="{ 'on-hover': hover }"
      @click="goDetailPage(item.id)"
    >
      <!-- pc desktop bar -->
      <DesktopBar v-if="item.type == 'PC'" />

      <!-- skeleton -->
      <v-skeleton-loader v-if="!item" class="mx-auto" type="image" />

      <!-- img -->
      <v-img
        class="lighten-2"
        :src="item.pics[0]"
        :lazy-src="require(`@/assets/images/defaultWorks/${item.fileName}`)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <!-- name -->
    <h3 class="text-center mt-2 text-jp">{{ item.name }}</h3>
  </div>
</template>

<script>
import { ELEVATIONS } from "@/lib/common/commonVariables";
import DesktopBar from "@/components/common/Bar/DesktopBar.vue";

export default {
  components: { DesktopBar },
  props: ["hover", "item"],
  data: () => ({ ELEVATIONS }),
  methods: {
    goDetailPage(id) {
      this.$router.push({
        path: "/detail/work",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

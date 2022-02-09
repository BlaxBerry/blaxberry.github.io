<template>
  <v-card
    :elevation="
      hover ? ELEVATIONS.CARD_ELEVATION * 2 : ELEVATIONS.CARD_ELEVATION
    "
    @click="goDetailPage(item.id)"
  >
    <v-img
      :src="require(`@/assets/svg/${item.fileName}`)"
      aspect-ratio="1"
      class="grey lighten-5"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="cyan lighten-5"
            size="40"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
import { ELEVATIONS } from "../../lib/common/commonVariables";
export default {
  props: ["hover", "item"],
  data: () => ({ ELEVATIONS }),
  methods: {
    goDetailPage(id) {
      // this.$router.push(`/detail/skill/${id}`).catch((err) => {
      //   console.log("skills card go detail page", err);
      // });

      // for github/gitlab
      if (id == "github") {
        window.location.href = "https://github.com/BlaxBerry";
      } else if (id == "gitlab") {
        window.location.href = "https://github.com/BlaxBerry";
      } else {
        this.$router.push({
          path: "/detail/skill",
          query: {
            id,
          },
        });
      }
    },
  },
};
</script>

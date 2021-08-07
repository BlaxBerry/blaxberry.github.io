<template>
  <div id="detail-work-description">
    <v-card class="pa-4">
      <!-- title -->
      <Title>
        <h2 slot="title1">{{ name }}</h2>
        <h4 slot="title2">この作品について</h4>
      </Title>

      <!-- 1. desc -->
      <v-card-text class="px-4 pt-2">
        <v-card-subtitle class="pt-0 px-0">
          <b>開発期間：{{ time ? time : "確認できず..." }}</b>
        </v-card-subtitle>
        {{ desc }}
      </v-card-text>

      <!-- 2. tags -->
      <div class="tags text-center my-4">
        <v-chip
          class="ma-1"
          outlined
          v-for="(item, index) in tags"
          :key="index"
          :color="tagsColor[index]"
        >
          {{ item }}
        </v-chip>
      </div>

      <!-- 3. links -->
      <div class="links text-center">
        <v-btn
          v-if="links.github"
          :href="links.github"
          target="_blank"
          elevation="2"
        >
          <v-icon>mdi-github</v-icon>
          <span>Clike to Github</span>
        </v-btn>
        <v-btn
          v-if="links.demo"
          :href="links.demo"
          target="_blank"
          elevation="2"
        >
          <v-icon color="primary">mdi-camera-iris</v-icon>
          <span>Check Demo Online</span>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";

export default {
  props: ["name", "desc", "tags", "links", "time"],

  components: {
    Title,
  },

  data() {
    return {
      tagsColor: ["success", "pink", "primary", "orange", "cyan"],
    };
  },
};
</script>

<style lang="scss" scoped>
.links {
  a {
    margin: 0.5rem 1rem;
    span {
      padding-left: 0.5rem;
    }
  }
}
</style>

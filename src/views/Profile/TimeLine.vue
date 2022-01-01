<template>
  <div id="profile-timeline">
    <!-- title -->
    <Title>
      <h1 slot="title1">Experience Time Line</h1>
      <h2 slot="title2">経歴や勉強について</h2>
    </Title>

    <!-- timeline -->
    <v-timeline dense class="mr-md-4">
      <v-timeline-item
        v-for="(item, index) in timeline"
        :key="index"
        color="cyan darken-2"
        large
        :icon="item.skill ? 'mdi-code-tags' : ''"
      >
        <v-card class="elevation-4">
          <v-card-title v-if="item.title" class="cyan white--text py-2 mb-2">
            <!-- title -->
            {{ item.title }}
          </v-card-title>
          <v-card-text class="pb-5 text-lg-body-1 pr-3 px-md-6">
            <v-card-title
              class="cyan--text text--darken-2 font-weight-bold pa-0 mb-2"
            >
              <!-- time -->
              {{ item.time }}
            </v-card-title>
            <!-- description -->
            <p
              v-if="item.desc"
              class="text-caption text-sm-body-2 text-md-body-1"
              v-html="item.desc"
            />
            <!-- skills -->
            <div class="skills pt-2 mt-md-3 ml-md-5" v-if="item.skill">
              <v-avatar
                v-for="(skill, i) in item.skill"
                :key="i"
                size="45"
                tile
                class="ma-1 mx-md-2 white"
              >
                <v-img :src="require(`@/assets/images/${skill.pic}`)"></v-img>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";
// items
// import timeline from "@/assets/items/Profile/timelineItems";

export default {
  components: {
    Title,
  },

  data() {
    return {
      timeline: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>

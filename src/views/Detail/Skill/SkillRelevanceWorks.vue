<template>
  <v-col>
    <!-- title -->
    <h1 class="text-en">Representative Works:</h1>

    <!-- text -->
    <div
      v-if="worksPC.content.length || worksMobile.content.length"
      class="d-flex flex-column justify-center align-center text-jp"
    >
      <p class="text-jp pure-text-content mb-0 pt-3 px-4">
        <a :href="skillUrl" target="_blank">
          <b>{{ currentSkil.name }}</b>
        </a>
        や関連技術を使用して開発した一部の作品:
      </p>
    </div>

    <!-- PC works -->
    <v-col v-show="worksPC.content.length">
      <v-col class="text-center text-jp">
        <h3>{{ worksPC.name }} 端末</h3>
      </v-col>
      <WorksList :item="worksPC" v-show="worksPC.content" />
    </v-col>

    <!-- Mobile works -->
    <v-col v-show="worksMobile.content.length">
      <v-divider></v-divider>
      <v-col class="text-center text-jp">
        <h3>{{ worksMobile.name }} 端末</h3>
      </v-col>
      <WorksList :item="worksMobile" v-show="worksPC.content" />
    </v-col>

    <!-- no works -->
    <div
      v-if="!worksPC.content.length && !worksMobile.content.length"
      class="d-flex flex-column justify-center align-center text-jp"
    >
      <!-- text -->
      <div
        class="d-flex flex-column justify-center align-center"
        :style="{ height: '20vh' }"
      >
        <p class="text-jp pure-text-content">
          <span>
            この技術を使用した作品は現在開発・更新中、
          </span>
          <span class="text-center d-sm-block">
            或いはこの技術はまだ勉強中です。
          </span>
        </p>
      </div>
      <!-- router  change -->
      <span>他の作品をご確認</span>
      <v-btn class="ma-4" outlined dark color="cyan darken-1" to="/works">
        More
      </v-btn>
    </div>
  </v-col>
</template>

<script>
// components
import WorksList from "@/components/Works/WorksList.vue";

export default {
  props: ["worksPC", "worksMobile", "currentSkil"],
  components: { WorksList },
  computed: {
    skillUrl: function() {
      return `https://www.google.com/search?q=${this.currentSkil.name}`;
    },
  },
};
</script>

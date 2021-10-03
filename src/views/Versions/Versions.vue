<template>
  <div id="versions">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Versions of Portfolio</h1>
        <h4 slot="title2">ポートフォリオのバージョンアップ</h4>
      </Title>

      <!-- 1. desc -->
      <p
        class="py-5 text-caption text-sm-body-2 text-md-body-1"
        v-text="
          'この画面を通じて、ポートフォリオのバージョンアップや、今までの各バージョンで使用したスキル、そして以前のポートフォリオバージョンの問題点など、また開発に関する内容を確認することができます。'
        "
      />

      <!-- 2. list -->
      <div class="version-list mb-10">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(version, index) in versionList"
            :key="index"
          >
            <!-- 2.1. title -->
            <v-expansion-panel-header class="font-weight-black">
              Version
              <b
                :class="
                  index == 0
                    ? 'text-h6 pl-2 red--text'
                    : 'pl-2 text-decoration-line-through'
                "
                v-text="version.version"
              />
              <small
                class="text-right pr-2 primary--text"
                v-text="version.time"
              />
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pl-4">
              <!-- 2.2. tech stacks -->
              <div subheader class="d-flex flex-wrap" style="fontSize:12px">
                <div
                  class="d-flex flex-column ma-1"
                  v-for="(tech, index) in version.techStacks"
                  :key="index"
                  style=" max-width:60px"
                >
                  <v-card class="pa-1">
                    <v-img
                      :src="require(`@/assets/images/${tech.icon}`)"
                      lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
                      max-height="50"
                      max-width="50"
                      style="background-color:white"
                    />
                  </v-card>
                  <!-- tech name -->
                  <v-list-item-content
                    class="py-1 text-no-wrap font-weight-black"
                    v-text="tech.name"
                  />
                </div>
              </div>

              <!-- 2.3. desc -->
              <small
                v-if="version.desc"
                class="desc py-4 text-caption text-sm-body-2 text-md-body-1"
                v-text="version.desc"
              />

              <!-- 2.4. shortcoming -->
              <p
                class="shortcoming pa-2 mb-0 text-caption text-sm-body-2 text-md-body-1"
                v-for="(shortcoming, i) in version.shortcoming"
                :key="shortcoming"
              >
                <b> {{ i + 1 }}. </b>
                {{ shortcoming }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";
// items
import versionList from "@/assets/items/Version/versionList";

export default {
  components: {
    // components
    Title,
  },

  data() {
    return {
      versionList,
    };
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = [];
  },
};
</script>


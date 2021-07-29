<template>
  <div id="versions">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Protofilo Versions</h1>
        <h4 slot="title2">ポートフォリオのバージョンアップ</h4>
      </Title>

      <div class="version-list my-10">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(version, index) in versionList"
            :key="index"
          >
            <!-- 1. title -->
            <v-expansion-panel-header class="font-weight-black">
              Version
              <b :class="index == 0 ? 'text-h6 pl-2 red--text' : 'pl-2'">
                {{ version.version }}
              </b>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pl-4">
              <!-- 1. tech stacks -->
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
                      lazy-src="@/assets/images/_lazyloading.gif"
                      max-height="60"
                      max-width="60"
                    ></v-img>
                  </v-card>
                  <v-list-item-content class="py-1 text-no-wrap">
                    {{ tech.name }}
                  </v-list-item-content>
                </div>
              </div>

              <!-- 2.desc -->
              <div class="desc py-4">
                {{ version.desc }}
              </div>

              <!-- 3.shortcoming -->
              <div
                class="shortcoming ml-lg-15 pa-2"
                v-for="(shortcoming, i) in version.shortcoming"
                :key="shortcoming"
              >
                <b>{{ i + 1 }}</b
                >. {{ shortcoming }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <!-- 5. Nav Bottom -->
      <NavBottom></NavBottom>
    </v-container>
  </div>
</template>

<script>
// components
import NavBottom from "@/components/Nav/NavBottom.vue";
import Title from "@/components/Title/Title.vue";

export default {
  components: {
    // components
    Title,
    NavBottom,
  },

  data() {
    return {
      versionList: [
        {
          version: "4.0",
          desc:
            "色々な練習を重ねて、最後はVue-Router + Vuetifyを利用して、単一ページのSPAサイト開発しました。そして静的なWebページではなく、画面上で展示するデータを、Vue-Cliの中でAxiosを通じて、publicに保存しているJSONファイルから読み込みます。",
          shortcoming: [],
          techStacks: [
            { name: "Vue-Cli", icon: "vue.svg" },
            { name: "Vue-Router", icon: "vue.svg" },
            { name: "Vuetify", icon: "vue-vuetify.svg" },
            { name: "Scss", icon: "sass.svg" },
            { name: "Axios", icon: "axios.svg" },
            { name: "JSON", icon: "json.svg" },
          ],
        },
        {
          version: "3.0",
          desc: "",
          shortcoming: [
            "他のWebページにジャンプするので、閲覧する体験が良くない。",
            "Ajaxを使わず、直接にJSONファイルのデータを各ページに導入するので、画面レンダリングする時間が増えてしまう。",
            "各種類の端末に応じるために、Media Queryを利用し、Lessでレイアウトを一々書くので、量も多いし開発のスピードに対して不満。",
            "振り返って調整する時は難しくなる。",
          ],
          techStacks: [
            { name: "Vue-Cli", icon: "vue.svg" },
            { name: "Media Query", icon: "css.svg" },
            { name: "less", icon: "less.svg" },
            { name: "JSON", icon: "json.svg" },
          ],
        },
        {
          version: "2.0",
          desc:
            "レスポンシブ開発するために、各端末(特に携帯端末)に応じて自動で表示が最適化されるように、Bootstrapを使いました。",
          shortcoming: [
            "静的なページのため、HTMLの量が多い。",
            "DOM操作するため、JSの量が多い。",
            "振り返って調整する時は難しくなる。",
            "開発のスピードに対して不満。",
          ],
          techStacks: [
            { name: "Bootstrap4", icon: "bootstrap.svg" },
            { name: "CSS3", icon: "css.svg" },
            { name: "jQuery", icon: "jquery.svg" },
            { name: "Webpack", icon: "webpack.svg" },
          ],
        },
        {
          version: "1.0",
          desc: "",
          shortcoming: [
            "携帯端末に対応できない。",
            "静的なページのため、HTMLの量が多い。",
            "開発のスピードやデザイン性などを確保できない。",
            "振り返って調整する時は難しくなる。",
          ],
          techStacks: [
            { name: "HTML5", icon: "html.svg" },
            { name: "CSS3", icon: "css.svg" },
            { name: "jQuery", icon: "jquery.svg" },
            { name: "Webpack", icon: "webpack.svg" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

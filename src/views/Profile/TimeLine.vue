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
        <!-- <template v-slot:opposite>
          <h3 class="cyan--text text--darken-2">{{ item.time }}</h3>
        </template> -->
        <v-card class="elevation-4">
          <v-card-title v-if="item.title" class="cyan white--text py-2 mb-2">
            <!-- title -->
            {{ item.title }}
          </v-card-title>
          <v-card-text class="pb-5 text-lg-body-1 pr-3 px-md-6 text-caption text-sm-body-2 text-md-body-1">
            <v-card-title
              class="cyan--text text--darken-2 font-weight-bold pa-0 mb-2"
            >
              <!-- time -->
              {{ item.time }}
            </v-card-title>
            <!-- description -->
            {{ item.desc ? item.desc : "" }}
            <div class="skills pt-2 mt-md-3 ml-md-5" v-if="item.skill">
              <!-- skills -->
              <v-avatar
                v-for="(skill, i) in item.skill"
                :key="i"
                size="45"
                tile
                class="ma-1 mx-md-2"
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

export default {
  components: {
    Title,
  },

  data() {
    return {
      timeline: [
        {
          time: "2021.9",
          desc:
            "WordPress、VuePress を比べながら勉強し始めました。スキルアップのために、将来の段階的な目標として PHP も勉強したいと思います。",
          skill: [
            { name: "VuePress", pic: "vue-vuepress.svg" },
            { name: "WordPress", pic: "wordpress.svg" },
            { name: "PHP", pic: "php.svg" },
          ],
        },
        {
          time: "2021.8",
          desc:
            "ELectron の基礎を勉強して練習しました。最近 React や Vue３ の関連知識を強化しており、また Vite に対しても勉強し始めました。",
          skill: [
            { name: "Vite", pic: "vue-vite.svg" },
            { name: "Vue3", pic: "vue.svg" },
            { name: "VueX", pic: "vue-vuex.svg" },
            { name: "Electron", pic: "electron.svg" },
          ],
        },
        {
          time: "2021.7",
          desc:
            "スキルアップのために、サーバー開発については Node.js・Express.js だけではなく、Ruby や Ruby on Rails の基礎も勉強し、それらに基づいた開発も練習しました。",
          skill: [
            { name: "Ruby", pic: "ruby.svg" },
            { name: "Ruby on Rails", pic: "rails.svg" },
            { name: "PostgreSQL", pic: "postgresql.svg" },
          ],
        },
        {
          time: "2021.6",
          skill: [
            { name: "TypeScript.js", pic: "typescript.svg" },
            { name: "Redux", pic: "redux.svg" },
            { name: "Vuetify", pic: "vue-vuetify.svg" },
            { name: "Material UI", pic: "react-materialui.svg" },
          ],
        },
        {
          time: "2021.5",
          desc:
            "以前の勉強や開発練習は主にフロントエンドですが、キャリアアップのために、Node.js・Express.js からサーバー開発やデータベース関連スキルを勉強しはじめました。",
          skill: [
            { name: "Node.js", pic: "nodejs.svg" },
            { name: "axios", pic: "axios.svg" },
            { name: "MongoDB", pic: "mongodb.svg" },
            { name: "MySQL", pic: "mysql.svg" },
          ],
        },
        {
          time: "2021.2",
          desc: "フレームワーク・UIフレームワーク・SPA を勉強し始めました。",
          skill: [
            { name: "Vue", pic: "vue.svg" },
            { name: "Vant", pic: "vue-vant.svg" },
            { name: "Vue-router", pic: "vue-router.svg" },
            { name: "React", pic: "react.svg" },
            { name: "Antd", pic: "react-ant-design.svg" },
            { name: "React-Router-Dom", pic: "react-router-dom.svg" },
          ],
        },
        {
          time: "2020.1",
          skill: [
            { name: "Node.js", pic: "nodejs.svg" },
            { name: "Webpack", pic: "webpack.svg" },
            { name: "Scss", pic: "sass.svg" },
            { name: "npm", pic: "npm.svg" },
          ],
        },
        {
          time: "2020.12",
          skill: [
            { name: "Bootstrap", pic: "bootstrap.svg" },
            { name: "jQuery", pic: "jquery.svg" },
            { name: "Less", pic: "less.svg" },
          ],
        },
        {
          time: "2020.10",
          skill: [
            { name: "HTML", pic: "html.svg" },
            { name: "CSS", pic: "css.svg" },
            { name: "JavaScript", pic: "javascript.svg" },
          ],
        },
        {
          time: "2020.10",
          title: "プログラミング開始",
          desc: "ITプログラミングを知り、フロントエンドから勉強し始めました。",
        },
        {
          time: "2020",
          title: "不動産仕事開始",
          desc:
            "不動産会社に入社し、外国人向けの飲食店舗賃貸の営業担当として、ピカピカの新人営業マンになりました。",
        },
        {
          time: "2018",
          title: "家業手伝い",
          desc:
            "家庭の事情により家業(飲食店)の手伝いを優先することに決めました。",
        },
        {
          time: "2017",
          title: "来日",
          desc:
            "大学で日中古典文学を研究し、日本の大学院の内定を受けて、大学卒業後来日しました。",
        },
        {
          time: "2013",
          title: "学生時代",
          desc: "中国の国立大学の外国語学院に入学しました。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="profile-timeline">
    <!-- title -->
    <Title>
      <h1 slot="title1">Experience Time Line</h1>
      <h2 slot="title2">経歴や勉強について</h2>
    </Title>

    <!-- timeline -->
    <v-timeline>
      <v-timeline-item
        v-for="(item, index) in timeline"
        :key="index"
        color="cyan darken-2"
        large
        :icon="item.skill ? 'mdi-bug' : ''"
      >
        <template v-slot:opposite>
          <h3 class="cyan--text text--darken-2">{{ item.time }}</h3>
        </template>
        <v-card class="elevation-2">
          <v-card-title v-if="item.title" class="cyan white--text py-2">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="py-4">
            {{ item.desc ? item.desc : "" }}
            <div class="skills text-center" v-if="item.skill">
              <v-avatar
                v-for="(skill, i) in item.skill"
                :key="i"
                size="30"
                tile
                class="ma-1"
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
          time: "2021.7",
          desc:
            "サーバ開発について、Node.jsだけでは足りないと思いました。Railsでの開発の強さを見つけ、自分のスキルアップのために、JavaScript以外の言語での開発を勉強しはじめました。",
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
            { name: "Vuetify", pic: "vue-vuetify.svg" },
            { name: "Redux", pic: "redux.svg" },
          ],
        },
        {
          time: "2021.5",
          desc:
            "以前の勉強や開発練習は主にフロントエンドですが、キャリアアップするために、Node.jsからサーバ開発やデータベース関連スキルを勉強しはじめました。",
          skill: [
            { name: "Node.js", pic: "nodejs.svg" },
            { name: "MongoDB", pic: "mongodb.svg" },
            { name: "MySQL", pic: "mysql.svg" },
          ],
        },
        {
          time: "2021.2",
          skill: [
            { name: "Vue", pic: "vue.svg" },
            { name: "ElementUI", pic: "vue-elementui.svg" },
            { name: "axios", pic: "axios.svg" },
            { name: "React", pic: "react.svg" },
            { name: "Antd", pic: "react-ant-design.svg" },
            { name: "React-Router-Dom", pic: "react-router-dom.svg" },
          ],
        },
        {
          time: "2020.1",
          skill: [
            { name: "Webpack", pic: "webpack.svg" },
            { name: "Less", pic: "less.svg" },
            { name: "npm", pic: "npm.svg" },
          ],
        },
        {
          time: "2020.12",
          skill: [
            { name: "Bootstrap", pic: "bootstrap.svg" },
            { name: "jQuery", pic: "jquery.svg" },
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
          desc: "フロントエンドからITプログラミングを勉強し始めました。",
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
            "日中古典文学を研究し、日本の大学院の内定を受けて、大学卒業後来日しました。",
        },
        {
          time: "2013",
          title: "学生時代",
          desc: "中国の大学の外国語学院に入学しました。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

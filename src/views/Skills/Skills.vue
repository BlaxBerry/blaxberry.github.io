<template>
  <div id="skills" class="pb-15">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Skills</h1>
        <h4 slot="title2">スキルについて</h4>
      </Title>

      <!-- desc -->
      <div class="mb-4">
        <p class="text-caption text-sm-body-2 text-md-body-1 px-sm-2 px-md-0">
          フロントエンドだけではなく、サーバサイトなどまでも浅く取り組んできました。これからフルスタックエンジニアを目指し、幅広い面で活躍できるように頑張りたいと考えています。これからポロジェットに携わりながら、スキルや詳細を不定期に更新します。
        </p>
        <small>
          ＊ 各スキルをクリックして、詳細をご確認ください。
        </small>
      </div>

      <!-- 1. languages -->
      <SkillCards :list="lang_list" />

      <!-- 3. frameworks -->
      <SkillCards :list="framework_list" />

      <!-- 5. server -->
      <SkillCards :list="server_list" />

      <!-- 6. datadase  -->
      <SkillCards :list="db_list" />

      <!-- 4. others -->
      <SkillCards :list="others_list" />

      <!-- 2. style -->
      <SkillCards :list="style_list" />

      <!-- to works page -->
      <div class="text-center mt-10 px-10">
        <b>今までの作品集をご確認ください:</b>
        <v-btn
          block
          to="/works"
          class="my-2 cyan darken-2 white--text font-weight-black py-6"
          >Check Works</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
// api
import {
  // get all skill list
  getAllSkillList,
} from "@/api/api";

// components
import Title from "@/components/Title/Title.vue";
import SkillCards from "@/components/Cards/CardSkills.vue";

export default {
  components: {
    Title,
    SkillCards,
  },

  data() {
    return {
      lang_list: [],
      style_list: [],
      framework_list: [],
      server_list: [],
      db_list: [],
      others_list: [],
    };
  },

  created() {
    // get all skill list
    getAllSkillList.then((res) => {
      console.log(res.data);
      let allSKillArr = res.data.filter((item) => item.showSkillPage);

      // languages
      let langs = allSKillArr.filter((item) => item.type == "lang");
      console.log("languages", langs);
      this.lang_list = langs;

      // framework
      let frameworks = allSKillArr.filter((item) => item.type == "framework");
      console.log("frameworks", frameworks);
      this.framework_list = frameworks;

      // server
      let servers = allSKillArr.filter((item) => item.type == "server");
      console.log("servers", servers);
      this.server_list = servers;

      // database
      let databases = allSKillArr.filter((item) => item.type == "database");
      console.log("databasess", databases);
      this.db_list = databases;

      // others
      let others = allSKillArr.filter((item) => item.type == "others");
      console.log("others", others);
      this.others_list = others;

      // ui style
      let styles = allSKillArr.filter((item) => item.type == "style");
      console.log("styles", styles);
      this.style_list = styles;
    });
  },
};
</script>


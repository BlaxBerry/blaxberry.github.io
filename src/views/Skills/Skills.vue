<template>
  <div id="skills" class="pb-15">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="title1">Skills</h1>
        <h4 slot="title2">スキルについて</h4>
      </Title>

      <!-- desc -->
      <div class="pa-5">
        <p>
          今までフロントエンドからサーバサイトまで広く浅く取り組んできました。<br />
          将来フルスタックエンジニアを目指して頑張っています。
          色々な開発練習を通じて、身に付いているスキルの不足なところも認識しましたが、今後は必ず幅広い面で挑戦して専門性を高め、開発経験を積んだ上で将来オールラウンドに対応できるように頑張りたいと考えています。
        </p>
        <small>
          ＊ 各スキルをクリックして、詳細をご確認ください。
        </small>
      </div>

      <!-- 1. languages -->
      <SkillCards :list="lang_list"></SkillCards>
      <br />

      <!-- 3. frameworks -->
      <SkillCards :list="framework_list"></SkillCards>
      <br />

      <!-- 5. server -->
      <SkillCards :list="server_list"></SkillCards>
      <br />

      <!-- 6. datadase  -->
      <SkillCards :list="db_list"></SkillCards>
      <br />

      <!-- 4. others -->
      <SkillCards :list="others_list"></SkillCards>
      <br />

      <!-- 2. style -->
      <SkillCards :list="style_list"></SkillCards>

      <small class="pa-5"
        >＊ 各スキルをクリックして、詳細をご確認ください。</small
      >

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
      // 分类skills
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
      let allSkill = [];
      res.data.forEach((item) => {
        if (item.showSkillPage) {
          allSkill.push(item);
        }
      });
      // console.log(allSkill);

      // 1. get all kinds of types of Skills
      let allTypes = [];
      allSkill.forEach((item) => {
        allTypes.push(item.type);
      });
      allTypes = Array.from(new Set(allTypes));
      // console.log("types", allTypes);

      // 2. 分类 并 赋值
      allSkill.map((item) => {
        switch (item.type) {
          case allTypes[0]:
            this.lang_list.push(item);
            break;
          case allTypes[1]:
            this.style_list.push(item);
            break;
          case allTypes[2]:
            this.framework_list.push(item);
            break;
          case allTypes[3]:
            this.others_list.push(item);
            break;
          case allTypes[4]:
            this.server_list.push(item);
            break;
          case allTypes[5]:
            this.db_list.push(item);
            break;
          default:
            break;
        }
      });

      // 4 去重复 hash unique
      // function unique(arr) {
      //   for (let i = 0; i < arr.length; i++) {
      //     for (let j = i + 1; j < arr.length; j++) {
      //       if (arr[i].name === arr[j].name) {
      //         arr.splice(i, 1);
      //         j--;
      //       }
      //     }
      //   }
      // }
      // unique(lang_list);
      // unique(style_list);
      // unique(framework_list);
      // unique(server_list);
      // unique(db_list);
      // unique(others_list);
    });
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

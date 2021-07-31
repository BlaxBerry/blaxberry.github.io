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
          今まで身に付いているスキルは主にフロントエンドですが、
          その不足も認識していますが、挑戦して開発経験を積んだ上で、
          フロントエンドに関するスキルを幅広くスキルアップして、
          いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。
        </p>
        <small>
          ＊ 各スキルをクリックして、スキル詳細をご確認ください。
        </small>
      </div>

      <!-- 1. languages -->
      <SkillCards :list="lang_list"></SkillCards>
      <!-- 2. style -->
      <SkillCards :list="style_list"></SkillCards>
      <!-- 3. frameworks -->
      <SkillCards :list="framework_list"></SkillCards>
      <!-- 4. others -->
      <SkillCards :list="others_list"></SkillCards>
      <!-- 5. server -->
      <SkillCards :list="server_list"></SkillCards>
      <!-- 6. datadase  -->
      <SkillCards :list="db_list"></SkillCards>
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

      SmoothScrollAnchors: [
        // SKills
        { name: "Skills", anchorID: "home-skills", icon: "mdi-pickaxe" },
        // Contact
        { name: "Contact", anchorID: "footer", icon: "mdi-hail" },
      ],
    };
  },

  created() {
    // get all skill list
    getAllSkillList.then((res) => {
      // 1. all types of Skills
      let allTypes = [];
      res.data.forEach((skill) => {
        skill.techTasks.forEach((type) => {
          allTypes.push(type.type);
        });
      });
      allTypes = Array.from(new Set(allTypes));
      // console.log("types", allTypes);

      // 2. all tech stacks pics
      let allSkill = [];
      res.data.forEach((skill) => {
        skill.techTasks.forEach((item) => {
          item.pic.forEach((pic) => {
            allSkill.push({
              name: pic.replace(".svg", ""),
              pic: pic,
              id: pic.replace(".svg", ""),
              type: item.type,
              // 若该技术没有详情信息，则挑跳转到相关技术画面
              similarity: skill.id,
            });
          });
        });
      });
      // console.log("all",allSkill);

      // 3. 分类
      // according to different types
      let lang_list = [];
      let style_list = [];
      let framework_list = [];
      let server_list = [];
      let db_list = [];
      let others_list = [];
      allSkill.map((item) => {
        switch (item.type) {
          case "lang":
            lang_list.push(item);
            break;
          case "style":
            style_list.push(item);
            break;
          case "framework":
            framework_list.push(item);
            break;
          case "server":
            server_list.push(item);
            break;
          case "db":
            db_list.push(item);
            break;
          case "others":
            others_list.push(item);
            break;
          default:
            break;
        }
      });

      // 4 去重复 hash unique
      function unique(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].name === arr[j].name) {
              arr.splice(i, 1);
              j--;
            }
          }
        }
      }
      unique(lang_list);
      unique(style_list);
      unique(framework_list);
      unique(server_list);
      unique(db_list);
      unique(others_list);

      // 5. 赋值给数据模型
      this.lang_list = lang_list;
      this.style_list = style_list;
      this.framework_list = framework_list;
      this.server_list = server_list;
      this.db_list = db_list;
      this.others_list = others_list;
      console.log(this.others_list);
    });
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

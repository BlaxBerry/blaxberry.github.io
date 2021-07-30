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
      <!-- 2. frameworks -->
      <SkillCards :list="framework_list"></SkillCards>
      <!-- 3. datadase & server -->
      <SkillCards :list="backend_list"></SkillCards>
      <!-- 4. others -->
      <SkillCards :list="others_list"></SkillCards>
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
      framework_list: [],
      backend_list: [],
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
      this.lang_list = res.data[0];
      this.framework_list = res.data[1];
      this.backend_list = res.data[2];
      this.others_list = res.data[3];
    });
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

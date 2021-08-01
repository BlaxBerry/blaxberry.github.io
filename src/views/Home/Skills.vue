<template>
  <div id="home-skills" class="py-10 pb-15">
    <!-- title -->
    <Title>
      <h1 slot="title1">Skills</h1>
      <h4 slot="title2">スキルについて</h4>
    </Title>

    <!-- desc -->
    <div class="pa-5">
      <p>
        今まで身に付いているスキルは主にフロントエンドですが、その不足も認識していますが、挑戦して開発経験を積んだ上で、フロントエンドに関するスキルを幅広くスキルアップして、いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。
      </p>
      <small>
        ＊ 各スキルをクリックして、詳細をご確認ください。
      </small>
    </div>

    <!-- skills cards -->
    <SkillCards :list="list"></SkillCards>

    <!-- to works page -->
    <div class="text-center mt-2 px-10">
      <b>スキル詳細をご確認ください:</b>
      <v-btn block to="/skills" class="my-2">Check More</v-btn>
    </div>
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
  data() {
    return {
      // skill list
      list: [],
    };
  },

  components: {
    Title,
    SkillCards,
  },

  created() {
    // get all skill list
    getAllSkillList.then((res) => {
      this.list = res.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>

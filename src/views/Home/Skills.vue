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
        今まで身に付いているスキルは主にフロントエンドですが、サーバサイトまでも広く浅く取り組んできました。最近は Node.js や Rails などに基づいたサーバサイト開発に関する知識も勉強しています。 色々な開発練習を通じて、身に付いているスキルの不足なところも認識しましたが、今後は必ず幅広い面で挑戦して専門性を高め、開発経験を積んだ上で将来オールラウンドに対応できるように頑張りたいと考えています。
      </p>
      <small>
        ＊ 各スキルをクリックして、詳細をご確認ください。
      </small>
    </div>

    <!-- skills cards -->
    <SkillCards :list="list"></SkillCards>

    <!-- to works page -->
    <div class="text-center mt-2 px-10">
      <b>全てのスキルをご確認ください:</b>
      <v-btn block to="/skills" class="my-2 cyan darken-2 white--text font-weight-black py-6">Check More</v-btn>
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
      console.log(res.data);
      let list = res.data.filter(item=>{
        return item.showHomePage
      })
      this.list =list;
    });
  },
};
</script>

<style lang="scss" scoped></style>

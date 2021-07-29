<template>
  <div id="home-skills">
    
    <!-- title -->
    <Title>
      <h1 slot="title1">Skills</h1>
      <h4 slot="title2">スキルについて</h4>
    </Title>

    <!-- skills cards -->
    <SkillCards :list="list"></SkillCards>
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
      this.list = [
        ...res.data[0],
        ...res.data[1],
        ...res.data[2],
        ...res.data[3],
      ];
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped></style>

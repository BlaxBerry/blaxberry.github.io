<template>
  <div id="skills-home">
    Skills

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
import SkillCards from "@/components/Cards/CardSkills.vue";

export default {
  data() {
    return {
      // skill list
      list: [],
    };
  },

  components: {
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

<style lang="scss" scoped>
// #skills-home {
//   // background-color: turquoise;
// }
</style>

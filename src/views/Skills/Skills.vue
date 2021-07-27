<template>
  <div id="skills">
    skills

    <!-- 1. languages -->
    <SkillCards :list="lang_list"></SkillCards>
    <!-- 2. frameworks -->
    <SkillCards :list="framework_list"></SkillCards>
    <!-- 3. datadase & server -->
    <SkillCards :list="backend_list"></SkillCards>
    <!-- 4. others -->
    <SkillCards :list="others_list"></SkillCards>

    <!-- footer -->
    <Footer></Footer>

    <!-- Nav Bottom -->
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// api
import {
  // get all skill list
  getAllSkillList,
} from "@/api/api";

// components
import Footer from "@/components/Footer/Footer.vue";
import NavBottom from "@/components/Nav/NavBottom.vue";

import SkillCards from "@/components/Cards/CardSkills.vue";

export default {
  components: {
    Footer,
    NavBottom,

    SkillCards,
  },

  data() {
    return {
      lang_list: [],
      framework_list: [],
      backend_list: [],
      others_list: [],
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
};
</script>

<style lang="scss" scoped></style>

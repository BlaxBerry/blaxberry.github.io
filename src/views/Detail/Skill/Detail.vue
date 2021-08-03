<template>
  <div id="skill-detail">
    <v-container>
      <!-- 1. description -->
      <Description :skill="skill"></Description>

      <!-- 2. techTasks -->
      <TechList :list="similars"></TechList>

      <!-- 2. works -->

      <!-- 3. study -->
    </v-container>
  </div>
</template>

<script>
// api
import {
  // get all skill list
  getAllSkillList,
} from "@/api/api";

// mian components
import Description from "@/views/Detail/Skill/Description.vue";
import TechList from "@/views/Detail/Skill/TechList.vue";

export default {
  components: {
    // mian components
    Description,
    TechList,
  },

  data() {
    return {
      // the skill
      skill: {},
      // all similar skill list about this skills
      similars: [],
    };
  },

  methods: {
    init() {
      // get all skill list
      getAllSkillList.then((res) => {
        // 1. get url params
        let id = this.$route.query.id;

        // 2. get this skill's detail from all
        let allSKill = res.data;
        this.skill = allSKill.find((item) => {
          return item.id == id;
        });
        // console.log(this.skill);

        // 3. get all similar skill list about this skills
        let similarSkills = this.skill.similar;
        // console.log(similarSkills);

        // 4. get those from all skills
        similarSkills.forEach((item) => {
          allSKill.filter((element) => {
            if (element.id == item) {
              this.similars.push(element);
            }
          });
        });
      });
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

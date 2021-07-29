<template>
  <div id="skill-detail">
    skill detail

    <!-- 1. description -->
    <Description
      :name="skill.name"
      :pic="skill.pic"
      :desc="skill.desc"
    ></Description>

    <!-- 2. techTasks -->
    <TechList :list="skill.techTasks"></TechList>

    <!-- 2. works -->

    <!-- 3. study -->

    <!-- 5. Nav Bottom -->
    <NavBottom></NavBottom>
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

// components
import NavBottom from "@/components/Nav/NavBottom.vue";

export default {
  components: {
    // mian components
    Description,
    TechList,
    // components
    NavBottom,
  },

  data() {
    return {
      // route query
      urlQuery: "",
      // all skill list from data
      allSkillList: [],
      // the skill
      skill: {},
    };
  },

  methods: {
    init() {
      // 1. get the name of skill in detail page at the beginning
      this.urlQuery = this.$route.query.name;
      console.log(this.urlQuery);

      // 2. get all skill list
      getAllSkillList.then((res) => {
        this.allSkillList = [
          ...res.data[0],
          ...res.data[1],
          ...res.data[2],
          ...res.data[3],
        ];
        // 3. find the skill
        this.skill = this.allSkillList.find((item) => {
          return item.id == this.urlQuery;
        });
        console.log(this.skill);
      });
    },
  },

  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>

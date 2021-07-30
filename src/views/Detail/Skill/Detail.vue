<template>
  <div id="skill-detail">
    <v-container>
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
    TechList
  },

  data() {
    return {
      // route query
      urlQuery: "",
      // all skill list from data
      allSkillList: [],
      // the skill
      skill: {},
      SmoothScrollAnchors: [
        // Description
        {
          name: "Desctiption",
          anchorID: "detail-skill-desctiption",
          icon: "mdi-bug",
        },

        // Tech Stacks
        {
          name: "techStacks",
          anchorID: "detail-skill-techlist",
          icon: "mdi-bug",
        },
        // Contact
        { name: "Contact", anchorID: "footer", icon: "mdi-hail" },
      ],
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

  mounted() {
    this.$parent.$parent.SmoothScrollAnchors = this.SmoothScrollAnchors;
  },
};
</script>

<style lang="scss" scoped></style>

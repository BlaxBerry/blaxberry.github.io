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
    TechList,
  },

  data() {
    return {
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
      // 1. get all skill list
      getAllSkillList.then((res) => {
        this.allSkillList = res.data;

        // 2. get the name + similarit from URL query
        let name = this.$route.query.name;
        let similarity = this.$route.query.similarity;

        let detail = this.allSkillList.find((item) => {
          return item.id == name;
        });

        if (!detail) {
          detail = this.allSkillList.find((item) => {
            return item.id == similarity;
          });
        }
        this.skill = detail;
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

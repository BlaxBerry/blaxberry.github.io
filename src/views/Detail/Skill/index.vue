<template>
  <div id="skill-detail" class="py-10">
    <v-container>
      <!-- TODO: loading -->
      <div v-if="!currentSkill">Loading...</div>
      <div v-else>
        <!-- title -->
        <Title>
          <h1 slot="first" class="text-center text-en">
            {{ currentSkill.name }}
          </h1>
        </Title>
        
        <!-- relevance Skills -->
        <v-col v-show="relevanceList.length">
          <h1 class="text-en">Relevant Skills:</h1>
          <br />
          <SkillsList :list="relevanceList" />
          <br />
          <v-divider></v-divider>
        </v-col>
      </div>

      <!-- description -->
      <SkillDescription
        v-show="skillDescription.length"
        :skillDescription="skillDescription"
      />

      <!-- graph? -->

      <!-- relevance Works-->
      <SkillRelevanceWork
        :worksPC="worksPC"
        :worksMobile="worksMobile"
        :currentSkil="currentSkill"
      />
    </v-container>
  </div>
</template>

<script>
//api
import {
  getSkillFront,
  getSkillBack,
  getSkillOther,
  getSkillDescriptions,
  getWorksPC,
  getWorksMobile,
} from "@/api/api";
// components
import Title from "@/components/common/Titles/Titles.vue";
import SkillsList from "@/components/Skills/SkillsList.vue";
import SkillDescription from "./SkillDescription.vue";
import SkillRelevanceWork from "./SkillRelevanceWorks.vue";

export default {
  components: {
    Title,
    SkillsList,
    SkillDescription,
    SkillRelevanceWork,
  },

  data() {
    return {
      SKILLS_ALL: [],
      DESC_ALL: [],
      WORKS_PC: [],
      WORKS_MOBILE: [],
    };
  },

  computed: {
    currentSkill: {
      get() {
        return this.SKILLS_ALL.find((item) => {
          return item?.id == this.$route.query.id;
        });
      },
      set(val) {
        console.log(val);
      },
    },
    relevanceList: function() {
      return (
        this.currentSkill?.relevance?.map((currentItem) => {
          return this.SKILLS_ALL?.find((item) => item.name === currentItem);
        }) || []
      );
    },
    skillDescription: function() {
      return (
        this.DESC_ALL.find((item) => {
          return item.id === this.currentSkill.id;
        })?.desc || []
      );
    },
    worksPC: function() {
      return {
        name: "PC",
        content: this.WORKS_PC?.filter((item) => {
          return item?.techTask?.find((s) => s === this.currentSkill.name);
        }),
      };
    },
    worksMobile: function() {
      return {
        name: "Mobile",
        content: this.WORKS_MOBILE?.filter((item) => {
          return item?.techTask?.find((s) => s === this.currentSkill.name);
        }),
      };
    },
  },

  methods: {
    async getData() {
      // front
      const FRONT = (await getSkillFront).data;
      // back
      const BACK = (await getSkillBack).data;
      // other
      const OTHER = (await getSkillOther).data;

      // all skills' descriptions
      this.DESC_ALL = (await getSkillDescriptions).data;

      // all skills
      this.SKILLS_ALL = [...FRONT, ...BACK, ...OTHER];

      // works
      this.WORKS_PC = (await getWorksPC).data;
      this.WORKS_MOBILE = (await getWorksMobile).data;
    },
  },

  created() {
    this.getData();
  },

  mounted() {
    // for github/gitlab
    if (this.$route.query.id == "github") {
      window.location.href = "https://github.com/BlaxBerry";
    } else if (this.$route.query.id == "gitlab") {
      window.location.href = "https://github.com/BlaxBerry";
    }
  },

  updated() {
    console.log("currentSkill", this.currentSkill);
    console.log("relevance skills", this.relevanceList);
    console.log("currentSkill's description", this.skillDescription);
    console.log("relevance works PC", this.worksPC);
    console.log("relevance works MOBILE", this.worksMobile);
  },
};
</script>

<style lang="scss" scoped></style>

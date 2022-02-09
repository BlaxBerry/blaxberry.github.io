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

        <!-- <div class="title">
          <h1 class="text-center text-en">
            {{ currentSkill.name }}
          </h1>
          <br />
          <v-divider></v-divider>
        </div> -->

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
      <v-col v-show="skillDescription.length">
        <h1 class="text-en">Description:</h1>
        <br />
        <v-divider></v-divider>
        <v-sheet
          class="text-jp py-3 px-4"
          v-for="(item, index) in skillDescription"
          :key="index"
        >
          {{ item }}
        </v-sheet>
      </v-col>

      <!-- graph? -->

      <!-- relevance Works-->
      <!-- <v-col v-show="relevanceWorks.length">
        <h1 class="text-en">Relevant Projects:</h1>
        <br />
        <v-divider></v-divider>
      </v-col> -->
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
} from "@/api/api";
// components
import Title from "@/components/common/Titles/Titles.vue";
import SkillsList from "@/components/Skills/SkillsList.vue";

export default {
  components: {
    Title,
    SkillsList,
  },

  data() {
    return {
      SKILLS_ALL: [],
      DESC_ALL: [],
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
    console.log("relevanceList", this.relevanceList);
    console.log("currentSkill's description", this.skillDescription);
  },
};
</script>

<style lang="scss" scoped></style>

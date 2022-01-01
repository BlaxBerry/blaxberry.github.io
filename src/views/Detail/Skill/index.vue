<template>
  <div id="skill-detail" class="py-10">
    <v-container>
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

      <!-- graph? -->

      <!-- relevance Works-->
      <v-col v-show="currentSkill.works">
        <h1 class="text-en">Relevant Projects:</h1>
        <br />
        <v-divider></v-divider>
      </v-col>
    </v-container>
  </div>
</template>

<script>
//api
import { getSkillFront, getSkillBack, getSkillOther } from "@/api/api";
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
    };
  },

  computed: {
    currentSkill: {
      get() {
        return this.SKILLS_ALL.find((item) => {
          return item.id == this.$route.query.id;
        });
      },
      set(val) {
        console.log(val);
      },
    },
    relevanceList: function() {
      if (this.currentSkill) {
        return this.currentSkill.relevance.map((currentItem) => {
          return this.SKILLS_ALL.find((item) => item.name === currentItem);
        });
      } else {
        return [];
      }
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
      // all skills
      this.SKILLS_ALL = [...FRONT, ...BACK, ...OTHER];
    },
  },

  mounted() {
    this.getData();
  },

  updated() {
    console.log("currentSkill", this.currentSkill);
    console.log("relevanceList", this.relevanceList);
  },
};
</script>

<style lang="scss" scoped></style>

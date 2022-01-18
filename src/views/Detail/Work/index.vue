<template>
  <div id="work-detail" class="py-10">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="first" class="text-center text-en">
          {{ currentWork.name }}
        </h1>
        <h3 slot="second" class="text-center text-jp">
          {{ currentWork.nameEN }}
        </h3>
      </Title>

      <!-- tech tasks skills-->
      <v-col>
        <SkillsList :list="techTask" />
        <br />
      </v-col>

      <!-- about this work -->
      <About :desc="currentWork.description" :date="currentWork.date" />

      <!-- details-->
      <Details :details="currentWork.details" />

      <!-- what i have done (in team work)-->
      <Teamwork :teamwork="currentWork.teamwork" />

      <!-- extras-->
      <Extra :extra="currentWork.extra" />

      <!-- links-->
      <Links :links="currentWork.links" />

      <!-- images-->
      <Images :images="currentWork.pics" :workType="currentWork.type" />
    </v-container>
  </div>
</template>

<script>
//api
import { getSkillFront, getSkillBack, getSkillOther } from "@/api/api";
// components
import Title from "@/components/common/Titles/Titles.vue";
import SkillsList from "@/components/Skills/SkillsList.vue";
import About from "./WorkAboutThis.vue";
import Details from "./WorkProjectDetail.vue";
import Teamwork from "./WorkTeamwork.vue";
import Extra from "./WorkExtraInfo.vue";
import Links from "./WorkLinks.vue";
import Images from "./WorkImages.vue";
// mixin
import works from "@/mixin/works";

export default {
  components: {
    Title,
    SkillsList,
    About,
    Details,
    Teamwork,
    Extra,
    Links,
    Images,
  },

  mixins: [works],

  data() {
    return {
      SKILLS_ALL: [],
    };
  },

  computed: {
    currentWork: function() {
      return this.WORKS_ALL.find((item) => {
        return item.id == this.$route.query.id;
      });
    },
    techTask: function() {
      return this.currentWork.techTask.map((currentItem) => {
        if (this.SKILLS_ALL.length) {
          return this.SKILLS_ALL.find((item) => item.name === currentItem);
        }
      });
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
  created() {
    this.getData();
  },
};
</script>

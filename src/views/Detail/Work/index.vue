<template>
  <div id="work-detail" class="py-10">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="first" class="text-center text-en">
          {{ currentWork.name }}
        </h1>
      </Title>

      <!-- tech tasks skills-->
      <v-col>
        <SkillsList :list="techTask" />
        <br />
      </v-col>

      <!-- description-->
      <v-col>
        <h1 class="text-en">About This Project</h1>
        <br />
        <p v-html="currentWork.description" />
        <v-divider></v-divider>
      </v-col>

      <!-- details-->
      <v-col v-show="currentWork.details">
        <h1 class="text-en">Project Details</h1>
        <br />
        <Details :list="currentWork.details" />
        <br />
        <v-divider></v-divider>
      </v-col>

      <!-- what i have done (in team work)-->
      <v-col v-show="currentWork.teamwork">
        <h1 class="text-en">What I Have Done ?</h1>
        <br />
        <p v-html="currentWork.teamwork" />
        <v-divider></v-divider>
      </v-col>

      <!-- extras-->
      <v-col v-show="currentWork.extra">
        <h1 class="text-en">Extra Information ?</h1>
        <br />
        <p v-html="currentWork.extra" />
        <v-divider></v-divider>
      </v-col>

      <!-- links-->
      <v-col v-show="currentWork.links">
        <h1 class="text-en">Links</h1>
        <br />
        <v-row>
          <v-col
            v-for="(val, key, index) in currentWork.links"
            :key="index"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-icon x-large>{{ val.icon }}</v-icon>
            <v-btn
              :href="val.link"
              target="_blank"
              depressed
              elevation="2"
              rounded
            >
              {{ key }}
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <v-divider></v-divider>
      </v-col>

      <!-- images-->
      <v-col>
        <h1 class="text-en">Images</h1>
        <br />
        <v-row>
          <v-col
            v-for="(pic, i) in currentWork.pics"
            :key="i"
            :cols="currentWork.type == 'PC' ? 12 : 6"
            :sm="currentWork.type == 'PC' ? 6 : 4"
            :md="currentWork.type == 'PC' ? 4 : 2"
            :lg="currentWork.type == 'PC' ? 4 : 2"
          >
            <v-card>
              <v-img :src="pic" :lazy-src="pic" class="white" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <br />
    </v-container>
  </div>
</template>

<script>
//api
import { getSkillFront, getSkillBack, getSkillOther } from "@/api/api";
// components
import Title from "@/components/common/Titles/Titles.vue";
import SkillsList from "@/components/Skills/SkillsList.vue";
import Details from "./WorkDetailsList.vue";
// mixin
import works from "@/mixin/works";

export default {
  components: {
    Title,
    SkillsList,
    Details,
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

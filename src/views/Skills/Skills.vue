<template>
  <div id="skills" class="py-10">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="first" class="text-center text-en">Skills</h1>
        <h3 slot="second" class="text-center text-jp">スキルについて</h3>
      </Title>
      <!-- <div class="title">
        <h1 class="text-center text-en">Skills</h1>
        <h3 class="text-center text-jp">スキルについて</h3>
        <br />
        <v-divider></v-divider>
      </div> -->

      <!-- desc text -->
      <!-- <p class="text-center text-jp">今まで経験したスキル</p> -->

      <v-tabs color="accent-4" centered>
        <!-- top tabs -->
        <v-tab class="font-weight-black text-en" v-for="tab in tabs" :key="tab">
          {{ tab }}
        </v-tab>

        <!-- bottom content -->
        <v-tab-item v-for="(item, i) in tabItems" :key="i">
          <v-container fluid>
            <br />
            <SkillsList
              v-for="(contentItem, index) in item.content"
              :key="index"
              :list="contentItem"
            />
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
// mixin
import skills from "@/mixin/skills";
// components
import Title from "../../components/common/Titles/Titles.vue";
import SkillsList from "@/components/Skills/SkillsList.vue";

export default {
  components: {
    Title,
    SkillsList,
  },

  mixins: [skills],

  data() {
    return {
      tabs: ["Front", "Back", "Others"],
    };
  },

  computed: {
    tabItems: function() {
      return [
        {
          name: "Front Skills",
          content: [
            this.FRONT_TYPE_BASIC,
            this.FRONT_TYPE_VUE,
            this.FRONT_TYPE_REACT,
          ],
        },
        {
          name: "Back Skills",
          content: [
            this.BACK_TYPE_LANG,
            this.BACK_TYPE_SERVER,
            this.BACK_TYPE_DB,
          ],
        },
        {
          name: "Other Skills",
          content: [
            this.OTHER_TYPE_DEVTOOL,
            this.OTHER_TYPE_APIQUERY,
            this.OTHER_TYPE_APP,
          ],
        },
      ];
    },
  },
};
</script>

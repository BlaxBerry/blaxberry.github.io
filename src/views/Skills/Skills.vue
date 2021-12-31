<template>
  <div id="skills" class="pb-15">
    <v-container>
      <!-- title -->
      <v-col>
        <h1 class="text-center text-en">Skills</h1>
        <br />
        <v-divider></v-divider>
      </v-col>

      <!-- desc text -->
      <p>今まで経験したスキル</p>

      <v-tabs color="accent-4" centered>
        <!-- top tabs -->
        <v-tab class="font-weight-black" v-for="tab in tabs" :key="tab">
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
import SkillsList from "@/components/Skills/SkillsList.vue";

export default {
  components: {
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

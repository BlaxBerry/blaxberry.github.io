<template>
  <div id="works" class="py-10">
    <v-container>
      <!-- title -->
      <Title>
        <h1 slot="first" class="text-center text-en">Works</h1>
        <h3 slot="second" class="text-center text-jp">作品集について</h3>
      </Title>

      <v-tabs color="cyan darken-1" centered>
        <!-- top tabs -->
        <v-tab class="font-weight-black text-en" v-for="tab in tabs" :key="tab">
          {{ tab }}
        </v-tab>

        <!-- bottom content -->
        <v-tab-item
          v-for="(item, i) in tabItems"
          :key="i"
          :style="{ minHeight: '100vh' }"
        >
          <v-container fluid>
            <br>
            <WorksList :item="item" />
          </v-container>
        </v-tab-item>
      </v-tabs>
      <v-col></v-col>
    </v-container>
  </div>
</template>

<script>
// mixin
import works from "@/mixin/works";
// components
import Title from "../../components/common/Titles/Titles.vue";
import WorksList from "@/components/Works/WorksList.vue";

export default {
  components: {
    Title,
    WorksList,
  },
  mixins: [works],
};
</script>

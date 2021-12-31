<template>
  <div id="works" class="pb-15">
    <v-container>
      <!-- title -->
      <v-col>
        <h1 class="text-center text-en">Works</h1>
        <h3 class="text-center text-jp">作品について</h3>
        <br />
        <v-divider></v-divider>
      </v-col>

      <v-tabs color="accent-4" centered>
        <!-- top tabs -->
        <v-tab class="font-weight-black" v-for="tab in tabs" :key="tab">
          {{ tab }}
        </v-tab>

        <!-- bottom content -->
        <v-tab-item
          v-for="(item, i) in tabItems"
          :key="i"
          :style="{ minHeight: '100vh' }"
        >
          <v-container fluid>
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
import WorksList from "@/components/Works/WorksList.vue";

export default {
  components: {
    WorksList,
  },
  mixins: [works],
};
</script>

<style lang="scss" scoped></style>

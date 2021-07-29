<template>
  <div id="detail-work-functions">
    <!-- title -->
    <Title>
      <h1 slot="title1">Function Details</h1>
      <h4 slot="title2">機能詳細について</h4>
    </Title>

    <v-list v-for="(l, index) in list" :key="index">
      <v-list-item v-for="(item, i) in l" :key="i">
        <v-icon>mdi-tag</v-icon>
        <v-list-item-content class="px-4">{{ item }}</v-list-item-content>
      </v-list-item>
      <v-divider inset class="mt-3"></v-divider>
    </v-list>

    <!-- github link -->
    <div class="link text-center pa-4">
      <h3 class="mb-4">check more details on github</h3>
      <v-btn :href="links.github" target="_blank" elevation="2">
        <v-icon>mdi-github</v-icon>
        <span>Clike to Github</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
// components
import Title from "@/components/Title/Title.vue";

export default {
  props: ["list", "links"],

  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped></style>

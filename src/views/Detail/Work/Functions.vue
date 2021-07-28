<template>
  <v-container class="Functions">
    <v-list v-for="(l, index) in list" :key="index">
      <v-list-item v-for="(item, i) in l" :key="i">
        <v-icon>mdi-tag</v-icon>
        <v-list-item-content class="px-4">{{ item }}</v-list-item-content>
      </v-list-item>

      <v-divider inset class="my-1"></v-divider>
    </v-list>

    <!-- github link -->
    <div class="link ">
      <span>check more details on github </span>
      <v-btn :href="links.github" target="_blank" elevation="2">
        <v-icon>mdi-github</v-icon>
        <span>Clike to Github</span>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["list", "links"],
};
</script>

<style></style>

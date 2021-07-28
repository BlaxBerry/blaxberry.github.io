<template>
  <v-container class="Functions">
    <v-list v-for="(l, index) in list" :key="index">
      <v-divider inset class="my-1"></v-divider>
      <v-list-item v-for="(item, i) in l" :key="i">
        <v-icon>mdi-tag</v-icon>
        <v-list-item-content class="px-4">{{ item }}</v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider inset class="my-3"></v-divider>
    <!-- github link -->
    <div class="link ">
      <h4>check more details on github</h4>
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

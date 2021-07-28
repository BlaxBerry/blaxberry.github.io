<template>
  <v-container class="description">
    <v-card class="pa-4">
      <!-- 1. desc -->
      <h3 class="px-4 pt-4">{{desc}}</h3>

     
      <!-- 2. tags -->
      <div class="tags text-center ma-4">
        <v-chip
          class="ma-2"
          color="success"
          outlined
          v-for="(item, index) in tags"
          :key="index"
        >
          {{ item }}
        </v-chip>
      </div>

      <!-- 3. links -->
      <div class="links text-center">
        <v-btn :href="links.github" target="_blank" elevation="2">
          <v-icon>mdi-github</v-icon>
          <span>Clike to Github</span>
        </v-btn>
        <v-btn
          v-if="links.demo"
          :href="links.demo"
          target="_blank"
          elevation="2"
        >
          <v-icon>mdi-camera-iris</v-icon>
          <span>Check Demo Online</span>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["desc", "tags", "links"],
};
</script>

<style lang="scss" scoped>
.links {
  a {
    margin: 0.5rem 1rem;
    span {
      padding-left: 0.5rem;
    }
  }
}
</style>

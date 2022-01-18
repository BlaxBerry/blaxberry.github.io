<template>
  <v-col v-show="details">
    <!-- title -->
    <h1 class="text-en">Project Details</h1>
    <br />
    <!-- expansion-panels -->
    <v-row justify="center">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, index) in details" :key="index">
          <v-expansion-panel-header>
            <h3>{{ index + 1 }}. {{ item.title }}</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            class="text-justify text-jp pure-text-content"
          >
            {{ item.info }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <br />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["details"],
};
</script>

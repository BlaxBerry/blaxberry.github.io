<template>
  <v-row justify="center">
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, index) in list" :key="index">
        <v-expansion-panel-header>
          <h3>{{ index + 1 }}. {{ item.title }}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.info }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  props: ["list"],
};
</script>

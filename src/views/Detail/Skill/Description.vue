<template>
  <v-container id="description">
    <v-card justify="center">
      <!-- 1. skill desc -->
      {{ skill.name }}
      <!-- 2. tech tasks list -->
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="(item, index) in skill.techTasks"
          :key="index"
        >
          <v-expansion-panel-header>
            <v-img
              v-for="(pic, index) in item.pic"
              :key="index"
              :src="require(`@/assets/images/${pic}`)"
              max-width="50"
              class="mx-1"
            ></v-img>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item v-for="(list, index) in item.desc" :key="index">
              {{ list }}
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["skill"],
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-col>
    <!-- title -->
    <h1 class="text-en">Description:</h1>
    <br />
    <v-divider></v-divider>

    <!-- content -->
    <v-sheet
      class="text-jp py-3 px-4"
      v-for="(item, index) in skillDescription"
      :key="index"
    >
      {{ item }}
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  props: ["skillDescription"],
};
</script>

<style></style>

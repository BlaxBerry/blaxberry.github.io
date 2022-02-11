<template>
  <v-col>
    <!-- title -->
    <h1 class="text-en">Description:</h1>

    <!-- content -->
    <v-sheet
      class="text-jp text-center py-3 px-4"
      v-for="(item, index) in skillDescription"
      :key="index"
    >
      {{ item }}
    </v-sheet>

    <br />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["skillDescription"],
};
</script>

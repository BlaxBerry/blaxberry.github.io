<template>
  <v-col v-show="extra">
    <!-- title -->
    <h1 class="text-en">Extra Information ?</h1>
    <!-- <br /> -->

    <!-- content -->
    <p v-html="extra" class="text-jp pure-text-content" />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["extra"],
};
</script>

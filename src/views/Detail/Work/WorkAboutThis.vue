<template>
  <v-col>
    <!-- title -->
    <h1 class="text-en">About This Project</h1>
    
    <!-- <br /> -->
    <!-- Development period -->
    <!-- <p class="text-jp pure-text-content ma-0 pa-0" v-show="date">
      開発期間: &nbsp;
      <span v-show="date" v-text="date ? date[0] : ''" />
      ~
      <span v-show="date[1]" v-text="date ? date[1] : ''" />
    </p> -->

    <!-- content -->
    <p class="text-justify text-jp pure-text-content" v-html="desc" />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["desc", "date"],
};
</script>

<template>
  <v-col>
    <!-- title -->
    <h1 class="text-en">Images</h1>
    <br />
    <!-- lists -->
    <v-row v-if="images.length">
      <v-col
        v-for="(pic, i) in images"
        :key="i"
        :cols="workType == 'PC' ? 12 : 6"
        :sm="workType == 'PC' ? 6 : 4"
        :md="workType == 'PC' ? 4 : 2"
        :lg="workType == 'PC' ? 4 : 2"
      >
        <v-card>
          <v-img :src="pic" :lazy-src="pic" class="white" />
        </v-card>
      </v-col>
    </v-row>
    <br v-if="images.length" />

    <v-row v-else>
      <v-col>no images right now ...</v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: ["images", "workType"],
};
</script>

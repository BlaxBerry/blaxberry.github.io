<template>
  <v-col v-show="links">
    <!-- title -->
    <h1 class="text-en">Links</h1>
    <br />
    <!-- links -->
    <v-row class="d-flex">
      <v-col
        v-for="(linkItem, i) in links"
        :key="i"
        cols="12"
        sm="4"
        md="3"
        lg="2"
      >
        <!-- icon -->
        <v-icon x-large color="blue-grey">
          {{ linkItem.icon }}
        </v-icon>
        <!-- button -->
        <v-btn
          :href="linkItem.link"
          target="_blank"
          color="blue-grey"
          class="ml-3"
          elevation="2"
          dark
          rounded
          depressed
        >
          {{ linkItem.name }}
        </v-btn>
      </v-col>
    </v-row>
    <br />
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ["links"],
};
</script>


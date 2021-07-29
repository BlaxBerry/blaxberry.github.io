<template>
  <div id="detail-skill-desctiption">
    <v-card
      class="pa-2 d-flex flex-column flex-sm-row justify-center align-center"
      tile
    >
      <!-- :src="require(`@/assets/images/${pic}`)" -->
      <v-img
        :src="require(`@/assets/images/${pic}`)"
        lazy-src="@/assets/images/_lazyloading.gif"
        max-width="150"
      ></v-img>
      <div class="pa-5">
        <v-card-title class="text-h4 font-weight-black">{{
          name
        }}</v-card-title>
        <v-card-text>{{ desc }}</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["name", "pic", "desc"],
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="detail-skill-desctiption">
    <v-card
      class="px-2 py-5 d-flex flex-column flex-sm-row justify-center align-center"
      tile
    >
      <!-- :src="require(`@/assets/images/${pic}`)" -->
      <v-img
        class="ml-10"
        :src="require(`@/assets/images/${skill.pic}`)"
        lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
        max-width="150"
      ></v-img>
      <div class="pa-5">
        <v-card-title class="text-h5 font-weight-black d-flex justify-center">
          {{ skill.name }} 関連スキル
        </v-card-title>
        <v-card-text>{{ skill.main }}</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["skill"],
};
</script>

<style lang="scss" scoped></style>

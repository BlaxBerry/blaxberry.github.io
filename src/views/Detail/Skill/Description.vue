<template>
  <div id="detail-skill-desctiption">
    <div
      class="px-2 pt-5 px-sm-5 px-md-10 d-flex flex-column flex-sm-row justify-center align-center"
      tile
    >
      <v-img
        :src="require(`@/assets/images/${skill.pic}`)"
        lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
        max-width="100"
        min-width="100"
      ></v-img>
      <div class="p-5">
        <v-card-title class="text-h5 font-weight-black d-flex justify-center">
          {{ skill.name }} 関連スキル
        </v-card-title>
        <v-card-text class="ttext-caption text-sm-body-2 text-md-body-1">
          {{ skill.main }}
        </v-card-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"],
};
</script>

<style lang="scss" scoped></style>

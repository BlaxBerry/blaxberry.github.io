<template>
  <div class="CardSkills pb-5">
    <v-row align="center" justify="start" class="mx-auto">
      <v-col
        v-for="(item, index) in list"
        :key="index"
        class="pa-0 ma-1 ma-md-2"
        cols="2"
        sm="2"
        md="1"
      >
        <v-card elevation="4" @click="click(item)">
          <img :src="require(`../../assets/images/${item.pic}`)" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    click(skillItem) {
      clearTimeout(timer);
      let id = skillItem.id;
      let timer = setTimeout(() => {
        // send params to detail page
        this.$router.push({
          path: "/detail/skill",
          query: {
            id,
          },
        });
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.CardSkills {
  display: flex;
  flex-wrap: wrap;
  .v-card {
    cursor: pointer;
    text-align: center;
  }
}
img {
  width: 100%;
  display: block;
}
</style>

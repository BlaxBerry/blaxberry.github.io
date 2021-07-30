<template>
  <div class="CardSkills pb-5">
    <v-row align="center" justify="start">
      <v-col v-for="(item, index) in list" :key="index" class="pa-0" cols="3" sm="2" md="1">
        <v-card elevation="2" @click="click(item)">
          <v-img
            :src="require(`../../assets/images/${item.pic}`)"
            lazy-src="@/assets/images/_lazyloading.gif"
          ></v-img>
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
      let name = skillItem.id;
      let timer = setTimeout(() => {
        // send params to detail page
        this.$router.push({
          path: "/detail/skill",
          query: {
            name,
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
    margin: 10px;
  }
}
</style>

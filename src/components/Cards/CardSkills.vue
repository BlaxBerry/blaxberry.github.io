<template>
  <div class="CardSkills">
    <v-card
      max-width="80"
      min-width="80"
      elevation="2"
      v-for="(item, index) in list"
      :key="index"
      @click="click(item)"
    >
      <v-img
        :src="require(`../../assets/images/${item.pic}`)"
        lazy-src="@/assets/images/_lazyloading.gif"
        min-width="80"
        max-width="80"
      ></v-img>
    </v-card>
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

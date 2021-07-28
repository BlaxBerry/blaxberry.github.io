<template>
  <v-container>
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
          min-width="80"
        ></v-img>
        <span>{{ item.name }}</span>
      </v-card>
    </div>
  </v-container>
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
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  //   background-color: turquoise;
  .v-card {
    margin: 1rem;
    cursor: pointer;
    text-align: center;
    // background-color: pink;
  }
}
</style>

<template>
  <v-container>
    <div class="CardSkills">
      <v-card
        max-width="80"
        elevation="2"
        v-for="(item, index) in list"
        :key="index"
        @click="click(item)"
      >
        <v-img :src="require(`../../assets/images/${item.pic}`)"></v-img>
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
      let name = skillItem.id

      // send params to detail page
      this.$router.push({
        path: "/detail/skill",
        query: {
          name,
        }
      });
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

<template>
  <div class="CardSkills pb-5">
    <v-row align="center" justify="start">
      <v-col
        v-for="(item, index) in list"
        :key="index"
        class="pa-0"
        cols="3"
        sm="2"
        md="2"
        lg="1"
      >
        <v-card
          elevation="4"
          max-width="100"
          max-height="100"
          @click="click(item)"
        >
          <v-img
            :src="require(`../../assets/images/${item.pic}`)"
            lazy-src="https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"
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
    margin: 10px;
  }
}
</style>

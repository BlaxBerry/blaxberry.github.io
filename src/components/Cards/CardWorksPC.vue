<template>
  <v-container>
    <div class="CardWorks">
      <v-row align="center" justify="start">
        <v-col
          max-width="200"
          v-for="(item, index) in list"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <div class="card">
            <v-card elevation="2" @click="click(item)">
              <v-img :src="item.mainPic"></v-img>
            </v-card>
            <v-card-text class="text-no-wrap font-weight-bold">{{
              item.name
            }}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    click(item) {
      clearTimeout(timer);
      let timer = setTimeout(() => {
        console.log(item.id,item.name);

        // send params to detail page
        this.$router.push({
          path: "/detail/work",
          query: {
            id: item.id,
          },
        });
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
// .container {
//   background-color: skyblue !important;
// }
// .CardWorks {
//   background-color: turquoise !important;
// }
.card {
  text-align: center;
  font-weight: 700 !important;
}
</style>

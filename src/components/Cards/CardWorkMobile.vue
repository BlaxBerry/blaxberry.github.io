<template>
  <div class="CardWorksMobile pb-5">
    <v-row align="center" justify="center">
      <v-col
        v-for="(item, index) in list"
        :key="index"
        cols="6"
        sm="3"
        md="3"
        lg="2"
      >
        <v-card elevation="4" @click="click(item)">
          <v-img
            :src="item.mainPic"
            :lazy-src="require(`../../assets/loading/loading-mobile.png`)"
          ></v-img>
        </v-card>
        <v-card-text class="text-center text-no-wrap font-weight-bold">
          {{ item.name }}
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["list"],

  methods: {
    click(item) {
      clearTimeout(timer);
      let timer = setTimeout(() => {
        // console.log(item.type);

        // send params to detail page
        this.$router.push({
          path: "/detail/work",
          query: {
            id: item.id,
            type: item.type,
          },
        });
      }, 200);
    },
  },
};
</script>

<style scoped></style>

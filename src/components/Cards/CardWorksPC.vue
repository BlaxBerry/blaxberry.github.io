<template>
  <div class="CardWorksPC pb-5">
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
        <v-card elevation="4" @click="click(item)">
          <v-img :src="item.mainPic"></v-img>
        </v-card>
        <v-card-text
          v-show="item.mainPic"
          class="text-center text-no-wrap font-weight-bold"
          v-text="item.name"
        />
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
        // console.log(item.id, item.name);

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

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
</style>

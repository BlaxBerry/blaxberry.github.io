<template>
  <div>
    <!-- title -->
    <Title>
      <h1 slot="title1">Skills Stacks</h1>
      <h4 slot="title2">テクノロジースタックについて</h4>
    </Title>

    <!-- top skills  -->
    <small
      class="d-block my-2 pt-5 text-sm-center"
      v-text="'＊ 各スキルをクリックして、詳細をご確認ください。'"
    />
    <v-row class="px-2 my-0 justify-sm-center">
      <v-col
        v-for="(item, index) in list"
        :key="index"
        cols="2"
        sm="1"
        class="pa-1"
      >
        <v-card @click="clickItem(item)">
          <img :src="require(`@/assets/images/${item.pic}`)" />
        </v-card>
      </v-col>
    </v-row>

    <!-- bottom content -->
    <v-card>
      <v-list class="pa-sm-5">
        <v-list-item class="px-0 justify-center justify-sm-start">
          <v-list-item-avatar size="80" tile class="d-none d-sm-flex">
            <v-img :src="require(`@/assets/images/${content.pic}`)" />
          </v-list-item-avatar>
          <h2 v-text="content.name" />
        </v-list-item>

        <v-list-item class="d-block pa-2 px-4 pa-lg-5">
          <p
            v-for="(item, index) in content.desc"
            :key="index"
            class="text-caption text-sm-body-2 text-md-body-1 ma-0 mb-2 mb-md-5"
          >
            <b
              class="mr-1"
              v-text="content.desc.length > 1 ? index + 1 + '. ' : ''"
            />
            <span v-html="item" />
          </p>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
// components
import Title from "../../../components/Title/Title.vue";

export default {
  props: ["list"],
  components: { Title },
  data() {
    return {
      content: {
        name: "",
        pic: "",
      },
    };
  },
  methods: {
    clickItem(item) {
      this.content = item;
    },
  },

  watch: {
    list: {
      handler(newVal) {
        if (newVal) this.content = newVal[0];
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content-title {
  margin-left: 20% !important;
}
img {
  width: 100%;
  display: block;
}
</style>

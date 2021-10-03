<template>
  <div class="mb-10 pb-10">
    <!-- 1. title -->
    <Title>
      <h1 slot="title1">{{ work.name }}</h1>
      <h4 slot="title2">この作品について</h4>
    </Title>

    <!-- 2. tags -->
    <div class="my-5 d-flex justify-center flex-wrap">
      <v-hover v-for="(item, index) in work.keywords" :key="index">
        <v-chip class="ma-1 font-weight-black" dark small :color="item.color">
          {{ item.name }}
        </v-chip>
      </v-hover>
    </div>

    <!-- 3. swiper -->
    <SwiperMobile v-if="work.type == 'mobile'" :list="work.pics" />
    <SwiperPC v-if="work.type == 'pc'" :list="work.pics" />

    <!-- description -->
    <div
      class="pa-sm-5 pb-0 pb-sm-0 text-caption text-sm-body-2 text-md-body-1"
    >
      <!-- 4. time -->
      <v-card-subtitle class="py-0">
        <b v-text="'開発期間：'" />
        <b
          class="red--text text--lighten-2"
          v-text="work.time ? work.time : '確認できず...'"
        />
      </v-card-subtitle>

      <!-- 5. desc -->
      <v-card-subtitle class="text-caption text-sm-body-2 text-md-body-1">
        <!-- 5.1 main desc -->
        <p class="mb-4 mb-md-5" v-html="work.desc" />
        <!-- 5.2 detail desc list -->
        <v-list-item
          two-line
          v-for="list,index in work.function"
          :key="index"
          class="pa-0 mb-2"
        >
          <v-list-item-content class="pa-0">
            <!-- list title -->
            <v-list-item-title
              class="mb-2 cyan--text text--darken-3"
              v-text="'- ' + list.name + ' -'"
              v-if="list.name"
            />
            <!-- list item content -->
            <p
              class="text-caption text-md-body-2 mb-1 mb-sm-2 grey--text"
              v-for="(item, index) in list.val"
              :key="index"
            >
              <b
                v-html="list.val.length > 1 ? index + 1 + '.' : '&nbsp;'"
                class="mr-1 mr-sm-2"
              />
              <span v-html="item" />
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-card-subtitle>

      <!-- 5. link -->
      <div class="px-5">
        <v-btn
          block
          v-for="item in work.links"
          :key="item.to"
          :href="item.to"
          :color="item.color"
          target="_blank"
          elevation="2"
          dark
          class="py-6 mb-2 darken-2 white--text font-weight-black"
        >
          <v-icon size="2rem" v-text="item.icon" />
          <span class="ml-1 ml-md-5" v-text="item.name" />
        </v-btn>
        <v-btn
          v-if="work.name == 'Portfolio 4.0'"
          block
          to="/versions"
          color="purple"
          elevation="2"
          dark
          class="py-6 darken-2 white--text font-weight-black"
        >
          <v-icon size="2rem" v-text="'mdi-trending-up'" />
          <span class="ml-1 ml-md-5" v-text="'Versions Up'" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// components
import Title from "../../../components/Title/Title.vue";
import SwiperMobile from "./WorkSwiperMobile.vue";
import SwiperPC from "./WorkSwiperPC.vue";

export default {
  props: ["work"],
  components: { Title, SwiperMobile, SwiperPC },
  data() {
    return {};
  },
};
</script>

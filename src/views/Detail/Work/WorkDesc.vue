<template>
  <div>
    <!-- 1. title -->
    <Title class="pt-0">
      <h1 slot="title1">{{ work.name }}</h1>
      <h4 slot="title2">この作品について</h4>
    </Title>

    <!-- 2. tags -->
    <div class="my-4 d-flex justify-center flex-wrap">
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
    <div class="pa-sm-5 pb-0 pb-sm-0">
      <!-- 4. time -->
      <v-card-subtitle class="py-0">
        <b v-text="'開発期間：'" />
        <b
          class="red--text text--lighten-2"
          v-text="work.time ? work.time : '確認できず...'"
        />
      </v-card-subtitle>

      <!-- 5. main desc -->
      <v-card-subtitle>
        {{ work.desc }}
      </v-card-subtitle>

      <!-- 5. link -->
      <div>
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
import SwiperPC from './WorkSwiperPC.vue'

export default {
  props: ["work"],
  components: { Title, SwiperMobile,SwiperPC },
  data() {
    return {};
  },
};
</script>

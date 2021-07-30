<template>
  <!-- 纵向 nav smooth scroll-->
  <v-list>
    <v-list-item
      class="px-1"
      v-for="(item, index) in SmoothScrollAnchors"
      :key="index"
    >
      <v-btn>
        <a
          :href="item.anchorID"
          class="py-2"
          @click.stop="clickSmoothScroll('#' + item.anchorID)"
        >
          <v-icon large>{{ item.icon }}</v-icon>
          <span> {{ item.name }}</span>
        </a>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["SmoothScrollAnchors"],

  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 20px;
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>

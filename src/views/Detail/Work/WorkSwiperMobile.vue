<template>
  <v-sheet class="mx-auto" max-width="1000">
    <v-slide-group
      v-model="model"
      class="pa-4"
      mandatory
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(item, index) in list"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          class="ma-4 mobile-slide-card"
          height="400"
          width="220"
          @click="toggle"
        >
          <img :src="item.pic" :alt="item.name" />
          <v-row
            v-if="!active"
            class="fill-height mobile-slide-card-mask"
            align="center"
            justify="center"
          >
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: ["list"],
  data: () => ({
    model: null,
  }),
};
</script>

<style lang="scss">
.v-slide-group__content {
  justify-content: center;
}

.v-slide-group__next,
.v-slide-group__prev {
  min-width: 1.5rem !important;
  i {
    font-size: 5rem !important;
    color: #b0bec5 !important;
  }
  .v-icon--disabled {
    opacity: 0.1;
  }
}
.v-slide-group__next {
  transform: translateX(50%);
}
.v-slide-group__prev {
  transform: translateX(-50%);
}

.mobile-slide-card {
  position: relative !important;
  overflow: hidden;
}

.mobile-slide-card-mask {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 110% !important;
  height: 110% !important;
  z-index: 2 !important;
  // transition: 1s !important;
  background-color: rgba(0, 0, 0, 0.5);
}
.v-slide-item--active {
  .mobile-slide-card-mask {
    // transition: 1s !important;
    background-color: transparent !important;
  }
}
</style>

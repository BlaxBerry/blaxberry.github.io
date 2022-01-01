<template>
  <v-speed-dial
    v-model="fab"
    fixed
    top
    left
    direction="bottom"
    transition="scale-transition"
  >
    <template v-slot:activator>
      <!-- toggle list -->
      <v-btn v-model="fab" dark fab color="cyan darken-1">
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-menu
        </v-icon>
      </v-btn>
    </template>

    <!-- navigation list -->
    <v-tooltip right v-for="(item, index) in navItems" :key="index">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          :to="item.to"
          :elevation="CARD_ELEVATION"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large color="cyan darken-1">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span class="text-jp">{{ item.name }}</span>
    </v-tooltip>

    <!-- change theme -->
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          color="cyan darken-1"
          v-bind="attrs"
          v-on="on"
          @click="toggleTheme"
        >
          <v-icon large>
            {{ isDarkTheme ? "mdi-weather-sunny" : "mdi-weather-night" }}
          </v-icon>
        </v-btn>
      </template>
      <span class="text-jp">
        {{ isDarkTheme ? "Light Theme" : "Dark Theme" }}
      </span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
import navItems from "@/lib/Items/navigationList.js";
import { mapState } from "vuex";

export default {
  data: () => ({
    CARD_ELEVATION: 4,
    navItems,
    fab: false,
  }),

  computed: {
    ...mapState(["isDarkTheme"]),
  },

  methods: {
    toggleTheme() {
      this.$store.commit("toggleTheme", {
        isDarkTheme: !this.isDarkTheme,
        VM: this,
      });
    },
  },
};
</script>

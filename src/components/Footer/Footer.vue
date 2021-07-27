<template>
  <v-app>
    <v-footer padless absolute bottom>
      <v-card flat tile class="green lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            class="mx-4 white--text"
            icon
            large
            :href="icon.link"
          >
            <v-icon large>
              {{ icon.iconName }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <router-link to="/version"
            ><strong>Protofolio 4.0</strong> </router-link
          ><br />
          <small>
            Chen - {{ new Date().getFullYear() }}.
            {{ new Date().getMonth() }}
          </small>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { iconName: "mdi-twitter", link: "https://twitter.com/chenjiaxu333" },
      { iconName: "mdi-github", link: "https://github.com/BlaxBerry" },
      { iconName: "mdi-gmail", link: "mailto:chenjiaxu333@gmail.com" },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>

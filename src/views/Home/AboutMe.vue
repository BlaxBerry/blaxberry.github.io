<template>
  <div id="home-aboutme" class="full-page-session">
    <v-card
      elevation="2"
      outlined
      width="700"
      class="mx-auto pa-5 d-flex flex-column flex-sm-row justify-center align-center"
      tile
      min-height="200"
    >
      <v-avatar tile size="100">
        <img
          src="https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg"
          alt="chen"
        />
      </v-avatar>
      <div class="">
        <!-- small screen links-->
        <div class="links d-block d-sm-none text-center">
          <v-btn
            v-for="(item, index) in links"
            :key="index"
            :href="item.link"
            :color="item.color"
            class="ma-1"
            icon
            dark
          >
            <v-icon large>
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </div>
        <!-- infomation -->
        <p class="pl-5">
          I am <b>Chen.</b> An enthusiastic guy dreaming to be a Full Stack Web
          Enginner. Learning and Fighting everyday.
        </p>
        <!-- to profile page -->
        <v-btn block to="/profile">More Detail</v-btn>
      </div>
    </v-card>
    <!-- big screen links-->
    <div class="links mt-1 d-none d-sm-block">
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        :color="item.color"
        class="ma-1"
        dark
      >
        <v-icon large>
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/chenjiaxu333",
          color: "blue",
        },
        {
          name: "Github",
          icon: "mdi-github",
          link: "https://github.com/BlaxBerry",
          color: "grey darken-4",
        },
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/jiaxu.chen.96",
          color: "blue darken-4",
        },
        {
          name: "Gmail",
          icon: "mdi-gmail",
          link: "mailto:chenjiaxu333@gmail.com",
          color: "red",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#home-aboutme {
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

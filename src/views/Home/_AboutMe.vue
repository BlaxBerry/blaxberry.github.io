<template>
  <div id="home-aboutme" class="full-page-session">
    <!-- title -->
    <Title>
      <h1 slot="title1" style="fontSize:4rem">Welcome</h1>
    </Title>

    <v-container>
      <v-card
        elevation="2"
        outlined
        width="700"
        class="mx-auto pa-5 d-flex flex-column flex-sm-row justify-center align-center"
        tile
        min-height="200"
      >
        <v-avatar tile size="100" class="mr-4">
          <img
            src="https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg"
            alt="chen"
          />
        </v-avatar>
        <div class="">
          <!-- small screen links-->
          <div class="links d-block d-sm-none text-center ma-2">
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
          <v-card-text class="grey--text text--darken-4">
            Hello, I am Chen. Welcome to my Portfolio.
            Hope you will know more about me here. 
          </v-card-text>
          <!-- to profile page -->
          <v-btn block to="/profile" class="cyan darken-2 white--text font-weight-black">About Me</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  components: {
    Title,
  },

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
  background: url(../../assets/upload/bgk01.png) center no-repeat;
  background-size: cover;
  color: white;
  .v-card {
    border-radius: 1.2rem !important;
    background-color: rgba(250, 250, 250, 0.7);
    .v-card__text {
      font-weight: 700;
      font-size: 1rem;
      padding: 1rem 0;
      padding-left: 1rem;
    }
  }
}
</style>

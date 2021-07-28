<template>
  <v-container id="about-me" class="text-center">
    <v-avatar tile size="100">
      <img
        src="https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg"
        alt="chen"
      />
    </v-avatar>
    sad

    <div class="links">
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        :color="item.color"
        target="_blank"
        elevation="2"
        class="ma-1"
        icon
      >
        <v-icon large :color="item.color">{{ item.icon }}</v-icon>
      </v-btn>
    </div>
  </v-container>
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

<style></style>

<template>
  <v-footer padless class="green">
    <v-container>
      <div flat tile class="lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="(item, index) in links"
            :key="index"
            :href="item.link"
            :color="item.color"
            class="mx-4 white--text"
            fab
          >
            <v-icon large>
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="text-left white--text">
          このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
          もしこのサイトや私について何かコメントがありましたら、上記のリンクご利用ください。
          独自の開発していくうちに、自分の不足も認識しました。
          今後も必ず深く勉強して改善し、そして専門性を高め、
          一流のエンジニアを目指して、引き続き頑張っていきたいと思います。
        </v-card-text>

        <v-card-text class="text-right white--text">
          <router-link to="/versions"
            ><strong>Protofolio 4.0</strong> </router-link
          ><br />
          <small>
            Chen - {{ new Date().getFullYear() }}.
            {{ new Date().getMonth() }}
          </small>
        </v-card-text>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
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
  }),
};
</script>

<style lang="scss" scoped>
footer {
  margin-bottom: 60px;
}
</style>

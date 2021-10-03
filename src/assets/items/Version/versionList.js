const versionList = [
    {
        version: "4.0",
        time: "2021/07",
        desc:
            "色々な練習を重ねて、最後はVue-Router + Vuetifyを利用して、単一ページのSPAサイトを開発しました。そして静的なWebページではなく、Vue-Cliの中でAxiosを通じて/public /data に保存しされているJSONファイルからデータを読み込んで、画面上で展示或いは操作をします。",
        shortcoming: [],
        techStacks: [
            { name: "Vue2", icon: "vue.svg" },
            { name: "Vue-Cli", icon: "vue.svg" },
            { name: "Vue-Router", icon: "vue-router.svg" },
            { name: "Vuetify", icon: "vue-vuetify.svg" },
            { name: "Scss", icon: "sass.svg" },
            { name: "Axios", icon: "axios.svg" },
            { name: "JSON", icon: "json.svg" },
        ],
    },
    {
        version: "3.0",
        time: "2021/05",
        desc: "",
        shortcoming: [
            "他のWebページにジャンプするので、閲覧する体験が良くない。",
            "Ajaxを使わず、直接にJSONファイルのデータを各ページに導入するので、画面レンダリングする時間が増えてしまう。",
            "各種類の端末に応じるために、Media Queryを利用し、Lessでレイアウトを一々書くので、量も多いし開発のスピードに対して不満。",
            "振り返って調整する時は難しくなる。",
        ],
        techStacks: [
            { name: "Vue2", icon: "vue.svg" },
            { name: "Vue-Cli", icon: "vue.svg" },
            { name: "Media Query", icon: "css.svg" },
            { name: "less", icon: "less.svg" },
            { name: "JSON", icon: "json.svg" },
        ],
    },
    {
        version: "2.0",
        time: "2021/04",
        desc:
            "レスポンシブ開発するために、各端末(特に携帯端末)に応じて自動で表示が最適化されるように、Bootstrapを使いました。",
        shortcoming: [
            "静的なページのため、HTMLの量が多い。",
            "DOM操作するため、JSの量が多い。",
            "振り返って調整する時は難しくなる。",
            "開発のスピードに対して不満。",
        ],
        techStacks: [
            { name: "Bootstrap4", icon: "bootstrap.svg" },
            { name: "CSS3", icon: "css.svg" },
            { name: "jQuery", icon: "jquery.svg" },
            { name: "Webpack", icon: "webpack.svg" },
        ],
    },
    {
        version: "1.0",
        time: "2021/03",
        desc: "",
        shortcoming: [
            "携帯端末に対応できない。",
            "静的なページのため、HTMLの量が多い。",
            "開発のスピードやデザイン性などを確保できない。",
            "振り返って調整する時は難しくなる。",
        ],
        techStacks: [
            { name: "HTML5", icon: "html.svg" },
            { name: "CSS3", icon: "css.svg" },
            { name: "jQuery", icon: "jquery.svg" },
            { name: "Webpack", icon: "webpack.svg" },
        ],
    },
]

export default versionList
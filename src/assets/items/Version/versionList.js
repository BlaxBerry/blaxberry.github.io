const versionList = [
    {
        version: "4.0",
        time: "2021/07",
        desc:
            "現時点のバージョンは単一ページのSPAサイトで Vue-Router + Vuetifyを利用しました。<br/>静的なWebページではなく、Axiosを通じてJSONファイルからデータを読み込んで、画面上で展示或いは操作をします。<br/>ポロジェット開発により、今後ポートフォリオに検索フィルターやGitHubとの連携などの機能も導入する見込みです。",
        shortcoming: [],
        techStacks: [
            { name: "Vue2", icon: "vue.svg" },
            { name: "Vuex", icon: "vue-vuex.svg" },
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
        desc: "初めてフレームワークやコンポネートを使用してポートフォリオを開発しました。",
        shortcoming: [
            "Vue-Routerを使わず、DialogやAnimationなどを大量に使用した単一ページのため、体験がそんなに良くない。",
            "Asyncではなく直接にJSONファイルの全てのデータをページに導入するので、画面レンダリングする時間が増えてしまった。",
            "各種類の端末に応じるために、Media Query + Lessでレイアウトスタイルをいちいち書くので、開発スピードに不満。",
            "処理内容やスタイルの量が多くて、振り返って調整する時は難しくなる。",
        ],
        techStacks: [
            { name: "Vue2", icon: "vue.svg" },
            { name: "Vue-Cli", icon: "vue.svg" },
            // { name: "Media Query", icon: "css.svg" },
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
            { name: "Less", icon: "less.svg" },
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
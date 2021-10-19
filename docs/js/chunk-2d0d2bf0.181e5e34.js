(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2bf0"],{"5a8f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"versions"}},[n("v-container",[n("Title",[n("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v("Versions of Portfolio")]),n("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("ポートフォリオのバージョンアップ")])]),n("p",{staticClass:"py-5 text-caption text-sm-body-2 text-md-body-1",domProps:{textContent:t._s("この画面を通じて、ポートフォリオのバージョンアップや、今までの各バージョンで使用したスキル、そして以前のポートフォリオバージョンの問題点など、また開発に関する内容を確認することができます。")}}),n("div",{staticClass:"version-list mb-10"},[n("v-expansion-panels",t._l(t.versionList,(function(e,o){return n("v-expansion-panel",{key:o},[n("v-expansion-panel-header",{staticClass:"font-weight-black"},[t._v(" Version "),n("b",{class:0==o?"text-h6 pl-2 red--text":"pl-2 text-decoration-line-through",domProps:{textContent:t._s(e.version)}}),n("small",{staticClass:"text-right pr-2 primary--text",domProps:{textContent:t._s(e.time)}})]),n("v-expansion-panel-content",{staticClass:"pl-4"},[n("div",{staticClass:"d-flex flex-wrap",staticStyle:{fontSize:"12px"},attrs:{subheader:""}},t._l(e.techStacks,(function(e,o){return n("div",{key:o,staticClass:"d-flex flex-column ma-1",staticStyle:{"max-width":"60px"}},[n("v-card",{staticClass:"pa-1"},[n("v-img",{staticStyle:{"background-color":"white"},attrs:{src:s("7584")("./"+e.icon),"lazy-src":"https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif","max-height":"50","max-width":"50"}})],1),n("v-list-item-content",{staticClass:"py-1 text-no-wrap font-weight-black",domProps:{textContent:t._s(e.name)}})],1)})),0),e.desc?n("p",{staticClass:"desc py-4 text-caption text-sm-body-2 text-md-body-1",domProps:{innerHTML:t._s(e.desc)}}):t._e(),t._l(e.shortcoming,(function(e,s){return n("p",{key:e,staticClass:"shortcoming pa-2 mb-0 text-caption text-sm-body-2 text-md-body-1"},[n("b",[t._v(" "+t._s(s+1)+". ")]),t._v(" "+t._s(e)+" ")])}))],2)],1)})),1)],1)],1)],1)},o=[],i=s("5ce3"),a=[{version:"4.0",time:"2021/07",desc:"現時点のバージョンは単一ページのSPAサイトで Vue-Router + Vuetifyを利用しました。<br/>静的なWebページではなく、Axiosを通じてJSONファイルからデータを読み込んで、画面上で展示或いは操作をします。<br/>ポロジェット開発により、今後ポートフォリオに検索フィルターやGitHubとの連携などの機能も導入する見込みです。",shortcoming:[],techStacks:[{name:"Vue2",icon:"vue.svg"},{name:"Vuex",icon:"vue-vuex.svg"},{name:"Vue-Router",icon:"vue-router.svg"},{name:"Vuetify",icon:"vue-vuetify.svg"},{name:"Scss",icon:"sass.svg"},{name:"Axios",icon:"axios.svg"},{name:"JSON",icon:"json.svg"}]},{version:"3.0",time:"2021/05",desc:"初めてフレームワークやコンポネートを使用してポートフォリオを開発しました。",shortcoming:["Vue-Routerを使わず、DialogやAnimationなどを大量に使用した単一ページのため、体験がそんなに良くない。","Asyncではなく直接にJSONファイルの全てのデータをページに導入するので、画面レンダリングする時間が増えてしまった。","各種類の端末に応じるために、Media Query + Lessでレイアウトスタイルをいちいち書くので、開発スピードに不満。","処理内容やスタイルの量が多くて、振り返って調整する時は難しくなる。"],techStacks:[{name:"Vue2",icon:"vue.svg"},{name:"Vue-Cli",icon:"vue.svg"},{name:"less",icon:"less.svg"},{name:"JSON",icon:"json.svg"}]},{version:"2.0",time:"2021/04",desc:"レスポンシブ開発するために、各端末(特に携帯端末)に応じて自動で表示が最適化されるように、Bootstrapを使いました。",shortcoming:["静的なページのため、HTMLの量が多い。","DOM操作するため、JSの量が多い。","振り返って調整する時は難しくなる。","開発のスピードに対して不満。"],techStacks:[{name:"Bootstrap4",icon:"bootstrap.svg"},{name:"Less",icon:"less.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]},{version:"1.0",time:"2021/03",desc:"",shortcoming:["携帯端末に対応できない。","静的なページのため、HTMLの量が多い。","開発のスピードやデザイン性などを確保できない。","振り返って調整する時は難しくなる。"],techStacks:[{name:"HTML5",icon:"html.svg"},{name:"CSS3",icon:"css.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]}],c=a,r={components:{Title:i["a"]},data:function(){return{versionList:c}},mounted:function(){this.$parent.$parent.SmoothScrollAnchors=[]}},l=r,m=s("2877"),v=Object(m["a"])(l,n,o,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0d2bf0.181e5e34.js.map
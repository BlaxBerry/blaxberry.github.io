(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2bf0"],{"5a8f":function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"versions"}},[n("v-container",[n("Title",[n("h1",{attrs:{slot:"title1"},slot:"title1"},[s._v("Portfolio Versions")]),n("h4",{attrs:{slot:"title2"},slot:"title2"},[s._v("ポートフォリオのバージョンアップ")])]),n("p",{staticClass:"pt-10"},[s._v(" この画面でポートフォリオのバージョンアップ、今までの各バージョンで使用したスキル、そして以前のポートフォリオの問題点など、開発に関する内容を確認することができます。 ")]),n("div",{staticClass:"version-list my-10"},[n("v-expansion-panels",s._l(s.versionList,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"font-weight-black"},[s._v(" Version "),n("b",{class:0==i?"text-h6 pl-2 red--text":"pl-2"},[s._v(" "+s._s(t.version)+" ")]),n("small",{staticClass:"text-right pr-2 primary--text"},[s._v(s._s(t.time))])]),n("v-expansion-panel-content",{staticClass:"pl-4"},[n("div",{staticClass:"d-flex flex-wrap",staticStyle:{fontSize:"12px"},attrs:{subheader:""}},s._l(t.techStacks,(function(t,i){return n("div",{key:i,staticClass:"d-flex flex-column ma-1",staticStyle:{"max-width":"60px"}},[n("v-card",{staticClass:"pa-1"},[n("v-img",{attrs:{src:e("7584")("./"+t.icon),"lazy-src":"https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif","max-height":"60","max-width":"60"}})],1),n("v-list-item-content",{staticClass:"py-1 text-no-wrap"},[s._v(" "+s._s(t.name)+" ")])],1)})),0),n("small",{staticClass:"desc py-4"},[s._v(" "+s._s(t.desc)+" ")]),s._l(t.shortcoming,(function(t,e){return n("v-list-item-subtitle",{key:t,staticClass:"shortcoming ml-lg-15 pa-2"},[n("b",[s._v(s._s(e+1))]),s._v(". "+s._s(t)+" ")])}))],2)],1)})),1)],1)],1)],1)},i=[],a=e("5ce3"),c={components:{Title:a["a"]},data:function(){return{versionList:[{version:"4.0",time:"2021/07",desc:"色々な練習を重ねて、最後はVue-Router + Vuetifyを利用して、単一ページのSPAサイトを開発しました。そして静的なWebページではなく、Vue-Cliの中でAxiosを通じて/public /data に保存しされているJSONファイルからデータを読み込んで、画面上で展示或いは操作をします。",shortcoming:[],techStacks:[{name:"Vue-Cli",icon:"vue.svg"},{name:"Vue-Router",icon:"vue.svg"},{name:"Vuetify",icon:"vue-vuetify.svg"},{name:"Scss",icon:"sass.svg"},{name:"Axios",icon:"axios.svg"},{name:"JSON",icon:"json.svg"}]},{version:"3.0",time:"2021/05",desc:"",shortcoming:["他のWebページにジャンプするので、閲覧する体験が良くない。","Ajaxを使わず、直接にJSONファイルのデータを各ページに導入するので、画面レンダリングする時間が増えてしまう。","各種類の端末に応じるために、Media Queryを利用し、Lessでレイアウトを一々書くので、量も多いし開発のスピードに対して不満。","振り返って調整する時は難しくなる。"],techStacks:[{name:"Vue-Cli",icon:"vue.svg"},{name:"Media Query",icon:"css.svg"},{name:"less",icon:"less.svg"},{name:"JSON",icon:"json.svg"}]},{version:"2.0",time:"2021/04",desc:"レスポンシブ開発するために、各端末(特に携帯端末)に応じて自動で表示が最適化されるように、Bootstrapを使いました。",shortcoming:["静的なページのため、HTMLの量が多い。","DOM操作するため、JSの量が多い。","振り返って調整する時は難しくなる。","開発のスピードに対して不満。"],techStacks:[{name:"Bootstrap4",icon:"bootstrap.svg"},{name:"CSS3",icon:"css.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]},{version:"1.0",time:"2021/03",desc:"",shortcoming:["携帯端末に対応できない。","静的なページのため、HTMLの量が多い。","開発のスピードやデザイン性などを確保できない。","振り返って調整する時は難しくなる。"],techStacks:[{name:"HTML5",icon:"html.svg"},{name:"CSS3",icon:"css.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]}]}},mounted:function(){this.$parent.$parent.SmoothScrollAnchors=[]}},o=c,l=e("2877"),r=Object(l["a"])(o,n,i,!1,null,"1c55d3a5",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d2bf0.49d1dce5.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6936e11e"],{"010f":function(e,t,s){e.exports=s.p+"img/jquery.e8266b8c.svg"},"0489":function(e,t,s){e.exports=s.p+"img/php.964ee461.svg"},"0a43":function(e,t,s){e.exports=s.p+"img/axios.8fd94532.svg"},"0b12":function(e,t,s){e.exports=s.p+"img/react-ant-design.db100db9.svg"},1131:function(e,t,s){e.exports=s.p+"img/bootstrap.ec496b78.svg"},"29a1":function(e,t,s){e.exports=s.p+"img/webpack.f45f7bd9.svg"},4166:function(e,t,s){e.exports=s.p+"img/vue-elementui.69d7979a.svg"},4602:function(e,t,s){e.exports=s.p+"img/ruby.c06068f2.svg"},"4d5c":function(e,t,s){e.exports=s.p+"img/electron.e903b609.svg"},"4fc3":function(e,t,s){e.exports=s.p+"img/vue.9febcf8b.svg"},"56c1":function(e,t,s){e.exports=s.p+"img/json.06a7d8ba.svg"},"5a8f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"versions"}},[n("v-container",[n("Title",[n("h1",{attrs:{slot:"title1"},slot:"title1"},[e._v("Versions of Portfolio")]),n("h4",{attrs:{slot:"title2"},slot:"title2"},[e._v("ポートフォリオのバージョンアップ")])]),n("p",{staticClass:"py-5 text-caption text-sm-body-2 text-md-body-1",domProps:{textContent:e._s("この画面を通じて、ポートフォリオのバージョンアップや、今までの各バージョンで使用したスキル、そして以前のポートフォリオバージョンの問題点など、また開発に関する内容を確認することができます。")}}),n("div",{staticClass:"version-list mb-10"},[n("v-expansion-panels",e._l(e.versionList,(function(t,o){return n("v-expansion-panel",{key:o},[n("v-expansion-panel-header",{staticClass:"font-weight-black"},[e._v(" Version "),n("b",{class:0==o?"text-h6 pl-2 red--text":"pl-2 text-decoration-line-through",domProps:{textContent:e._s(t.version)}}),n("small",{staticClass:"text-right pr-2 primary--text",domProps:{textContent:e._s(t.time)}})]),n("v-expansion-panel-content",{staticClass:"pl-4"},[n("div",{staticClass:"d-flex flex-wrap",staticStyle:{fontSize:"12px"},attrs:{subheader:""}},e._l(t.techStacks,(function(t,o){return n("div",{key:o,staticClass:"d-flex flex-column ma-1",staticStyle:{"max-width":"60px"}},[n("v-card",{staticClass:"pa-1"},[n("v-img",{staticStyle:{"background-color":"white"},attrs:{src:s("7584")("./"+t.icon),"lazy-src":"https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif","max-height":"50","max-width":"50"}})],1),n("v-list-item-content",{staticClass:"py-1 text-no-wrap font-weight-black",domProps:{textContent:e._s(t.name)}})],1)})),0),t.desc?n("p",{staticClass:"desc py-4 text-caption text-sm-body-2 text-md-body-1",domProps:{innerHTML:e._s(t.desc)}}):e._e(),e._l(t.shortcoming,(function(t,s){return n("p",{key:t,staticClass:"shortcoming pa-2 mb-0 text-caption text-sm-body-2 text-md-body-1"},[n("b",[e._v(" "+e._s(s+1)+". ")]),e._v(" "+e._s(t)+" ")])}))],2)],1)})),1)],1)],1)],1)},o=[],i=s("5ce3"),c=[{version:"4.0",time:"2021/07",desc:"現時点のバージョンは単一ページのSPAサイトで Vue-Router + Vuetifyを利用しました。<br/>静的なWebページではなく、Axiosを通じてJSONファイルからデータを読み込んで、画面上で展示或いは操作をします。<br/>ポロジェット開発により、今後ポートフォリオに検索フィルターやGitHubとの連携などの機能も導入する見込みです。",shortcoming:[],techStacks:[{name:"Vue2",icon:"vue.svg"},{name:"Vuex",icon:"vue-vuex.svg"},{name:"Vue-Router",icon:"vue-router.svg"},{name:"Vuetify",icon:"vue-vuetify.svg"},{name:"Scss",icon:"sass.svg"},{name:"Axios",icon:"axios.svg"},{name:"JSON",icon:"json.svg"}]},{version:"3.0",time:"2021/05",desc:"初めてフレームワークやコンポネートを使用してポートフォリオを開発しました。",shortcoming:["Vue-Routerを使わず、DialogやAnimationなどを大量に使用した単一ページのため、体験がそんなに良くない。","Asyncではなく直接にJSONファイルの全てのデータをページに導入するので、画面レンダリングする時間が増えてしまった。","各種類の端末に応じるために、Media Query + Lessでレイアウトスタイルをいちいち書くので、開発スピードに不満。","処理内容やスタイルの量が多くて、振り返って調整する時は難しくなる。"],techStacks:[{name:"Vue2",icon:"vue.svg"},{name:"Vue-Cli",icon:"vue.svg"},{name:"less",icon:"less.svg"},{name:"JSON",icon:"json.svg"}]},{version:"2.0",time:"2021/04",desc:"レスポンシブ開発するために、各端末(特に携帯端末)に応じて自動で表示が最適化されるように、Bootstrapを使いました。",shortcoming:["静的なページのため、HTMLの量が多い。","DOM操作するため、JSの量が多い。","振り返って調整する時は難しくなる。","開発のスピードに対して不満。"],techStacks:[{name:"Bootstrap4",icon:"bootstrap.svg"},{name:"Less",icon:"less.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]},{version:"1.0",time:"2021/03",desc:"",shortcoming:["携帯端末に対応できない。","静的なページのため、HTMLの量が多い。","開発のスピードやデザイン性などを確保できない。","振り返って調整する時は難しくなる。"],techStacks:[{name:"HTML5",icon:"html.svg"},{name:"CSS3",icon:"css.svg"},{name:"jQuery",icon:"jquery.svg"},{name:"Webpack",icon:"webpack.svg"}]}],a=c,r={components:{Title:i["a"]},data:function(){return{versionList:a}},mounted:function(){this.$parent.$parent.SmoothScrollAnchors=[]}},g=r,v=s("2877"),p=Object(v["a"])(g,n,o,!1,null,null,null);t["default"]=p.exports},"5e01":function(e,t,s){e.exports=s.p+"img/markdown.31b13c1c.svg"},6984:function(e,t,s){e.exports=s.p+"img/rails.afe59a88.svg"},"6d4f":function(e,t,s){e.exports=s.p+"img/vue-vant.1e649bcf.svg"},7545:function(e,t,s){e.exports=s.p+"img/vue-vuetify.0c685315.svg"},7584:function(e,t,s){var n={"./axios.svg":"0a43","./bootstrap.svg":"1131","./css.svg":"8e27","./electron.svg":"4d5c","./git.svg":"824b","./github.svg":"917e","./html.svg":"968c","./javascript.svg":"a027","./jquery.svg":"010f","./json.svg":"56c1","./less.svg":"7f93","./markdown.svg":"5e01","./mongodb.svg":"f6d3","./mysql.svg":"8d8b","./nodejs-express.svg":"b5dc","./nodejs.svg":"79b9","./npm.svg":"ba93","./php.svg":"0489","./postgresql.svg":"7758","./rails.svg":"6984","./react-ant-design.svg":"0b12","./react-create-creat-app.svg":"95d6","./react-materialui.svg":"ebb0","./react-router-dom.svg":"96d8","./react.svg":"830e","./redux.svg":"b4b5","./ruby.svg":"4602","./sass.svg":"f766","./typescript.svg":"8a68","./vue-ant-design.svg":"ae3c","./vue-elementui.svg":"4166","./vue-nuxt.svg":"dddf","./vue-router.svg":"b5bc","./vue-vant.svg":"6d4f","./vue-vite.svg":"d02b","./vue-vuepress.svg":"89fe","./vue-vuetify.svg":"7545","./vue-vuex.svg":"caab","./vue.svg":"4fc3","./webpack.svg":"29a1","./wordpress.svg":"8638","./yarn.svg":"7dd08"};function o(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="7584"},7758:function(e,t,s){e.exports=s.p+"img/postgresql.71dbe6bd.svg"},"79b9":function(e,t,s){e.exports=s.p+"img/nodejs.609fbeeb.svg"},"7dd08":function(e,t,s){e.exports=s.p+"img/yarn.3c1e42f6.svg"},"7f93":function(e,t,s){e.exports=s.p+"img/less.341f0ab0.svg"},"824b":function(e,t,s){e.exports=s.p+"img/git.3bf44157.svg"},"830e":function(e,t,s){e.exports=s.p+"img/react.16975bcc.svg"},8638:function(e,t,s){e.exports=s.p+"img/wordpress.40295900.svg"},"89fe":function(e,t,s){e.exports=s.p+"img/vue-vuepress.aa3931ef.svg"},"8a68":function(e,t,s){e.exports=s.p+"img/typescript.cb6bec97.svg"},"8d8b":function(e,t,s){e.exports=s.p+"img/mysql.c02ade79.svg"},"8e27":function(e,t,s){e.exports=s.p+"img/css.2b997854.svg"},"917e":function(e,t,s){e.exports=s.p+"img/github.589f25ab.svg"},"95d6":function(e,t,s){e.exports=s.p+"img/react-create-creat-app.ab2189d2.svg"},"968c":function(e,t,s){e.exports=s.p+"img/html.5048dffe.svg"},"96d8":function(e,t,s){e.exports=s.p+"img/react-router-dom.92535468.svg"},a027:function(e,t,s){e.exports=s.p+"img/javascript.8a5d187b.svg"},ae3c:function(e,t,s){e.exports=s.p+"img/vue-ant-design.0f102d1c.svg"},b4b5:function(e,t,s){e.exports=s.p+"img/redux.bdfc1704.svg"},b5bc:function(e,t,s){e.exports=s.p+"img/vue-router.920a0db1.svg"},b5dc:function(e,t,s){e.exports=s.p+"img/nodejs-express.43b063b0.svg"},ba93:function(e,t,s){e.exports=s.p+"img/npm.7f8878d9.svg"},caab:function(e,t,s){e.exports=s.p+"img/vue-vuex.bc3a5695.svg"},d02b:function(e,t,s){e.exports=s.p+"img/vue-vite.1821c958.svg"},dddf:function(e,t,s){e.exports=s.p+"img/vue-nuxt.7a4877fb.svg"},ebb0:function(e,t,s){e.exports=s.p+"img/react-materialui.bddc8e23.svg"},f6d3:function(e,t,s){e.exports=s.p+"img/mongodb.35ebddae.svg"},f766:function(e,t,s){e.exports=s.p+"img/sass.2dfd41e1.svg"}}]);
//# sourceMappingURL=chunk-6936e11e.0824f562.js.map
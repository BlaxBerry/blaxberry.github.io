(function(t){function e(e){for(var s,r,c=e[0],l=e[1],i=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-6acbc725":"6ee2c7bd","chunk-08297c81":"da96b375","chunk-4ec0fe4a":"e2b004d8","chunk-61c73737":"4afcee35","chunk-686ce4fc":"e863c5fc"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=a[t]=[e,s]}));e.push(n[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var i=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,n[1](i)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13ec":function(t,e,n){},3394:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"app"}},[n("NavRoutes"),n("router-view"),n("Footer")],1)])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-speed-dial",{attrs:{fixed:"",top:"",left:"",direction:"bottom",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{dark:"",fab:"",color:"cyan darken-1"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",[t._v(" mdi-close ")]):n("v-icon",[t._v(" mdi-menu ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._l(t.navItems,(function(e,s){return n("v-tooltip",{key:s,attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,o=s.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",to:e.to,elevation:t.CARD_ELEVATION}},"v-btn",o,!1),a),[n("v-icon",{attrs:{large:"",color:"cyan darken-1"}},[t._v(" "+t._s(e.icon)+" ")])],1)]}}],null,!0)},[n("span",{staticClass:"text-jp"},[t._v(t._s(e.name))])])})),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"cyan darken-1"},on:{click:t.toggleTheme}},"v-btn",a,!1),s),[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.isDarkTheme?"mdi-weather-sunny":"mdi-weather-night")+" ")])],1)]}}])},[n("span",{staticClass:"text-jp"},[t._v(" "+t._s(t.isDarkTheme?"Light Theme":"Dark Theme")+" ")])])],2)},c=[],l=n("5530"),i=[{name:"Home",icon:"mdi-home",to:"/",color:"teal"},{name:"Skills",icon:"mdi-hexagon-multiple",to:"/skills",color:""},{name:"Works",icon:"mdi-cards",to:"/works",color:"brown"}],u=n("2f62"),f={data:function(){return{CARD_ELEVATION:4,navItems:i,fab:!1}},computed:Object(l["a"])({},Object(u["b"])(["isDarkTheme"])),methods:{toggleTheme:function(){this.$store.commit("toggleTheme",{isDarkTheme:!this.isDarkTheme,VM:this})}}},d=f,m=n("2877"),p=Object(m["a"])(d,r,c,!1,null,null,null),v=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background-pic full-screen-block"},[n("div",{staticClass:"cover-mask"},[n("v-container",{staticClass:"text-center"},[n("Title",[n("h2",{staticClass:"text-en",attrs:{slot:"first"},slot:"first"},[t._v("Thanks for Watching")]),n("h5",{staticClass:"text-jp",attrs:{slot:"second"},slot:"second"},[t._v(" 最後までご覧頂き、心より感謝致します ")])]),n("div",[n("div",{staticClass:"text-jp py-10 pure-text-content text-justify text-sm-center"},[t._v(" このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" もし何かコメントがありましたら、下記のリンクご利用ください。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" 開発していくうちに自分の不足も認識しました。今後も必ず深く勉強して改善し、専門性も高め、 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" 一流のエンジニアを目指して、引き続き頑張っていきたいと思います。 ")]),n("div",t._l(t.FOOTER_LINK_BTNS,(function(e,s){return n("v-btn",{key:s,attrs:{icon:"",large:"",dark:"",href:e.href,target:"_blank"}},[n("v-icon",[t._v(t._s(e.icon))])],1)})),1)])],1),n("div",{staticClass:"copyright text-center py-2"},[n("v-card-text",{staticClass:"py-0"},[n("h3",{staticClass:"font-weight-black text-en"},[n("small",{staticClass:"font-italic text-jp"},[t._v("© 2021")]),t._v(" Chen ")])])],1)],1)])},b=[],k=[{message:"ID: @chenjiaxu333",icon:"mdi-twitter",href:"https://twitter.com/chenjiaxu333"},{message:"ID: BlaxBerry",icon:"mdi-github",href:"https://github.com/BlaxBerry"}],_=n("b464"),x={components:{Title:_["a"]},data:function(){return{FOOTER_LINK_BTNS:k}}},g=x,y=(n("a6de"),Object(m["a"])(g,h,b,!1,null,"838af6fc",null)),C=y.exports,j={components:{NavRoutes:v,Footer:C},mounted:function(){this.$vuetify.theme.dark=this.$store.state.isDarkTheme}},T=j,w=Object(m["a"])(T,a,o,!1,null,null,null),O=w.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[t._m(0),n("HomeAbout"),n("HomeSkills"),n("HomeWorks")],1)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-background-pic full-screen-block"},[n("div",[n("h1",{staticClass:"text-center text-en"},[t._v("Welcome")]),n("h2",{staticClass:"text-center text-en"},[t._v("Chen's Portfolio")])])])}],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-skills full-screen-block"},[n("div",{staticClass:"cover-mask"},[n("v-container",[n("Title",[n("h1",{staticClass:"text-center text-en",attrs:{slot:"first"},slot:"first"},[t._v("Skills")]),n("h3",{staticClass:"text-center text-jp",attrs:{slot:"second"},slot:"second"},[t._v("スキルについて")])]),n("p",{staticClass:"text-justify text-sm-center text-jp py-10 pure-text-content "},[t._v(" フロントからバックエンドまで幅広くスキルアップに取り組んできました。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" 広く浅くではありますが、今後も幅広い領域に挑戦し、オールラウンドに対応できるように頑張りたいと考えています。 ")]),n("div",{staticClass:"d-flex flex-column justify-center align-center text-jp"},[n("span",[t._v("全てのスキルをご確認")]),n("v-btn",{staticClass:"ma-4",attrs:{outlined:"",color:"white",to:"/skills"}},[t._v(" More ")])],1)],1)],1)])},$=[],I={components:{Title:_["a"]}},N=I,A=(n("f9f6"),Object(m["a"])(N,P,$,!1,null,null,null)),H=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"full-screen-block"},[n("Title",[n("h1",{staticClass:"text-center text-en",attrs:{slot:"first"},slot:"first"},[t._v("About This")]),n("h3",{staticClass:"text-center text-jp",attrs:{slot:"second"},slot:"second"},[t._v("このサイトについて")])]),n("p",{staticClass:"text-justify text-sm-center text-jp py-10 pure-text-content"},[t._v(" ここは Chen のポートフォリオサイトです。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" これまでに手がけた作品や、身につけたスキルをまとめています。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。 ")])],1)},M=[],W={components:{Title:_["a"]}},B=W,R=Object(m["a"])(B,L,M,!1,null,null,null),F=R.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"full-screen-block"},[n("Title",[n("h1",{staticClass:"text-center text-en",attrs:{slot:"first"},slot:"first"},[t._v("Works")]),n("h3",{staticClass:"text-center text-jp",attrs:{slot:"second"},slot:"second"},[t._v("作品集について")])]),n("p",{staticClass:"text-justify text-sm-center text-jp py-10 pure-text-content"},[t._v(" フロントからバックエンドまで幅広く練習してきました。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" 今後もさらなる努力をしてより良い作品を提供して行きたいと思います。 "),n("br",{staticClass:"d-none d-sm-block"}),t._v(" これからポロジェットに携わりながら、作品集を不定期に更新します。 ")]),n("div",{staticClass:"d-flex flex-column justify-center align-center text-jp"},[n("span",[t._v("今までの作品集をご確認")]),n("v-btn",{staticClass:"ma-4",attrs:{outlined:"",dark:"",color:"cyan darken-1",to:"/works"}},[t._v(" More ")])],1)],1)},J=[],K={components:{Title:_["a"]}},q=K,Y=Object(m["a"])(q,V,J,!1,null,null,null),z=Y.exports,G={components:{HomeAbout:F,HomeSkills:H,HomeWorks:z}},Q=G,U=(n("ab16"),Object(m["a"])(Q,E,D,!1,null,"2503b0a9",null)),X=U.exports;s["default"].use(S["a"]);var Z=new S["a"]({routes:[{path:"/",component:X},{path:"*",component:X},{path:"/home",name:"Home",component:X},{path:"/skills",name:"Skills",component:function(){return Promise.all([n.e("chunk-6acbc725"),n.e("chunk-08297c81")]).then(n.bind(null,"b1e4"))}},{path:"/works",name:"Works",component:function(){return Promise.all([n.e("chunk-6acbc725"),n.e("chunk-4ec0fe4a")]).then(n.bind(null,"1b76b"))}},{path:"/detail/skill",name:"SkillDetail",component:function(){return Promise.all([n.e("chunk-6acbc725"),n.e("chunk-686ce4fc")]).then(n.bind(null,"24a1"))}},{path:"/detail/work",name:"WorkDetail",component:function(){return Promise.all([n.e("chunk-6acbc725"),n.e("chunk-61c73737")]).then(n.bind(null,"182d"))}}]});Z.beforeEach((function(t,e,n){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,n()}));var tt=Z;s["default"].use(u["a"]);var et=new u["a"].Store({state:{isDarkTheme:JSON.parse(localStorage.getItem("darkmodel"))},mutations:{toggleTheme:function(t,e){t.isDarkTheme=e.isDarkTheme,e.VM.$vuetify.theme.dark=e.isDarkTheme,e.isDarkTheme?localStorage.setItem("darkmodel",!0):localStorage.setItem("darkmodel",!1)}},actions:{},modules:{}}),nt=(n("3394"),n("8e1f"),n("ce5b")),st=n.n(nt),at=(n("bf40"),n("5363"),n("e956")),ot=n.n(at),rt=n("0a63"),ct=n.n(rt),lt=n("caf9"),it=n("620d"),ut=n.n(it);s["default"].config.productionTip=!1,s["default"].use(st.a);e["default"]=new st.a({});s["default"].use(ot.a),s["default"].use(ct.a),s["default"].use(lt["a"],{preLoad:1.3,loading:ut.a,attempt:1}),new s["default"]({router:tt,store:et,vuetify:new st.a,render:function(t){return t(O)}}).$mount("#app")},"5cc5":function(t,e,n){"use strict";n("13ec")},"620d":function(t,e,n){t.exports=n.p+"img/loading-mobile.0172c01d.png"},"75c4":function(t,e,n){},"8e1f":function(t,e,n){},a6de:function(t,e,n){"use strict";n("f217")},ab16:function(t,e,n){"use strict";n("f105")},b464:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._t("first"),t._t("second"),n("br"),n("v-divider")],2)},a=[],o={},r=o,c=(n("5cc5"),n("2877")),l=Object(c["a"])(r,s,a,!1,null,null,null);e["a"]=l.exports},f105:function(t,e,n){},f217:function(t,e,n){},f9f6:function(t,e,n){"use strict";n("75c4")}});
//# sourceMappingURL=app.c9d684fb.js.map
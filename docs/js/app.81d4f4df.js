(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b5de6":"e9a2d3ea","chunk-2d0d2bf0":"23f95a7d","chunk-2d0e2532":"009f08b9","chunk-2d20f1b4":"0808fdf5","chunk-701bc7a2":"b68daae7","chunk-fdbf9116":"80e7c1c1"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-701bc7a2":1,"chunk-fdbf9116":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-2d0b5de6":"31d6cfe0","chunk-2d0d2bf0":"31d6cfe0","chunk-2d0e2532":"31d6cfe0","chunk-2d20f1b4":"31d6cfe0","chunk-701bc7a2":"2822c289","chunk-fdbf9116":"8f8c6b54"}[t]+".css",r=c.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){a[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",f.name="ChunkLoadError",f.type=i,f.request=a,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0023":function(t,e,n){},"010f":function(t,e,n){t.exports=n.p+"img/jquery.e8266b8c.svg"},"0872":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{staticClass:"d-flex justify-center px-4",attrs:{dark:"",absolute:"",bottom:""},model:{value:t.NavItemClickedDefault,callback:function(e){t.NavItemClickedDefault=e},expression:"NavItemClickedDefault"}},t._l(t.NavItems,(function(e,i){return n("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{value:e.name},on:{click:t.click}},[n("span",[t._v(t._s(e.name))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},a=[],r={data:function(){return{NavItems:[{name:"About Me",icon:"mdi-ghost",color:"red"},{name:"Skills",icon:"mdi-pickaxe",color:""},{name:"Works",icon:"mdi-bug",color:""},{name:"Contact",icon:"mdi-hail",color:""}],NavItemClickedDefault:"Contact"}},methods:{click:function(){var t=this;clearTimeout(e);var e=setTimeout((function(){t.NavItemClickedDefault="Contact"}),1e3)}}},s=r,o=(n("b133"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"574668c9",null);e["a"]=c.exports},"0a43":function(t,e,n){t.exports=n.p+"img/axios.8fd94532.svg"},"0b12":function(t,e,n){t.exports=n.p+"img/react-ant-design.03c6d68a.svg"},1131:function(t,e,n){t.exports=n.p+"img/bootstrap.ec496b78.svg"},"29a1":function(t,e,n){t.exports=n.p+"img/webpack.f45f7bd9.svg"},"2bde":function(t,e,n){t.exports=n.p+"img/gulp.31d2de3d.svg"},"2f8b":function(t,e,n){},"30ea":function(t,e,n){"use strict";n("5ca0")},4166:function(t,e,n){t.exports=n.p+"img/vue-elementui.076194ae.svg"},4602:function(t,e,n){t.exports=n.p+"img/ruby.c06068f2.svg"},"4ec3":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o}));var i=n("bc3a"),a=n.n(i),r=a.a.get("./data/skills.json"),s=a.a.get("./data/works.json"),o=a.a.get("./data/worksMobile.json")},"4fc3":function(t,e,n){t.exports=n.p+"img/vue.9febcf8b.svg"},"56c1":function(t,e,n){t.exports=n.p+"img/json.d2202c18.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"app"}},[n("NavLeft"),n("router-view"),n("Footer")],1)])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",attrs:{id:"nav-left"}},[n("v-menu",{attrs:{transition:"scroll-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",color:"primary",fab:""}},"v-btn",a,!1),i),[t._v(" Nav ")])]}}])},[n("v-list",t._l(t.NavItems,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-title",[n("v-btn",{attrs:{fab:"",to:e.to}},[n("v-icon",[t._v(t._s(e.icon))])],1)],1)],1)})),1)],1)],1)},o=[],c={data:function(){return{NavItems:[{Name:"Home",icon:"mdi-home",to:"/"},{Name:"Profile",icon:"mdi-account",to:"/profile"},{Name:"Skills",icon:"mdi-cards",to:"/skills"},{Name:"Works",icon:"mdi-rhombus-split",to:"/works"}]}}},l=c,u=(n("a3c5"),n("2877")),f=Object(u["a"])(l,s,o,!1,null,"bd208df2",null),d=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"green",attrs:{padless:""}},[n("v-container",[n("Title",[n("h1",{staticClass:"title1 white--text",attrs:{slot:"title1"},slot:"title1"},[t._v("Thanks for Watching")]),n("h4",{staticClass:"title2 white--text",attrs:{slot:"title2"},slot:"title2"},[t._v(" 最後までご覧頂き、心より感謝致します ")])]),n("div",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[n("v-card-text",t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{href:e.link,color:e.color,fab:""}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),n("v-card-text",{staticClass:"text-left white--text"},[t._v(" このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。 もしこのサイトや私について何かコメントがありましたら、上記のリンクご利用ください。 独自の開発していくうちに、自分の不足も認識しました。 今後も必ず深く勉強して改善し、そして専門性を高め、 一流のエンジニアを目指して、引き続き頑張っていきたいと思います。 ")]),n("v-card-text",{staticClass:"text-right white--text"},[n("v-btn",{staticClass:"purple darken-2 text-center white--text",attrs:{to:"/versions"}},[t._v("Version 4.0 "),n("v-badge",{staticClass:"font-weight-black",attrs:{color:"red","offset-x":"0","offset-y":"-5",content:"4"}})],1),n("br"),n("small",[t._v(" CHEN - "+t._s((new Date).getFullYear())+". "+t._s((new Date).getMonth())+"    ")])],1)],1)],1)],1)},m=[],p=n("5ce3"),b={components:{Title:p["a"]},data:function(){return{links:[{name:"Twitter",icon:"mdi-twitter",link:"https://twitter.com/chenjiaxu333",color:"blue"},{name:"Github",icon:"mdi-github",link:"https://github.com/BlaxBerry",color:"grey darken-4"},{name:"Gmail",icon:"mdi-gmail",link:"mailto:chenjiaxu333@gmail.com",color:"red"}]}}},g=b,h=(n("9018"),Object(u["a"])(g,v,m,!1,null,"3447d334",null)),k=h.exports,x={components:{NavLeft:d,Footer:k}},_=x,y=(n("5c0b"),Object(u["a"])(_,a,r,!1,null,null,null)),w=y.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Top"),n("AboutMe"),n("v-container",[n("Skills"),n("Works"),n("NavBottom")],1)],1)},O=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-top"}})},E=[],N={},S=N,M=Object(u["a"])(S,T,E,!1,null,"c9d797e2",null),$=M.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full-page-session",attrs:{id:"home-aboutme"}},[n("Title",[n("h1",{staticStyle:{fontSize:"4rem"},attrs:{slot:"title1"},slot:"title1"},[t._v("Welcome")])]),n("v-container",[n("v-card",{staticClass:"mx-auto pa-5 d-flex flex-column flex-sm-row justify-center align-center",attrs:{elevation:"2",outlined:"",width:"700",tile:"","min-height":"200"}},[n("v-avatar",{staticClass:"mr-4",attrs:{tile:"",size:"100"}},[n("img",{attrs:{src:"https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg",alt:"chen"}})]),n("div",{},[n("div",{staticClass:"links d-block d-sm-none text-center ma-2"},t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"ma-1",attrs:{href:e.link,color:e.color,icon:"",dark:""}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),n("v-card-text",{staticClass:"pt-0"},[t._v(" I am Chen An enthusiastic guy dreaming to be a Full Stack Web Enginner. Learning and Fighting everyday. ")]),n("v-btn",{attrs:{block:"",to:"/profile"}},[t._v("About Me")])],1)],1)],1),n("div",{staticClass:"links mt-1 d-none d-sm-block"},t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"ma-1",attrs:{href:e.link,color:e.color,dark:""}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1)],1)},W=[],D={components:{Title:p["a"]},data:function(){return{links:[{name:"Twitter",icon:"mdi-twitter",link:"https://twitter.com/chenjiaxu333",color:"blue"},{name:"Github",icon:"mdi-github",link:"https://github.com/BlaxBerry",color:"grey darken-4"},{name:"Facebook",icon:"mdi-facebook",link:"https://www.facebook.com/jiaxu.chen.96",color:"blue darken-4"},{name:"Gmail",icon:"mdi-gmail",link:"mailto:chenjiaxu333@gmail.com",color:"red"}]}}},A=D,I=(n("d03d"),Object(u["a"])(A,P,W,!1,null,"1c035520",null)),q=I.exports,B=n("6e5f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-10 pb-15",attrs:{id:"home-works"}},[n("Title",[n("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Works")]),n("h4",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("一部の作品")])]),t._m(0),n("WorkCardsPC",{attrs:{list:t.list}}),n("WorkCardsMobile",{attrs:{list:t.listMobile}}),n("div",{staticClass:"text-center mt-2 px-10"},[n("b",[t._v("今までの作品集をご確認ください:")]),n("v-btn",{staticClass:"my-2",attrs:{block:"",to:"/works"}},[t._v("More Works")])],1)],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-5"},[n("p",[t._v(" 最初は静的なページから知り始めましたが、 その後Ajax技術やフレームワークのReact、Vueを学んで、 最近はサーバーやデータベース関連の知識などを日々頑張っており、 このような段階的に、独自の練習や開発の成果を残してきました。 不足のところも認識していますが、今後は必ず努力し、より良い作品を提供するために、引き続き勉強して行きたいと思います。 ")]),n("small",[t._v(" ＊ 各作品をクリックして、スキル詳細をご確認ください。 ")])])}],z=n("4ec3"),G=n("cdcc"),H=n("7ba6"),U={data:function(){return{list:[],listMobile:[]}},components:{Title:p["a"],WorkCardsPC:G["a"],WorkCardsMobile:H["a"]},created:function(){var t=this;z["b"].then((function(e){t.list=[e.data[0],e.data[1],e.data[3]],console.log(t.list)})),z["c"].then((function(e){t.listMobile=[e.data[0],e.data[1],e.data[3]],console.log(t.listMobile)}))}},J=U,V=Object(u["a"])(J,L,F,!1,null,"2904e2ef",null),Y=V.exports,K=n("0872"),R={components:{Top:$,AboutMe:q,Skills:B["a"],Works:Y,NavBottom:K["a"]}},Q=R,X=Object(u["a"])(Q,j,O,!1,null,"ad97249c",null),Z=X.exports;i["default"].use(C["a"]);var tt=[{path:"/",component:Z},{path:"*",component:Z},{path:"/home",name:"Home",component:Z},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-2d20f1b4").then(n.bind(null,"b1e4"))}},{path:"/works",name:"Works",component:function(){return n.e("chunk-2d0b5de6").then(n.bind(null,"1b76"))}},{path:"/detail/skill",name:"SkillDetail",component:function(){return n.e("chunk-2d0e2532").then(n.bind(null,"7de4"))}},{path:"/detail/work",name:"WorkDetail",component:function(){return n.e("chunk-701bc7a2").then(n.bind(null,"c53d"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-fdbf9116").then(n.bind(null,"8f06"))}},{path:"/versions",component:function(){return n.e("chunk-2d0d2bf0").then(n.bind(null,"5a8f"))}}],et=new C["a"]({routes:tt}),nt=et,it=n("ce5b"),at=n.n(it),rt=(n("bf40"),n("5363"),n("e956")),st=n.n(rt);i["default"].config.productionTip=!1,i["default"].use(at.a);e["default"]=new at.a({});i["default"].use(st.a),nt.beforeEach((function(t,e,n){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,n()})),new i["default"]({router:nt,vuetify:new at.a,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ca0":function(t,e,n){},"5ce3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-title"},[t._t("title1"),t._t("title2")],2)},a=[],r={},s=r,o=(n("e597"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"30dbedfa",null);e["a"]=c.exports},6076:function(t,e,n){},6984:function(t,e,n){t.exports=n.p+"img/rails.afe59a88.svg"},"6e5f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-10 pb-15",attrs:{id:"home-skills"}},[n("Title",[n("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v("Skills")]),n("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("スキルについて")])]),t._m(0),n("SkillCards",{attrs:{list:t.list}}),n("div",{staticClass:"text-center mt-2 px-10"},[n("b",[t._v("スキル詳細をご確認ください:")]),n("v-btn",{staticClass:"my-2",attrs:{block:"",to:"/skills"}},[t._v("Check More")])],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-5"},[n("p",[t._v(" 今まで身に付いているスキルは主にフロントエンドですが、 その不足も認識していますが、挑戦して開発経験を積んだ上で、 フロントエンドに関するスキルを幅広くスキルアップして、 いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。 ")]),n("small",[t._v(" ＊ 各スキルをクリックして、スキル詳細をご確認ください。 ")])])}],r=n("2909"),s=(n("99af"),n("4ec3")),o=n("5ce3"),c=n("b0ec"),l={data:function(){return{list:[]}},components:{Title:o["a"],SkillCards:c["a"]},created:function(){var t=this;s["a"].then((function(e){t.list=[].concat(Object(r["a"])(e.data[0]),Object(r["a"])(e.data[1]),Object(r["a"])(e.data[2]),Object(r["a"])(e.data[3])),console.log(t.list)}))}},u=l,f=n("2877"),d=Object(f["a"])(u,i,a,!1,null,"292447ee",null);e["a"]=d.exports},"6faf":function(t,e,n){},7545:function(t,e,n){t.exports=n.p+"img/vue-vuetify.0c685315.svg"},7584:function(t,e,n){var i={"./_lazyloading.gif":"c29b","./axios.svg":"0a43","./bootstrap.svg":"1131","./css.svg":"8e27","./git.svg":"824b","./github.svg":"917e","./gulp.svg":"2bde","./html.svg":"968c","./javascript.svg":"a027","./jquery.svg":"010f","./json.svg":"56c1","./less.svg":"7f93","./mongodb.svg":"f6d3","./mysql.svg":"8d8b","./nodejs.svg":"79b9","./npm.svg":"ba93","./rails.svg":"6984","./react-ant-design.svg":"0b12","./react-materialui.svg":"ebb0","./react.svg":"830e","./redux.svg":"b4b5","./ruby.svg":"4602","./sass.svg":"f766","./typescript.svg":"8a68","./vue-elementui.svg":"4166","./vue-nuxt.svg":"dddf","./vue-vuetify.svg":"7545","./vue-vuex.svg":"caab","./vue.svg":"4fc3","./webpack.svg":"29a1","./yarn.svg":"7dd08"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="7584"},"79b9":function(t,e,n){t.exports=n.p+"img/nodejs.609fbeeb.svg"},"7ba6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CardWorksMobile"},[n("v-row",{attrs:{align:"center",justify:"start"}},t._l(t.list,(function(e,i){return n("v-col",{key:i,attrs:{cols:"6",sm:"3",md:"3",lg:"2"}},[n("v-card",{attrs:{elevation:"2"},on:{click:function(n){return t.click(e)}}},[n("v-img",{attrs:{src:e.mainPic}})],1),n("v-card-text",{staticClass:"text-center text-no-wrap font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])],1)})),1)],1)},a=[],r={props:["list"],methods:{click:function(t){var e=this;clearTimeout(n);var n=setTimeout((function(){e.$router.push({path:"/detail/work",query:{id:t.id,type:t.type}})}),200)}}},s=r,o=n("2877"),c=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=c.exports},"7dd08":function(t,e,n){t.exports=n.p+"img/yarn.3c1e42f6.svg"},"7f93":function(t,e,n){t.exports=n.p+"img/less.341f0ab0.svg"},"824b":function(t,e,n){t.exports=n.p+"img/git.3bf44157.svg"},"830e":function(t,e,n){t.exports=n.p+"img/react.16975bcc.svg"},"8a68":function(t,e,n){t.exports=n.p+"img/typescript.cb6bec97.svg"},"8d8b":function(t,e,n){t.exports=n.p+"img/mysql.c02ade79.svg"},"8e27":function(t,e,n){t.exports=n.p+"img/css.2b997854.svg"},9018:function(t,e,n){"use strict";n("c9c7")},"917e":function(t,e,n){t.exports=n.p+"img/github.589f25ab.svg"},"968c":function(t,e,n){t.exports=n.p+"img/html.5048dffe.svg"},"9c0c":function(t,e,n){},a027:function(t,e,n){t.exports=n.p+"img/javascript.8a5d187b.svg"},a3c5:function(t,e,n){"use strict";n("2f8b")},b0ec:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"CardSkills"},t._l(t.list,(function(e,a){return i("v-card",{key:a,attrs:{"max-width":"80","min-width":"80",elevation:"2"},on:{click:function(n){return t.click(e)}}},[i("v-img",{attrs:{src:n("7584")("./"+e.pic),"lazy-src":n("c29b"),"min-width":"80","max-width":"80"}})],1)})),1)},a=[],r={props:["list"],methods:{click:function(t){var e=this;clearTimeout(i);var n=t.id,i=setTimeout((function(){e.$router.push({path:"/detail/skill",query:{name:n}})}),200)}}},s=r,o=(n("30ea"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,"651a4fa1",null);e["a"]=c.exports},b133:function(t,e,n){"use strict";n("0023")},b4b5:function(t,e,n){t.exports=n.p+"img/redux.bdfc1704.svg"},ba93:function(t,e,n){t.exports=n.p+"img/npm.7f8878d9.svg"},c29b:function(t,e,n){t.exports=n.p+"img/_lazyloading.cafdfd8c.gif"},c9c7:function(t,e,n){},caab:function(t,e,n){t.exports=n.p+"img/vue-vuex.bc3a5695.svg"},cdcc:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CardWorksPC"},[n("v-row",{attrs:{align:"center",justify:"start"}},t._l(t.list,(function(e,i){return n("v-col",{key:i,attrs:{"max-width":"200",cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{attrs:{elevation:"2"},on:{click:function(n){return t.click(e)}}},[n("v-img",{attrs:{src:e.mainPic}})],1),n("v-card-text",{staticClass:"text-center text-no-wrap font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])],1)})),1)],1)},a=[],r={props:["list"],methods:{click:function(t){var e=this;clearTimeout(n);var n=setTimeout((function(){e.$router.push({path:"/detail/work",query:{id:t.id,type:t.type}})}),200)}}},s=r,o=n("2877"),c=Object(o["a"])(s,i,a,!1,null,"2ea08616",null);e["a"]=c.exports},d03d:function(t,e,n){"use strict";n("6faf")},dddf:function(t,e,n){t.exports=n.p+"img/vue-nuxt.dbc4ae47.svg"},e597:function(t,e,n){"use strict";n("6076")},ebb0:function(t,e,n){t.exports=n.p+"img/react-materialui.0c8c2e80.svg"},f6d3:function(t,e,n){t.exports=n.p+"img/mongodb.35ebddae.svg"},f766:function(t,e,n){t.exports=n.p+"img/sass.2dfd41e1.svg"}});
//# sourceMappingURL=app.81d4f4df.js.map
(function(t){function e(e){for(var r,a,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2b50c55e":"9d3a8475","chunk-1ac13f47":"f946a655","chunk-2f661b76":"fe87a4a7","chunk-786ba67a":"7942d174","chunk-03246bc4":"6312ed2a","chunk-115f8dc7":"18ce842c","chunk-2d20f1b4":"7f9819e6","chunk-2f571e74":"d9b1bf76"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-2f661b76":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2b50c55e":"31d6cfe0","chunk-1ac13f47":"31d6cfe0","chunk-2f661b76":"58678703","chunk-786ba67a":"31d6cfe0","chunk-03246bc4":"31d6cfe0","chunk-115f8dc7":"31d6cfe0","chunk-2d20f1b4":"31d6cfe0","chunk-2f571e74":"31d6cfe0"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var f=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3140:function(t,e,n){"use strict";n("c2bb")},4979:function(t,e,n){"use strict";n("ca33")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"app"}},[n("NavRoutes"),n("router-view"),n("Footer")],1)])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center nav-row-routes"},[n("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"font-weight-black text-sm-h6 white--text",attrs:{color:"cyan darken-2",fab:"",large:"",elevation:"5"}},"v-btn",a,!1),r),[n("v-icon",[t._v("mdi-menu-down-outline")])],1)]}}])},[n("v-list",{staticClass:"pl-2 pt-14 mt-5",attrs:{width:"400px"}},[t._l(t.navItems,(function(e,r){return n("v-list-item",{key:r,staticClass:"px-0 py-1",attrs:{"max-width":"60"}},[n("v-list-item-title",[n("v-btn",{attrs:{fab:"",to:e.to,elevation:"5",raised:""}},[n("v-icon",{attrs:{large:"",color:"cyan darken-2"}},[t._v(t._s(e.icon))])],1)],1)],1)})),n("v-list-item",{staticClass:"px-0 py-1",attrs:{"max-width":"60"}},[n("v-list-item-title",[n("v-btn",{attrs:{fab:"",elevation:"5",raised:""},on:{click:t.toggleTheme}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.isDarkTheme?"mdi-weather-sunny":"mdi-weather-night")+" ")])],1)],1)],1)],2)],1)],1)},c=[],l=n("5530"),s=[{name:"Home",icon:"mdi-home",to:"/",color:"teal"},{name:"Skills",icon:"mdi-cards",to:"/skills",color:""},{name:"Works",icon:"mdi-rhombus-split",to:"/works",color:"brown"}],u=n("2f62"),f={data:function(){return{navItems:s}},computed:Object(l["a"])({},Object(u["b"])(["isDarkTheme"])),methods:{toggleTheme:function(){this.$store.commit("toggleTheme",{isDarkTheme:!this.isDarkTheme,VM:this})}}},d=f,h=(n("4979"),n("2877")),m=Object(h["a"])(d,i,c,!1,null,"5904b062",null),p=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"cyan darken-2",attrs:{padless:"",id:"footer",bottom:""}},[n("v-container",[n("Title",[n("h1",{staticClass:"title1 white--text",attrs:{slot:"title1"},slot:"title1"},[t._v("Thanks for Watching")]),n("h4",{staticClass:"title2 white--text",attrs:{slot:"title2"},slot:"title2"},[t._v(" 最後までご覧頂き、心より感謝致します ")])]),n("div",{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[n("v-card-text",t._l(t.links,(function(e,r){return n("v-btn",{key:r,staticClass:"mx-4 white--text",attrs:{href:e.link,color:e.color,fab:""}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),n("v-card-text",{staticClass:"text-left white--text text-caption text-sm-body-2 text-md-body-1"},[t._v(" このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。 もしこのサイトや私について何かコメントがありましたら、上記のリンクご利用ください。 独自の開発していくうちに、自分の不足も認識しました。 今後も必ず深く勉強して改善し、そして専門性を高め、 一流のエンジニアを目指して、引き続き頑張っていきたいと思います。 ")]),n("v-card-text",{staticClass:"text-right white--text"},[n("v-btn",{staticClass:"purple darken-2 text-center white--text",attrs:{to:"/versions"}},[t._v("Version 4.0 "),n("v-badge",{staticClass:"font-weight-black",attrs:{color:"red","offset-x":"0","offset-y":"-5",content:"4"}})],1),n("br"),n("small",[t._v(" CHEN - "+t._s((new Date).getFullYear())+". "+t._s((new Date).getMonth())+"    ")])],1)],1)],1)],1)},v=[],k=n("5ce3"),g={components:{Title:k["a"]},data:function(){return{links:[{name:"Twitter",icon:"mdi-twitter",link:"https://twitter.com/chenjiaxu333",color:"blue"},{name:"Github",icon:"mdi-github",link:"https://github.com/BlaxBerry",color:"grey darken-4"},{name:"Gmail",icon:"mdi-gmail",link:"mailto:chenjiaxu333@gmail.com",color:"red"}]}}},w=g,y=(n("3140"),Object(h["a"])(w,b,v,!1,null,"8163861a",null)),x=y.exports,_={components:{NavRoutes:p,Footer:x},mounted:function(){this.$vuetify.theme.dark=this.$store.state.isDarkTheme}},T=_,C=(n("5c0b"),Object(h["a"])(T,a,o,!1,null,null,null)),O=C.exports,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("v-container")],1)},E=[],D={components:{},data:function(){return{}}},P=D,$=Object(h["a"])(P,S,E,!1,null,"4a56ed70",null),N=$.exports;r["default"].use(j["a"]);var M=new j["a"]({routes:[{path:"/",component:N},{path:"*",component:N},{path:"/home",name:"Home",component:N},{path:"/skills",name:"Skills",component:function(){return Promise.all([n.e("chunk-2b50c55e"),n.e("chunk-786ba67a"),n.e("chunk-2d20f1b4")]).then(n.bind(null,"b1e4"))}},{path:"/works",name:"Works",component:function(){return Promise.all([n.e("chunk-2b50c55e"),n.e("chunk-1ac13f47")]).then(n.bind(null,"1b76b"))}},{path:"/detail/skill",name:"SkillDetail",component:function(){return Promise.all([n.e("chunk-2b50c55e"),n.e("chunk-786ba67a"),n.e("chunk-115f8dc7")]).then(n.bind(null,"24a1"))}},{path:"/detail/work",name:"WorkDetail",component:function(){return Promise.all([n.e("chunk-2b50c55e"),n.e("chunk-786ba67a"),n.e("chunk-03246bc4")]).then(n.bind(null,"182d"))}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-2b50c55e"),n.e("chunk-2f661b76")]).then(n.bind(null,"8f06"))}},{path:"/versions",component:function(){return n.e("chunk-2f571e74").then(n.bind(null,"5a8f"))}}]});M.beforeEach((function(t,e,n){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,n()}));var A=M;r["default"].use(u["a"]);var I=new u["a"].Store({state:{isDarkTheme:JSON.parse(localStorage.getItem("darkmodel"))},mutations:{toggleTheme:function(t,e){t.isDarkTheme=e.isDarkTheme,e.VM.$vuetify.theme.dark=e.isDarkTheme,e.isDarkTheme?localStorage.setItem("darkmodel",!0):localStorage.setItem("darkmodel",!1)}},actions:{},modules:{}}),L=n("ce5b"),B=n.n(L),F=(n("bf40"),n("5363"),n("e956")),H=n.n(F),W=n("b25f"),J=n.n(W),V=n("0a63"),q=n.n(V),G=n("caf9"),R=n("620d"),Y=n.n(R);r["default"].config.productionTip=!1,r["default"].use(B.a);e["default"]=new B.a({});r["default"].use(H.a),r["default"].use(J.a),r["default"].use(q.a),r["default"].use(G["a"],{preLoad:1.3,loading:Y.a,attempt:1}),new r["default"]({router:A,store:I,vuetify:new B.a,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ce3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-title mb-5"},[t._t("title1"),t._t("title2")],2)},a=[],o={},i=o,c=(n("c5fb"),n("2877")),l=Object(c["a"])(i,r,a,!1,null,"76355861",null);e["a"]=l.exports},"620d":function(t,e,n){t.exports=n.p+"img/loading-mobile.0172c01d.png"},"9c0c":function(t,e,n){},c2bb:function(t,e,n){},c5fb:function(t,e,n){"use strict";n("cd20")},ca33:function(t,e,n){},cd20:function(t,e,n){}});
//# sourceMappingURL=app.4ee6d38b.js.map
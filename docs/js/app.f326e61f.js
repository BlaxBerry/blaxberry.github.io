(function(t){function e(e){for(var i,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b5de6":"5a6a5b88","chunk-2d0d2bf0":"2a0c0cf9","chunk-2d0e2532":"136daf15","chunk-2d0e9aaa":"a1f93332","chunk-2d20f1b4":"7153c070","chunk-55997084":"68468b8d"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-55997084":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-2d0b5de6":"31d6cfe0","chunk-2d0d2bf0":"31d6cfe0","chunk-2d0e2532":"31d6cfe0","chunk-2d0e9aaa":"31d6cfe0","chunk-2d20f1b4":"31d6cfe0","chunk-55997084":"b3ec5f73"}[t]+".css",r=s.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===r))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===i||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",f.name="ChunkLoadError",f.type=i,f.request=a,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0090":function(t,e,n){},"010f":function(t,e,n){t.exports=n.p+"img/jquery.e8266b8c.svg"},"03a1":function(t,e,n){},"0872":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{dark:""},model:{value:t.NavItemClickedDefault,callback:function(e){t.NavItemClickedDefault=e},expression:"NavItemClickedDefault"}},t._l(t.NavItems,(function(e,i){return n("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{value:e.name},on:{click:t.click}},[n("span",[t._v(t._s(e.name))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},a=[],r={data:function(){return{NavItems:[{name:"About Me",icon:"mdi-ghost",color:"red"},{name:"Skills",icon:"mdi-pickaxe",color:""},{name:"Works",icon:"mdi-bug",color:""},{name:"Contact",icon:"mdi-hail",color:""}],NavItemClickedDefault:"Contact"}},methods:{click:function(){var t=this;clearTimeout(e);var e=setTimeout((function(){t.NavItemClickedDefault="Contact"}),1e3)}}},o=r,c=n("2877"),s=Object(c["a"])(o,i,a,!1,null,"625c575f",null);e["a"]=s.exports},"08ce":function(t,e,n){"use strict";n("f5ea")},"0a43":function(t,e,n){t.exports=n.p+"img/axios.8fd94532.svg"},"0b12":function(t,e,n){t.exports=n.p+"img/react-ant-design.03c6d68a.svg"},1131:function(t,e,n){t.exports=n.p+"img/bootstrap.ec496b78.svg"},"285e":function(t,e,n){"use strict";n("0090")},"29a1":function(t,e,n){t.exports=n.p+"img/webpack.f45f7bd9.svg"},"2bde":function(t,e,n){t.exports=n.p+"img/gulp.31d2de3d.svg"},4166:function(t,e,n){t.exports=n.p+"img/vue-elementui.076194ae.svg"},4602:function(t,e,n){t.exports=n.p+"img/ruby.c06068f2.svg"},"4ec3":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("bc3a"),a=n.n(i),r=a.a.get("./data/skills.json"),o=a.a.get("./data/works.json")},"4fc3":function(t,e,n){t.exports=n.p+"img/vue.9febcf8b.svg"},5353:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-footer",{attrs:{padless:"",absolute:"",bottom:""}},[n("v-card",{staticClass:"green lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[n("v-card-text",t._l(t.icons,(function(e,i){return n("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{icon:"",large:"",href:e.link}},[n("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.iconName)+" ")])],1)})),1),n("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[n("router-link",{attrs:{to:"/version"}},[n("strong",[t._v("Protofolio 4.0")])]),n("br"),n("small",[t._v(" Chen - "+t._s((new Date).getFullYear())+". "+t._s((new Date).getMonth())+" ")])],1)],1)],1)],1)},a=[],r={data:function(){return{icons:[{iconName:"mdi-twitter",link:"https://twitter.com/chenjiaxu333"},{iconName:"mdi-github",link:"https://github.com/BlaxBerry"},{iconName:"mdi-gmail",link:"mailto:chenjiaxu333@gmail.com"}]}}},o=r,c=n("2877"),s=Object(c["a"])(o,i,a,!1,null,"444f16ca",null);e["a"]=s.exports},"56c1":function(t,e,n){t.exports=n.p+"img/json.d2202c18.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"app"}},[n("NavLeft"),n("router-view")],1)])},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",attrs:{id:"nav-left"}},[n("v-menu",{attrs:{transition:"scroll-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",color:"primary",fab:""}},"v-btn",a,!1),i),[t._v(" Nav ")])]}}])},[n("v-list",t._l(t.NavItems,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-title",[n("v-btn",{attrs:{fab:"",to:e.to}},[n("v-icon",[t._v(t._s(e.icon))])],1)],1)],1)})),1)],1)],1)},c=[],s={data:function(){return{NavItems:[{Name:"Home",icon:"mdi-home",to:"/"},{Name:"Profile",icon:"mdi-account",to:"/profile"},{Name:"Skills",icon:"mdi-cards",to:"/skills"},{Name:"Works",icon:"mdi-rhombus-split",to:"/works"}]}}},u=s,l=(n("285e"),n("2877")),f=Object(l["a"])(u,o,c,!1,null,"650f2b1c",null),d=f.exports,m={components:{NavLeft:d}},v=m,p=(n("5c0b"),Object(l["a"])(v,a,r,!1,null,null,null)),g=p.exports,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Top"),n("AboutMe"),n("Skills"),n("Works"),n("Footer"),n("NavBottom")],1)},k=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh",backgroundColor:"gray"}},[t._v(" top ")])},_=[],y={},w=y,j=Object(l["a"])(w,x,_,!1,null,"419f499c",null),C=j.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center",attrs:{id:"about-me"}},[n("v-avatar",{attrs:{tile:"",size:"100"}},[n("img",{attrs:{src:"https://pbs.twimg.com/profile_images/1364617705697943553/vtlD_ont_400x400.jpg",alt:"chen"}})]),t._v(" sad "),n("div",{staticClass:"links"},t._l(t.links,(function(e,i){return n("v-btn",{key:i,staticClass:"ma-1",attrs:{href:e.link,color:e.color,target:"_blank",elevation:"2",icon:""}},[n("v-icon",{attrs:{large:"",color:e.color}},[t._v(t._s(e.icon))])],1)})),1)],1)},N=[],E={data:function(){return{links:[{name:"Twitter",icon:"mdi-twitter",link:"https://twitter.com/chenjiaxu333",color:"blue"},{name:"Github",icon:"mdi-github",link:"https://github.com/BlaxBerry",color:"grey darken-4"},{name:"Facebook",icon:"mdi-facebook",link:"https://www.facebook.com/jiaxu.chen.96",color:"blue darken-4"},{name:"Gmail",icon:"mdi-gmail",link:"mailto:chenjiaxu333@gmail.com",color:"red"}]}}},S=E,T=Object(l["a"])(S,O,N,!1,null,null,null),P=T.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"skills-home"}},[t._v(" Skills "),n("SkillCards",{attrs:{list:t.list}})],1)},$=[],M=n("2909"),I=(n("99af"),n("4ec3")),q=n("b0ec"),A={data:function(){return{list:[]}},components:{SkillCards:q["a"]},created:function(){var t=this;I["a"].then((function(e){t.list=[].concat(Object(M["a"])(e.data[0]),Object(M["a"])(e.data[1]),Object(M["a"])(e.data[2]),Object(M["a"])(e.data[3])),console.log(t.list)}))}},B=A,W=(n("6a07"),Object(l["a"])(B,D,$,!1,null,"0ae5043a",null)),L=W.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"works-home"}},[t._v(" works "),n("WorkCardsPC",{attrs:{list:t.list}})],1)},H=[],U=n("cdcc"),G={data:function(){return{list:[]}},components:{WorkCardsPC:U["a"]},created:function(){var t=this;I["b"].then((function(e){t.list=[e.data[0],e.data[1]],console.log(t.list)}))}},J=G,Y=Object(l["a"])(J,F,H,!1,null,"5dc4b780",null),z=Y.exports,K=n("5353"),V=n("0872"),Q={components:{Top:C,AboutMe:P,Skills:L,Works:z,Footer:K["a"],NavBottom:V["a"]}},R=Q,X=Object(l["a"])(R,h,k,!1,null,"54f58d4b",null),Z=X.exports;i["default"].use(b["a"]);var tt=[{path:"/",component:Z},{path:"*",component:Z},{path:"/home",name:"Home",component:Z},{path:"/skills",name:"Skills",component:function(){return n.e("chunk-2d20f1b4").then(n.bind(null,"b1e4"))}},{path:"/works",name:"Works",component:function(){return n.e("chunk-2d0b5de6").then(n.bind(null,"1b76"))}},{path:"/detail/skill",name:"SkillDetail",component:function(){return n.e("chunk-2d0e2532").then(n.bind(null,"7de4"))}},{path:"/detail/work",name:"WorkDetail",component:function(){return n.e("chunk-55997084").then(n.bind(null,"c53d"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d0e9aaa").then(n.bind(null,"8f06"))}},{path:"/versions",component:function(){return n.e("chunk-2d0d2bf0").then(n.bind(null,"5a8f"))}}],et=new b["a"]({routes:tt}),nt=et,it=n("ce5b"),at=n.n(it);n("bf40"),n("5363");i["default"].config.productionTip=!1,i["default"].use(at.a);e["default"]=new at.a({});nt.beforeEach((function(t,e,n){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0,n()})),new i["default"]({router:nt,vuetify:new at.a,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6984:function(t,e,n){t.exports=n.p+"img/rails.afe59a88.svg"},"6a07":function(t,e,n){"use strict";n("03a1")},7545:function(t,e,n){t.exports=n.p+"img/vue-vuetify.0c685315.svg"},7584:function(t,e,n){var i={"./axios.svg":"0a43","./bootstrap.svg":"1131","./css.svg":"8e27","./git.svg":"824b","./github.svg":"917e","./gulp.svg":"2bde","./html.svg":"968c","./javascript.svg":"a027","./jquery.svg":"010f","./json.svg":"56c1","./less.svg":"7f93","./mongodb.svg":"f6d3","./mysql.svg":"8d8b","./nodejs.svg":"79b9","./npm.svg":"ba93","./rails.svg":"6984","./react-ant-design.svg":"0b12","./react-materialui.svg":"ebb0","./react.svg":"830e","./redux.svg":"b4b5","./ruby.svg":"4602","./sass.svg":"f766","./typescript.svg":"8a68","./vue-elementui.svg":"4166","./vue-nuxt.svg":"dddf","./vue-vuetify.svg":"7545","./vue-vuex.svg":"caab","./vue.svg":"4fc3","./webpack.svg":"29a1","./yarn.svg":"7dd08"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="7584"},"79b9":function(t,e,n){t.exports=n.p+"img/nodejs.609fbeeb.svg"},"7dd08":function(t,e,n){t.exports=n.p+"img/yarn.3c1e42f6.svg"},"7f93":function(t,e,n){t.exports=n.p+"img/less.341f0ab0.svg"},"824b":function(t,e,n){t.exports=n.p+"img/git.3bf44157.svg"},"830e":function(t,e,n){t.exports=n.p+"img/react.16975bcc.svg"},"8a68":function(t,e,n){t.exports=n.p+"img/typescript.cb6bec97.svg"},"8d8b":function(t,e,n){t.exports=n.p+"img/mysql.c02ade79.svg"},"8e27":function(t,e,n){t.exports=n.p+"img/css.2b997854.svg"},"917e":function(t,e,n){t.exports=n.p+"img/github.589f25ab.svg"},"968c":function(t,e,n){t.exports=n.p+"img/html.5048dffe.svg"},"9c0c":function(t,e,n){},a027:function(t,e,n){t.exports=n.p+"img/javascript.8a5d187b.svg"},b0ec:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"CardSkills"},t._l(t.list,(function(e,a){return i("v-card",{key:a,attrs:{"max-width":"80","min-width":"80",elevation:"2"},on:{click:function(n){return t.click(e)}}},[i("v-img",{attrs:{src:n("7584")("./"+e.pic),"min-width":"80"}}),i("span",[t._v(t._s(e.name))])],1)})),1)])},a=[],r={props:["list"],methods:{click:function(t){var e=this;clearTimeout(i);var n=t.id,i=setTimeout((function(){e.$router.push({path:"/detail/skill",query:{name:n}})}),200)}}},o=r,c=(n("f8ac"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,"f5269ff8",null);e["a"]=s.exports},b4b5:function(t,e,n){t.exports=n.p+"img/redux.bdfc1704.svg"},ba93:function(t,e,n){t.exports=n.p+"img/npm.7f8878d9.svg"},caab:function(t,e,n){t.exports=n.p+"img/vue-vuex.bc3a5695.svg"},cdcc:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"CardWorks"},[n("v-row",{attrs:{align:"center",justify:"start"}},t._l(t.list,(function(e,i){return n("v-col",{key:i,attrs:{"max-width":"200",cols:"12",sm:"6",md:"4",lg:"3"}},[n("div",{staticClass:"card"},[n("v-card",{attrs:{elevation:"2"},on:{click:function(n){return t.click(e)}}},[n("v-img",{attrs:{src:e.mainPic}})],1),n("v-card-text",{staticClass:"text-no-wrap font-weight-bold"},[t._v(t._s(e.name))])],1)])})),1)],1)])},a=[],r=(n("b0c0"),{props:["list"],methods:{click:function(t){var e=this;clearTimeout(n);var n=setTimeout((function(){console.log(t.id,t.name),e.$router.push({path:"/detail/work",query:{id:t.id}})}),200)}}}),o=r,c=(n("08ce"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,"7a1f4bd4",null);e["a"]=s.exports},d0f8:function(t,e,n){},dddf:function(t,e,n){t.exports=n.p+"img/vue-nuxt.dbc4ae47.svg"},ebb0:function(t,e,n){t.exports=n.p+"img/react-materialui.0c8c2e80.svg"},f5ea:function(t,e,n){},f6d3:function(t,e,n){t.exports=n.p+"img/mongodb.35ebddae.svg"},f766:function(t,e,n){t.exports=n.p+"img/sass.2dfd41e1.svg"},f8ac:function(t,e,n){"use strict";n("d0f8")}});
//# sourceMappingURL=app.f326e61f.js.map
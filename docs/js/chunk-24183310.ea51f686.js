(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24183310"],{"00b1":function(t,e,r){t.exports=r.p+"img/vue-vite.1821c958.svg"},"06b7":function(t,e,r){t.exports=r.p+"img/db-mysql.c02ade79.svg"},"07bc":function(t,e,r){t.exports=r.p+"img/vue-nuxt.7a4877fb.svg"},"0fbf":function(t,e,r){t.exports=r.p+"img/other-axios.8fd94532.svg"},"11f5":function(t,e,r){t.exports=r.p+"img/other-git.3bf44157.svg"},1695:function(t,e,r){t.exports=r.p+"img/server-nodejs.609fbeeb.svg"},"182d":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-10",attrs:{id:"work-detail"}},[r("v-container",[t.currentWork&&t.SKILLS_ALL.length?r("div",[r("Title",[r("h1",{staticClass:"text-center text-en",attrs:{slot:"first"},slot:"first"},[t._v(" "+t._s(t.currentWork.name)+" ")]),r("h3",{staticClass:"text-center text-jp",attrs:{slot:"second"},slot:"second"},[t._v(" "+t._s(t.currentWork.nameEN)+" ")])]),r("v-col",[r("SkillsList",{attrs:{list:t.techTask}}),r("br")],1),r("About",{attrs:{desc:t.currentWork.description,date:t.currentWork.date}}),r("Details",{attrs:{details:t.currentWork.details}}),r("Teamwork",{attrs:{teamwork:t.currentWork.teamwork}}),r("Extra",{attrs:{extra:t.currentWork.extra}}),r("Links",{attrs:{links:t.currentWork.links}}),r("Images",{attrs:{images:t.currentWork.pics,workType:t.currentWork.type}})],1):r("div",[t._v("Loading...")])])],1)},n=[],a=r("2909"),o=r("1da1"),i=(r("96cf"),r("7db0"),r("d81d"),r("b0c0"),r("99af"),r("4ec3")),c=r("b464"),u=r("6305"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",[r("h1",{staticClass:"text-en"},[t._v("About This Project")]),r("p",{staticClass:"text-justify text-jp pure-text-content",domProps:{innerHTML:t._s(t.desc)}}),r("v-divider")],1)},v=[],p={props:["desc","date"]},g=p,f=r("2877"),d=Object(f["a"])(g,l,v,!1,null,null,null),m=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.details,expression:"details"}]},[r("h1",{staticClass:"text-en"},[t._v("Project Details")]),r("br"),r("v-row",{attrs:{justify:"center"}},[r("v-expansion-panels",t._l(t.details,(function(e,s){return r("v-expansion-panel",{key:s},[r("v-expansion-panel-header",[r("h3",[t._v(t._s(s+1)+". "+t._s(e.title))])]),r("v-expansion-panel-content",{staticClass:"text-justify text-jp pure-text-content"},[t._v(" "+t._s(e.info)+" ")])],1)})),1)],1),r("br"),r("v-divider")],1)},x=[],h={props:["details"]},k=h,y=Object(f["a"])(k,b,x,!1,null,null,null),_=y.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.teamwork,expression:"teamwork"}]},[r("h1",{staticClass:"text-en"},[t._v("What I Have Done ?")]),t._l(t.teamwork,(function(e,s){return r("p",{key:s,staticClass:"text-jp pure-text-content ma-0",domProps:{innerHTML:t._s(e)}})})),r("v-divider")],2)},j=[],L={props:["teamwork"]},C=L,O=Object(f["a"])(C,w,j,!1,null,null,null),E=O.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.extra,expression:"extra"}]},[r("h1",{staticClass:"text-en"},[t._v("Extra Information ?")]),r("p",{staticClass:"text-jp pure-text-content",domProps:{innerHTML:t._s(t.extra)}}),r("v-divider")],1)},A=[],S={props:["extra"]},I=S,W=Object(f["a"])(I,T,A,!1,null,null,null),N=W.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.links,expression:"links"}]},[r("h1",{staticClass:"text-en"},[t._v("Links")]),r("br"),r("v-row",{staticClass:"d-flex"},t._l(t.links,(function(e,s){return r("v-col",{key:s,attrs:{cols:"12",sm:"4",md:"3",lg:"2"}},[r("v-icon",{attrs:{"x-large":"",color:"blue-grey"}},[t._v(" "+t._s(e.icon)+" ")]),r("v-btn",{staticClass:"ml-3",attrs:{href:e.link,target:"_blank",color:"blue-grey",elevation:"2",dark:"",rounded:"",depressed:""}},[t._v(" "+t._s(e.name)+" ")])],1)})),1),r("br"),r("v-divider")],1)},q=[],D={props:["links"]},$=D,R=Object(f["a"])($,P,q,!1,null,null,null),K=R.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",[r("h1",{staticClass:"text-en"},[t._v("Images")]),r("br"),r("v-row",t._l(t.images,(function(e,s){return r("v-col",{key:s,attrs:{cols:"PC"==t.workType?12:6,sm:"PC"==t.workType?6:4,md:"PC"==t.workType?4:2,lg:"PC"==t.workType?4:2}},[r("v-card",[r("v-img",{staticClass:"white",attrs:{src:e,"lazy-src":e}})],1)],1)})),1),r("br")],1)},V=[],H={props:["images","workType"]},U=H,z=Object(f["a"])(U,M,V,!1,null,null,null),B=z.exports,J=r("aa10"),F={components:{Title:c["a"],SkillsList:u["a"],About:m,Details:_,Teamwork:E,Extra:N,Links:K,Images:B},mixins:[J["a"]],data:function(){return{SKILLS_ALL:[]}},computed:{currentWork:function(){var t=this;return this.WORKS_ALL.find((function(e){return(null===e||void 0===e?void 0:e.id)==t.$route.query.id}))},techTask:function(){var t,e,r=this;return null===(t=this.currentWork)||void 0===t||null===(e=t.techTask)||void 0===e?void 0:e.map((function(t){var e;return null===(e=r.SKILLS_ALL)||void 0===e?void 0:e.find((function(e){return(null===e||void 0===e?void 0:e.name)===t}))}))}},methods:{getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["c"];case 2:return r=e.sent.data,e.next=5,i["a"];case 5:return s=e.sent.data,e.next=8,i["d"];case 8:n=e.sent.data,t.SKILLS_ALL=[].concat(Object(a["a"])(r),Object(a["a"])(s),Object(a["a"])(n));case 10:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()},updated:function(){console.log("techTasks",this.techTask)}},G=F,Q=Object(f["a"])(G,s,n,!1,null,null,null);e["default"]=Q.exports},"1b76":function(t,e,r){t.exports=r.p+"img/react-ui-material.bddc8e23.svg"},"21f8":function(t,e,r){t.exports=r.p+"img/lang-ruby.c06068f2.svg"},2274:function(t,e,r){t.exports=r.p+"img/other-graphql.b1e04474.svg"},2909:function(t,e,r){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}function n(t){if(Array.isArray(t))return s(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function o(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||a(t)||o(t)||i()}},"2b02":function(t,e,r){t.exports=r.p+"img/server-nodejs-express.43b063b0.svg"},"2fbb":function(t,e,r){t.exports=r.p+"img/css-less.341f0ab0.svg"},"353c":function(t,e,r){t.exports=r.p+"img/other-apollo-graphql.393e9a67.svg"},3904:function(t,e,r){t.exports=r.p+"img/vue-vuex.bc3a5695.svg"},"3a7e":function(t,e,r){t.exports=r.p+"img/react-ui-antdesign.db100db9.svg"},"3b78":function(t,e,r){t.exports=r.p+"img/other-webpack.f45f7bd9.svg"},"3c73":function(t,e,r){t.exports=r.p+"img/other-docker.035bf772.svg"},"45c0":function(t,e,r){t.exports=r.p+"img/jquery.e8266b8c.svg"},"46f5":function(t,e,r){var s={"./css-bootstrap.svg":"96ee","./css-less.svg":"2fbb","./css-sass.svg":"faa3","./css-tailwind.svg":"5002","./css.svg":"fe2c","./db-mongodb.svg":"5cb4","./db-mysql.svg":"06b7","./db-postgresql.svg":"c198","./html.svg":"b6a4","./jquery.svg":"45c0","./lang-javascript.svg":"4cfc","./lang-python.svg":"8baf","./lang-ruby.svg":"21f8","./lang-typescript.svg":"833c","./other-apollo-graphql.svg":"353c","./other-axios.svg":"0fbf","./other-docker.svg":"3c73","./other-electron.svg":"aa24","./other-git.svg":"11f5","./other-github.svg":"7b65","./other-gitlab.svg":"7db5","./other-graphql.svg":"2274","./other-markdown.svg":"ce7d","./other-npm.svg":"f09d","./other-webpack.svg":"3b78","./other-yarn.svg":"e67e","./react-cli.svg":"c2c5","./react-gatsby.svg":"6dc6","./react-redux.svg":"76d9","./react-router-dom.svg":"c07e","./react-ui-antdesign.svg":"3a7e","./react-ui-material.svg":"1b76","./react.svg":"c877","./server-nodejs-express.svg":"2b02","./server-nodejs.svg":"1695","./server-python-django.svg":"efac","./server-ruby-on-rails.svg":"cd85","./vue-nuxt.svg":"07bc","./vue-router.svg":"ea41","./vue-ui-element.svg":"a7e7","./vue-ui-vant.svg":"51d9","./vue-ui-vuetify.svg":"75f0","./vue-vite.svg":"00b1","./vue-vuepress.svg":"c3ae","./vue-vuex.svg":"3904","./vue.svg":"db39"};function n(t){var e=a(t);return r(e)}function a(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="46f5"},"4cfc":function(t,e,r){t.exports=r.p+"img/lang-javascript.6e350c5b.svg"},5002:function(t,e,r){t.exports=r.p+"img/css-tailwind.56de68fb.svg"},"51d9":function(t,e,r){t.exports=r.p+"img/vue-ui-vant.1e649bcf.svg"},"5cb4":function(t,e,r){t.exports=r.p+"img/db-mongodb.35ebddae.svg"},6305:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"px-2 d-sm-flex justify-sm-center"},t._l(t.list,(function(e){return r("v-col",{key:e.id,staticClass:"d-flex child-flex pa-1",attrs:{cols:"3",sm:"1",md:"1",lg:"1"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var s=t.hover;return[r("Card",{attrs:{hover:s,item:e}})]}}],null,!0)})],1)})),1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{elevation:t.hover?2*t.ELEVATIONS.CARD_ELEVATION:t.ELEVATIONS.CARD_ELEVATION},on:{click:function(e){return t.goDetailPage(t.item.id)}}},[s("v-img",{staticClass:"grey lighten-5",attrs:{src:r("46f5")("./"+t.item.fileName),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[s("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"cyan lighten-5",size:"40"}})],1)]},proxy:!0}])})],1)},o=[],i=r("6256"),c={props:["hover","item"],data:function(){return{ELEVATIONS:i["a"]}},methods:{goDetailPage:function(t){"github"==t||"gitlab"==t?window.location.href="https://github.com/BlaxBerry":this.$router.push({path:"/detail/skill",query:{id:t}})}}},u=c,l=r("2877"),v=Object(l["a"])(u,a,o,!1,null,null,null),p=v.exports,g={props:["list"],components:{Card:p}},f=g,d=Object(l["a"])(f,s,n,!1,null,null,null);e["a"]=d.exports},"6dc6":function(t,e,r){t.exports=r.p+"img/react-gatsby.265629a3.svg"},"75f0":function(t,e,r){t.exports=r.p+"img/vue-ui-vuetify.0c685315.svg"},"76d9":function(t,e,r){t.exports=r.p+"img/react-redux.bdfc1704.svg"},"7b65":function(t,e,r){t.exports=r.p+"img/other-github.589f25ab.svg"},"7db5":function(t,e,r){t.exports=r.p+"img/other-gitlab.80922f3d.svg"},"833c":function(t,e,r){t.exports=r.p+"img/lang-typescript.39f8ab57.svg"},"8baf":function(t,e,r){t.exports=r.p+"img/lang-python.70d0a205.svg"},"96ee":function(t,e,r){t.exports=r.p+"img/css-bootstrap.ec496b78.svg"},a7e7:function(t,e,r){t.exports=r.p+"img/vue-ui-element.69d7979a.svg"},aa10:function(t,e,r){"use strict";var s=r("2909"),n=r("1da1"),a=(r("96cf"),r("99af"),r("4ec3"));e["a"]={data:function(){return{tabs:["PC","Mobile"],tabItems:[],WORKS_ALL:[]}},methods:{init:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["f"];case 2:return r=e.sent.data,e.next=5,a["e"];case 5:n=e.sent.data,t.WORKS_ALL=[].concat(Object(s["a"])(r),Object(s["a"])(n)),t.tabItems=[{name:"PC Works",content:Object(s["a"])(r)},{name:"Mobile Works",content:Object(s["a"])(n)}];case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.init()}}},aa24:function(t,e,r){t.exports=r.p+"img/other-electron.e903b609.svg"},b6a4:function(t,e,r){t.exports=r.p+"img/html.8ee96cee.svg"},c07e:function(t,e,r){t.exports=r.p+"img/react-router-dom.92535468.svg"},c198:function(t,e,r){t.exports=r.p+"img/db-postgresql.71dbe6bd.svg"},c2c5:function(t,e,r){t.exports=r.p+"img/react-cli.ab2189d2.svg"},c3ae:function(t,e,r){t.exports=r.p+"img/vue-vuepress.aa3931ef.svg"},c877:function(t,e,r){t.exports=r.p+"img/react.16975bcc.svg"},cd85:function(t,e,r){t.exports=r.p+"img/server-ruby-on-rails.edb1b248.svg"},ce7d:function(t,e,r){t.exports=r.p+"img/other-markdown.31b13c1c.svg"},db39:function(t,e,r){t.exports=r.p+"img/vue.9febcf8b.svg"},e67e:function(t,e,r){t.exports=r.p+"img/other-yarn.3c1e42f6.svg"},ea41:function(t,e,r){t.exports=r.p+"img/vue-router.920a0db1.svg"},efac:function(t,e,r){t.exports=r.p+"img/server-python-django.3ea7a7e7.svg"},f09d:function(t,e,r){t.exports=r.p+"img/other-npm.7f8878d9.svg"},faa3:function(t,e,r){t.exports=r.p+"img/css-sass.2dfd41e1.svg"},fe2c:function(t,e,r){t.exports=r.p+"img/css.f5da6f25.svg"}}]);
//# sourceMappingURL=chunk-24183310.ea51f686.js.map
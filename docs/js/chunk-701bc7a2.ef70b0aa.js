(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-701bc7a2"],{7319:function(t,e,i){"use strict";i("7b1e")},"7b1e":function(t,e,i){},"86ab":function(t,e,i){"use strict";i("8c3c")},"8c3c":function(t,e,i){},c53d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"work-detail"}},[i("v-container",[t.work.pics?i("Slider",{attrs:{list:t.work.pics}}):t._e(),t.work.desc?i("Description",{attrs:{name:t.work.name,desc:t.work.desc,tags:t.work.keywords,links:t.work.links}}):t._e(),t.work.techTasks?i("TechList",{attrs:{list:t.work.techTasks}}):t._e(),t.work.function?i("Functions",{attrs:{list:t.work.function,links:t.work.links}}):t._e()],1)],1)},n=[],r=(i("7db0"),i("4ec3")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detail-work-slider"}},[i("v-carousel",{attrs:{"show-arrows-on-hover":""},scopedSlots:t._u([{key:"prev",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"pink",rounded:""}},"v-btn",n,!1),s),[i("v-icon",[t._v("mdi-chevron-left")]),t._v(" Previous")],1)]}},{key:"next",fn:function(e){var s=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"info",rounded:""}},"v-btn",n,!1),s),[t._v("Next"),i("v-icon",[t._v("mdi-chevron-right")])],1)]}}])},t._l(t.list,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)},l=[],a={props:["list"],data:function(){return{}}},c=a,u=i("2877"),d=Object(u["a"])(c,o,l,!1,null,"5e5b756e",null),v=d.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detail-work-description"}},[i("v-card",{staticClass:"pa-4"},[i("Title",[i("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v(t._s(t.name))]),i("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("この作品について")])]),i("h3",{staticClass:"px-4 pt-4"},[t._v(t._s(t.desc))]),i("div",{staticClass:"tags text-center my-4"},t._l(t.tags,(function(e,s){return i("v-chip",{key:s,staticClass:"ma-1",attrs:{outlined:"",color:t.tagsColor[s]}},[t._v(" "+t._s(e)+" ")])})),1),i("div",{staticClass:"links text-center"},[i("v-btn",{attrs:{href:t.links.github,target:"_blank",elevation:"2"}},[i("v-icon",[t._v("mdi-github")]),i("span",[t._v("Clike to Github")])],1),t.links.demo?i("v-btn",{attrs:{href:t.links.demo,target:"_blank",elevation:"2"}},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-camera-iris")]),i("span",[t._v("Check Demo Online")])],1):t._e()],1)],1)],1)},h=[],_=i("5ce3"),m={props:["name","desc","tags","links"],components:{Title:_["a"]},data:function(){return{tagsColor:["success","pink","primary","orange","cyan"]}}},f=m,p=(i("86ab"),Object(u["a"])(f,k,h,!1,null,"0684f21c",null)),b=p.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail-work-techlist"}},[s("Title",[s("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v("Tech Stacks")]),s("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("テクノロジースタックについて")])]),s("div",{staticClass:"techt-list"},t._l(t.list,(function(e,n){return s("v-list",{key:n,attrs:{subheader:""}},t._l(e,(function(e,n){return s("v-list-item",{key:n,staticClass:"py-2 d-flex flex-column flex-md-row"},[s("v-card",{staticClass:"pa-1"},[s("v-img",{attrs:{src:i("7584")("./"+e.pic),"lazy-src":i("c29b"),"max-height":"60","max-width":"60"}})],1),s("v-list-item-content",{staticClass:"px-4 text-no-wrap"},[t._v(" "+t._s(e.name)+" ")])],1)})),1)})),1)],1)},g=[],y={props:["list"],components:{Title:_["a"]}},x=y,C=(i("7319"),Object(u["a"])(x,w,g,!1,null,"1e6d0de5",null)),T=C.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"detail-work-functions"}},[i("Title",[i("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v("Function Details")]),i("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("機能詳細について")])]),t._l(t.list,(function(e,s){return i("v-list",{key:s},[t._l(e,(function(e,s){return i("v-list-item",{key:s},[i("v-icon",[t._v("mdi-tag")]),i("v-list-item-content",{staticClass:"px-4"},[t._v(t._s(e))])],1)})),i("v-divider",{staticClass:"mt-3",attrs:{inset:""}})],2)})),i("div",{staticClass:"link text-center pa-4"},[i("h3",{staticClass:"mb-4"},[t._v("check more details on github")]),i("v-btn",{attrs:{href:t.links.github,target:"_blank",elevation:"2"}},[i("v-icon",[t._v("mdi-github")]),i("span",[t._v("Clike to Github")])],1)],1)],2)},$=[],D={props:["list","links"],components:{Title:_["a"]}},L=D,W=Object(u["a"])(L,S,$,!1,null,"1911bbe5",null),O=W.exports,j={components:{Slider:v,Description:b,TechList:T,Functions:O},data:function(){return{urlQuery:"",allWorksList:[],work:{},SmoothScrollAnchors:[{name:"Desc",anchorID:"detail-work-description",icon:"mdi-bug"},{name:"TechStacks",anchorID:"detail-work-techlist",icon:"mdi-bug"},{name:"Functions",anchorID:"detail-work-functions",icon:"mdi-bug"},{name:"Contact",anchorID:"footer",icon:"mdi-hail"}]}},methods:{init:function(){var t=this;this.urlQuery=this.$route.query.id;var e=this.$route.query.type;"pc"==e?r["b"].then((function(e){t.allWorksList=e.data,console.log("all:",t.allWorksList),t.work=t.allWorksList.find((function(e){return e.id==t.urlQuery})),console.log(t.work)})):"mobile"==e?r["c"].then((function(e){t.allWorksList=e.data,console.log("all:",t.allWorksList),t.work=t.allWorksList.find((function(e){return e.id==t.urlQuery})),console.log(t.work)})):this.$router.go(-1)}},created:function(){this.init()},mounted:function(){this.$parent.$parent.SmoothScrollAnchors=this.SmoothScrollAnchors}},E=j,F=Object(u["a"])(E,s,n,!1,null,"23070b6c",null);e["default"]=F.exports}}]);
//# sourceMappingURL=chunk-701bc7a2.ef70b0aa.js.map
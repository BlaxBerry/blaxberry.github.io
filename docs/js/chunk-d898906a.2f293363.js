(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d898906a"],{1374:function(t,s,e){},"182d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"work-detail"}},[e("v-container",[e("Descs",{attrs:{work:t.work}}),e("Skills",{attrs:{list:t.work.techTasks}}),e("Links")],1)],1)},i=[],n=(e("7db0"),e("4ec3")),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-10 pb-10"},[e("Title",[e("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v(t._s(t.work.name))]),e("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("この作品について")])]),e("div",{staticClass:"my-5 d-flex justify-center flex-wrap"},t._l(t.work.keywords,(function(s,a){return e("v-hover",{key:a},[e("v-chip",{staticClass:"ma-1 font-weight-black",attrs:{dark:"",small:"",color:s.color}},[t._v(" "+t._s(s.name)+" ")])],1)})),1),"mobile"==t.work.type?e("SwiperMobile",{attrs:{list:t.work.pics}}):t._e(),"pc"==t.work.type?e("SwiperPC",{attrs:{list:t.work.pics}}):t._e(),e("div",{staticClass:"pa-sm-5 pb-0 pb-sm-0 text-caption text-sm-body-2 text-md-body-1"},[e("v-card-subtitle",{staticClass:"py-0"},[e("b",{domProps:{textContent:t._s("開発期間：")}}),e("b",{staticClass:"red--text text--lighten-2",domProps:{textContent:t._s(t.work.time?t.work.time:"確認できず...")}})]),e("v-card-subtitle",{staticClass:"text-caption text-sm-body-2 text-md-body-1"},[t._v(" "+t._s(t.work.desc)+" ")]),e("div",{staticClass:"px-5"},[t._l(t.work.links,(function(s){return e("v-btn",{key:s.to,staticClass:"py-6 mb-2 darken-2 white--text font-weight-black",attrs:{block:"",href:s.to,color:s.color,target:"_blank",elevation:"2",dark:""}},[e("v-icon",{attrs:{size:"2rem"},domProps:{textContent:t._s(s.icon)}}),e("span",{staticClass:"ml-1 ml-md-5",domProps:{textContent:t._s(s.name)}})],1)})),"Portfolio 4.0"==t.work.name?e("v-btn",{staticClass:"py-6 darken-2 white--text font-weight-black",attrs:{block:"",to:"/versions",color:"purple",elevation:"2",dark:""}},[e("v-icon",{attrs:{size:"2rem"},domProps:{textContent:t._s("mdi-trending-up")}}),e("span",{staticClass:"ml-1 ml-md-5",domProps:{textContent:t._s("Versions Up")}})],1):t._e()],2)],1)],1)},l=[],o=e("5ce3"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("carousel",{staticClass:"d-flex d-sm-none",attrs:{perPage:2}},t._l(t.list,(function(t,s){return e("slide",{key:s,staticClass:"mx-0"},[e("v-card",{staticClass:"ma-4 mobile-slide-card"},[e("img",{attrs:{src:t.pic,alt:t.name}})])],1)})),1),e("carousel",{staticClass:"d-none d-sm-flex d-md-none",attrs:{perPage:3}},t._l(t.list,(function(t,s){return e("slide",{key:s,staticClass:"mx-0"},[e("v-card",{staticClass:"ma-4 mobile-slide-card"},[e("img",{attrs:{src:t.pic,alt:t.name}})])],1)})),1),e("carousel",{staticClass:"d-none d-md-flex",attrs:{perPage:4}},t._l(t.list,(function(t,s){return e("slide",{key:s,staticClass:"mx-0"},[e("v-card",{staticClass:"ma-4 mobile-slide-card"},[e("img",{attrs:{src:t.pic,alt:t.name}})])],1)})),1)],1)},u=[],m={props:["list"],data:function(){return{model:null}}},d=m,p=(e("66a7"),e("2877")),k=Object(p["a"])(d,c,u,!1,null,"58c5204e",null),f=k.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("carousel",{staticClass:"px-md-10",attrs:{perPage:1,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:4e3,paginationSize:10,paginationActiveColor:"#00BCD4"}},t._l(t.list,(function(t,s){return e("slide",{key:s,staticClass:"px-1"},[e("img",{attrs:{src:t.pic}})])})),1)},v=[],h={props:["list"]},_=h,x=(e("4032"),Object(p["a"])(_,b,v,!1,null,null,null)),C=x.exports,w={props:["work"],components:{Title:o["a"],SwiperMobile:f,SwiperPC:C},data:function(){return{}}},y=w,g=Object(p["a"])(y,r,l,!1,null,null,null),P=g.exports,S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Title",[a("h1",{attrs:{slot:"title1"},slot:"title1"},[t._v("Skills Stacks")]),a("h4",{attrs:{slot:"title2"},slot:"title2"},[t._v("テクノロジースタックについて")])]),a("small",{staticClass:"d-block my-2 pt-5 text-sm-center",domProps:{textContent:t._s("＊ 各スキルをクリックして、詳細をご確認ください。")}}),a("v-row",{staticClass:"px-2 my-0 justify-sm-center"},t._l(t.list,(function(s,i){return a("v-col",{key:i,staticClass:"pa-1",attrs:{cols:"2",sm:"1"}},[a("v-card",{on:{click:function(e){return t.clickItem(s)}}},[a("v-img",{attrs:{src:e("7584")("./"+s.pic),"lazy-src":"https://gifimage.net/wp-content/uploads/2018/11/gif-chargement-transparent-blanc-1.gif"}})],1)],1)})),1),a("v-card",[a("v-list",{staticClass:"pa-sm-5"},[a("v-list-item",{staticClass:"px-0 justify-center justify-sm-start"},[a("v-list-item-avatar",{staticClass:"d-none d-sm-flex",attrs:{size:"80",tile:""}},[a("v-img",{attrs:{src:e("7584")("./"+t.content.pic)}})],1),a("h2",{domProps:{textContent:t._s(t.content.name)}})],1),a("v-list-item",{staticClass:"d-block pa-2 px-4 pa-lg-5"},t._l(t.content.desc,(function(s,e){return a("p",{key:e,staticClass:"text-caption text-sm-body-2 text-md-body-1 ma-0 mb-2 mb-md-5"},[a("b",{staticClass:"mr-1"},[t._v(" "+t._s(t.content.desc.length>1?e+1+". ":"")+" ")]),t._v(" "+t._s(s)+" ")])})),0)],1)],1)],1)},$=[],j={props:["list"],components:{Title:o["a"]},data:function(){return{content:{name:"",pic:""}}},methods:{clickItem:function(t){this.content=t}},watch:{list:{handler:function(t){t&&(this.content=t[0])},immediate:!0}}},L=j,z=(e("534c"),Object(p["a"])(L,S,$,!1,null,"bcc72a58",null)),E=z.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center mt-10 py-10 px-5"},[e("b",[t._v("Github・作品集をご確認ください")]),e("v-btn",{staticClass:"py-6 my-2 black darken-2 white--text font-weight-black",attrs:{block:"",href:"https://github.com/BlaxBerry?tab=repositories",target:"_blank"}},[e("v-icon",{staticClass:"mr-1",attrs:{size:"2rem"},domProps:{textContent:t._s("mdi-github")}}),t._v(" Github ")],1),e("v-btn",{staticClass:"py-6 my-2 cyan darken-2 white--text font-weight-black",attrs:{block:"",to:"/works"}},[t._v(" More Works ")])],1)},T=[],W={},Q=W,A=Object(p["a"])(Q,O,T,!1,null,null,null),B=A.exports,D={components:{Descs:P,Skills:E,Links:B},data:function(){return{urlQuery:"",allWorksList:[],work:{}}},methods:{init:function(){var t=this;this.urlQuery=this.$route.query.id;var s=this.$route.query.type;"pc"==s?n["b"].then((function(s){t.allWorksList=s.data,t.work=t.allWorksList.find((function(s){return s.id==t.urlQuery}))})):"mobile"==s?n["c"].then((function(s){t.allWorksList=s.data,t.work=t.allWorksList.find((function(s){return s.id==t.urlQuery})),console.log(t.work)})):this.$router.go(-1)}},created:function(){this.init()},mounted:function(){this.$parent.$parent.SmoothScrollAnchors=this.SmoothScrollAnchors}},M=D,q=Object(p["a"])(M,a,i,!1,null,"fb3acce4",null);s["default"]=q.exports},"29da":function(t,s,e){},4032:function(t,s,e){"use strict";e("1374")},"534c":function(t,s,e){"use strict";e("cd94")},"66a7":function(t,s,e){"use strict";e("29da")},cd94:function(t,s,e){}}]);
//# sourceMappingURL=chunk-d898906a.2f293363.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03246bc4"],{"182d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-10",attrs:{id:"work-detail"}},[r("v-container",[r("Title",[r("h1",{staticClass:"text-center text-en",attrs:{slot:"first"},slot:"first"},[t._v(" "+t._s(t.currentWork.name)+" ")])]),r("v-col",[r("SkillsList",{attrs:{list:t.techTask}}),r("br")],1),r("v-col",[r("h1",{staticClass:"text-en"},[t._v("About This Project")]),r("br"),r("p",{domProps:{innerHTML:t._s(t.currentWork.description)}}),r("v-divider")],1),r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.currentWork.details,expression:"currentWork.details"}]},[r("h1",{staticClass:"text-en"},[t._v("Project Details")]),r("br"),r("Details",{attrs:{list:t.currentWork.details}}),r("br"),r("v-divider")],1),r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.currentWork.teamwork,expression:"currentWork.teamwork"}]},[r("h1",{staticClass:"text-en"},[t._v("What I Have Done ?")]),r("br"),r("p",{domProps:{innerHTML:t._s(t.currentWork.teamwork)}}),r("v-divider")],1),r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.currentWork.extra,expression:"currentWork.extra"}]},[r("h1",{staticClass:"text-en"},[t._v("Extra Information ?")]),r("br"),r("p",{domProps:{innerHTML:t._s(t.currentWork.extra)}}),r("v-divider")],1),r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.currentWork.links,expression:"currentWork.links"}]},[r("h1",{staticClass:"text-en"},[t._v("Links")]),r("br"),r("v-row",t._l(t.currentWork.links,(function(e,n,a){return r("v-col",{key:a,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[r("v-icon",{attrs:{"x-large":""}},[t._v(t._s(e.icon))]),r("v-btn",{attrs:{href:e.link,target:"_blank",depressed:"",elevation:"2",rounded:""}},[t._v(" "+t._s(n)+" ")])],1)})),1),r("br"),r("v-divider")],1),r("v-col",[r("h1",{staticClass:"text-en"},[t._v("Images")]),r("br"),r("v-row",t._l(t.currentWork.pics,(function(e,n){return r("v-col",{key:n,attrs:{cols:"PC"==t.currentWork.type?12:6,sm:"PC"==t.currentWork.type?6:4,md:"PC"==t.currentWork.type?4:2,lg:"PC"==t.currentWork.type?4:2}},[r("v-card",[r("v-img",{staticClass:"white",attrs:{src:e,"lazy-src":e}})],1)],1)})),1)],1),r("br")],1)],1)},a=[],s=r("2909"),o=r("1da1"),i=(r("96cf"),r("7db0"),r("d81d"),r("b0c0"),r("99af"),r("4ec3")),c=r("b464"),u=r("6305"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-expansion-panels",{attrs:{focusable:""}},t._l(t.list,(function(e,n){return r("v-expansion-panel",{key:n},[r("v-expansion-panel-header",[r("h3",[t._v(t._s(n+1)+". "+t._s(e.title))])]),r("v-expansion-panel-content",[t._v(" "+t._s(e.info)+" ")])],1)})),1)],1)},d=[],v={props:["list"]},f=v,p=r("2877"),m=Object(p["a"])(f,l,d,!1,null,null,null),b=m.exports,h=r("aa10"),k={components:{Title:c["a"],SkillsList:u["a"],Details:b},mixins:[h["a"]],data:function(){return{SKILLS_ALL:[]}},computed:{currentWork:function(){var t=this;return this.WORKS_ALL.find((function(e){return e.id==t.$route.query.id}))},techTask:function(){var t=this;return this.currentWork.techTask.map((function(e){if(t.SKILLS_ALL.length)return t.SKILLS_ALL.find((function(t){return t.name===e}))}))}},methods:{getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["c"];case 2:return r=e.sent.data,e.next=5,i["b"];case 5:return n=e.sent.data,e.next=8,i["d"];case 8:a=e.sent.data,t.SKILLS_ALL=[].concat(Object(s["a"])(r),Object(s["a"])(n),Object(s["a"])(a));case 10:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()}},w=k,_=Object(p["a"])(w,n,a,!1,null,null,null);e["default"]=_.exports},2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function o(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||o(t)||i()}},aa10:function(t,e,r){"use strict";var n=r("2909"),a=r("1da1"),s=(r("96cf"),r("99af"),r("4ec3"));e["a"]={data:function(){return{tabs:["PC","Mobile"],tabItems:[],WORKS_ALL:[]}},methods:{init:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["f"];case 2:return r=e.sent.data,e.next=5,s["e"];case 5:a=e.sent.data,t.WORKS_ALL=[].concat(Object(n["a"])(r),Object(n["a"])(a)),t.tabItems=[{name:"PC Works",content:Object(n["a"])(r)},{name:"Mobile Works",content:Object(n["a"])(a)}];case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.init()}}}}]);
//# sourceMappingURL=chunk-03246bc4.6a61dc90.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f562e61e"],{2677:function(t,n,s){"use strict";var o=s("d2a6"),a=s.n(o);a.a},d2a6:function(t,n,s){},d7bf:function(t,n,s){"use strict";s.r(n);var o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"show-details-container"},[s("h1",[t._v("Show Details")]),t.showInfo?s("div",{staticClass:"show-details"},[s("div",{staticClass:"left-content"},[s("img",{attrs:{src:t.showInfo.image.medium,alt:t.showInfo.name}})]),s("div",{staticClass:"right-content"},[s("h2",[t._v(" "+t._s(t.showInfo.name)+" "),s("span",[t._v("("+t._s(t.showInfo.rating.average)+"/10)")])]),s("span",{domProps:{innerHTML:t._s(t.showInfo.summary)}})])]):s("h4",[t._v("Loading ...")])])},a=[],e=(s("d3b7"),{name:"ShowDetails",data:function(){return{showInfo:null}},mounted:function(){this.getShowDetails()},methods:{getShowDetails:function(){var t=this,n=this.$route.params.id;fetch("https://api.tvmaze.com/shows/".concat(n)).then((function(t){return t.json()})).then((function(n){t.showInfo=n})).catch((function(t){console.log(t)}))}}}),i=e,c=(s("2677"),s("2877")),h=Object(c["a"])(i,o,a,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-f562e61e.4ed8271a.js.map
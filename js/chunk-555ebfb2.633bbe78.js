(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-555ebfb2"],{"474e":function(n,e,r){},"91ea":function(n,e,r){"use strict";r.r(e);var i=function(){var n=this,e=n.$createElement,r=n._self._c||e;return n.squares?r("div",{staticClass:"board"},n._l(3,(function(e){return r("div",{key:e,staticClass:"board-row"},n._l(3,(function(i){return r("square",{key:n.indexByRow(i,e),attrs:{value:n.squares[n.indexByRow(i,e)],disabled:!!n.winner,winner:!!n.winner&&n.winner.includes(n.indexByRow(i,e))},on:{click:function(r){return n.click(i,e)}}})})),1)})),0):n._e()},t=[],c=(r("d3b7"),{name:"Board",props:{squares:Array,winner:Array},components:{Square:function(){return r.e("chunk-6befbc08").then(r.bind(null,"486b"))}},methods:{indexByRow:function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return e*r+n-(r+1)},click:function(n,e){this.$emit("click",this.indexByRow(n,e))}}}),u=c,s=(r("e07c"),r("2877")),a=Object(s["a"])(u,i,t,!1,null,"abbb7f9c",null);e["default"]=a.exports},e07c:function(n,e,r){"use strict";var i=r("474e"),t=r.n(i);t.a}}]);
//# sourceMappingURL=chunk-555ebfb2.633bbe78.js.map
(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d4b8145e"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"27bf":function(t,e,n){"use strict";n("e287")},3057:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-header",{attrs:{title:t.title},on:{changeTitle:function(e){return t.updateTitle(e)}}}),n("app-ninjas",{attrs:{ninjas:t.ninjas}}),n("app-footer",{attrs:{title:t.title}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{on:{click:t.changeTitle}},[t._v(" "+t._s(t.title)+" ")])])},i=[],c={props:{title:{type:String}},data:function(){return{}},methods:{changeTitle:function(){this.$emit("changeTitle","Vue Wizards")}}},u=c,p=(n("fc56"),n("2877")),l=Object(p["a"])(u,s,i,!1,null,"ecc66980",null),f=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v(t._s(t.copyright)+" "+t._s(t.title))])])},d=[],m={props:{title:{type:String}},data:function(){return{copyright:"Copyright 2022"}},methods:{}},v=m,b=(n("72a2"),Object(p["a"])(v,h,d,!1,null,"685d854a",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ninjas"}},[n("ul",t._l(t.ninjas,(function(e,r){return n("li",{key:r,on:{click:function(t){e.show=!e.show}}},[n("h2",[t._v(t._s(e.name))]),n("h3",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"ninja.show"}]},[t._v(t._s(e.speciality))])])})),0)])},y=[],x={props:{ninjas:{type:Array,required:!0}},data:function(){return{}},methods:{removeNinja:function(){this.ninjas.pop()}}},_=x,j=(n("27bf"),Object(p["a"])(_,w,y,!1,null,"462bbfe4",null)),O=j.exports,k={components:{"app-header":f,"app-footer":g,"app-ninjas":O},data:function(){return{title:"Vue Ninjas",ninjas:[{name:"Ryu",speciality:"Vue Components",show:!1},{name:"Crystal",speciality:"HTML Wizardry",show:!1},{name:"Hitoshi",speciality:"Click Events",show:!1},{name:"Tango",speciality:"Conditionals",show:!1},{name:"Kami",speciality:"Webpack",show:!1},{name:"Yoshi",speciality:"Data Diggin",show:!1}]}},methods:{updateTitle:function(t){this.title=t}}},P=k,C=(n("590c"),Object(p["a"])(P,a,o,!1,null,"c217229e",null)),R=C.exports,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},S=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("Say something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.posts.results,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{index:r,item:e},on:{dblclick:function(n){return t.deletePost(e._id)}}},[t._v(" "+t._s(new Date(e.createdAt).getDate()+" / "+new Date(e.createdAt).getMonth()+" / "+new Date(e.createdAt).getFullYear())+" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},A=[],D=n("1da1"),M=(n("96cf"),n("bc3a"));function H(t,e){return L.apply(this,arguments)}function L(){return L=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){var r,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},t.next=3,N(e,n,r).then((function(t){return{state:!0,results:t.data}})).catch((function(t){return{state:!1,results:t}}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function N(t,e){return V.apply(this,arguments)}function V(){return V=Object(D["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:{},a="".concat(e),t.next=4,M({method:n,url:a,data:r});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}var W="/api";function q(){return z.apply(this,arguments)}function z(){return z=Object(D["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(W,"/posts"),t.next=3,H(e,"get");case 3:return n=t.sent,console.log("data: ",n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function J(t){return Y.apply(this,arguments)}function Y(){return Y=Object(D["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(W,"/posts"),r={text:e},t.next=4,H(n,"post",r);case 4:return a=t.sent,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function F(t){return K.apply(this,arguments)}function K(){return K=Object(D["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(W,"/posts/").concat(e),t.next=3,H(n,"delete",e);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}var B={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createPost:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J(t.text);case 2:return e.next=4,q();case 4:t.posts=e.sent,t.text="";case 6:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F(t);case 2:return n.next=4,q();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},G=B,I=(n("d9e1"),Object(p["a"])(G,$,A,!1,null,"719b4f9a",null)),Q=I.exports,U={name:"Home",components:{PostComponent:Q}},X=U,Z=Object(p["a"])(X,E,S,!1,null,null,null),tt=Z.exports;r["a"].use(T["a"]);var et=[{path:"/",name:"Home",component:tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],nt=new T["a"]({routes:et}),rt=nt,at=n("2f62");r["a"].use(at["a"]);var ot=new at["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:rt,store:ot,render:function(t){return t(R)}}).$mount("#app")},"590c":function(t,e,n){"use strict";n("3057")},"72a2":function(t,e,n){"use strict";n("d078")},"87e0":function(t,e,n){},ba5a:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d078:function(t,e,n){},d9e1:function(t,e,n){"use strict";n("87e0")},e287:function(t,e,n){},fc56:function(t,e,n){"use strict";n("ba5a")}});
//# sourceMappingURL=app.f2ec3d10.js.map
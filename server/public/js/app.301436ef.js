(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c6531e14"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1033:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return bt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-header",{attrs:{title:t.title},on:{changeTitle:function(e){return t.updateTitle(e)}}}),n("keep-alive",[n(t.component,{tag:"component"})],1),n("button",{on:{click:function(e){t.component="form-one"}}},[t._v("Show form one")]),n("button",{on:{click:function(e){t.component="form-two"}}},[t._v("Show form twp")]),n("app-footer",{attrs:{title:t.title}})],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{on:{click:t.changeTitle}},[t._v(" "+t._s(t.pageTitle)+" ")])])},s=[],u={props:{title:{type:String}},data:function(){return{pageTitle:this.title}},methods:{changeTitle:function(){this.pageTitle="Vue Wizards",bt.$emit("titleChanged","Vue Wizards")}}},c=u,l=(n("c6d1"),n("2877")),p=Object(l["a"])(c,i,s,!1,null,"e8cf48ea",null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v(t._s(t.copyright)+" "+t._s(t.pageTitle))])])},d=[],h={props:{title:{type:String}},data:function(){return{pageTitle:this.title,copyright:"Copyright 2022"}},methods:{},created:function(){var t=this;bt.$on("titleChanged",(function(e){t.pageTitle=e}))}},v=h,g=(n("913c"),Object(l["a"])(v,m,d,!1,null,"8bcd38f2",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form-helper",[n("div",{attrs:{slot:"form-header"},slot:"form-header"},[n("h3",[t._v(t._s(t.formTitle))]),n("p",[t._v("Enter your login details")])]),n("div",{attrs:{slot:"form-content"},slot:"form-content"},[n("input",{attrs:{type:"text",placeholder:"username",required:""}}),t._v("  "),n("input",{attrs:{type:"password",placeholder:"password",required:""}})]),n("div",{attrs:{slot:"form-buttons"},slot:"form-buttons"},[n("br"),n("button",{attrs:{type:"submit"}},[t._v("Login")])])])],1)},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{id:"form-helper"}},[n("div",{attrs:{id:"form-header"}},[t._t("form-header")],2),n("div",{attrs:{id:"form-content"}},[t._t("form-content")],2),n("div",{attrs:{id:"form-buttons"}},[t._t("form-buttons")],2),t._m(0)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"form-links"}},[n("ul",[n("li",[n("a",{attrs:{href:""}},[t._v("Link 1")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Link 2")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Link 3")])])])])}],j={},k=j,O=Object(l["a"])(k,y,x,!1,null,null,null),T=O.exports,C={name:"form-one",components:{"form-helper":T},data:function(){return{formTitle:"Login Form 1"}}},P=C,R=Object(l["a"])(P,w,_,!1,null,null,null),E=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form-helper",[n("div",{attrs:{slot:"form-header"},slot:"form-header"},[n("h3",[t._v(t._s(t.formTitle))]),n("p",[t._v("Enter your login details")])]),n("div",{attrs:{slot:"form-content"},slot:"form-content"},[n("input",{attrs:{type:"text",placeholder:"username",required:""}}),t._v("  "),n("input",{attrs:{type:"password",placeholder:"password",required:""}})]),n("div",{attrs:{slot:"form-buttons"},slot:"form-buttons"},[n("br"),n("button",{attrs:{type:"submit"}},[t._v("Login")])])])],1)},$=[],S={name:"form-two",components:{"form-helper":T},data:function(){return{formTitle:"Login Form 2"}}},D=S,M=Object(l["a"])(D,L,$,!1,null,null,null),q=M.exports,A={components:{"app-header":f,"app-footer":b,"form-one":E,"form-two":q},data:function(){return{component:"form-two",formTitle:"Login Form",title:"Vue Ninjas",ninjas:[{name:"Ryu",speciality:"Vue Components",show:!1},{name:"Crystal",speciality:"HTML Wizardry",show:!1},{name:"Hitoshi",speciality:"Click Events",show:!1},{name:"Tango",speciality:"Conditionals",show:!1},{name:"Kami",speciality:"Webpack",show:!1},{name:"Yoshi",speciality:"Data Diggin",show:!1}]}},methods:{updateTitle:function(t){this.title=t}}},V=A,F=(n("9ae5"),Object(l["a"])(V,o,a,!1,null,"1009a8c0",null)),H=F.exports,W=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},J=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("Say something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.posts.results,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{index:r,item:e},on:{dblclick:function(n){return t.deletePost(e._id)}}},[t._v(" "+t._s(new Date(e.createdAt).getDate()+" / "+new Date(e.createdAt).getMonth()+" / "+new Date(e.createdAt).getFullYear())+" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},Y=[],K=n("1da1"),B=(n("96cf"),n("bc3a"));function G(t,e){return I.apply(this,arguments)}function I(){return I=Object(K["a"])(regeneratorRuntime.mark((function t(e,n){var r,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:{},t.next=3,Q(e,n,r).then((function(t){return{state:!0,results:t.data}})).catch((function(t){return{state:!1,results:t}}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function Q(t,e){return U.apply(this,arguments)}function U(){return U=Object(K["a"])(regeneratorRuntime.mark((function t(e,n){var r,o,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},o="".concat(e),t.next=4,B({method:n,url:o,data:r});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}var X="/api";function Z(){return tt.apply(this,arguments)}function tt(){return tt=Object(K["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(X,"/posts"),t.next=3,G(e,"get");case 3:return n=t.sent,console.log("data: ",n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),tt.apply(this,arguments)}function et(t){return nt.apply(this,arguments)}function nt(){return nt=Object(K["a"])(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(X,"/posts"),r={text:e},t.next=4,G(n,"post",r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}function rt(t){return ot.apply(this,arguments)}function ot(){return ot=Object(K["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(X,"/posts/").concat(e),t.next=3,G(n,"delete",e);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),ot.apply(this,arguments)}var at={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createPost:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,et(t.text);case 2:return e.next=4,Z();case 4:t.posts=e.sent,t.text="";case 6:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,rt(t);case 2:return n.next=4,Z();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},it=at,st=(n("d9e1"),Object(l["a"])(it,N,Y,!1,null,"719b4f9a",null)),ut=st.exports,ct={name:"Home",components:{PostComponent:ut}},lt=ct,pt=Object(l["a"])(lt,z,J,!1,null,null,null),ft=pt.exports;r["a"].use(W["a"]);var mt=[{path:"/",name:"Home",component:ft},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],dt=new W["a"]({routes:mt}),ht=dt,vt=n("2f62");r["a"].use(vt["a"]);var gt=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("8a71");r["a"].config.productionTip=!1;var bt=new r["a"];new r["a"]({router:ht,store:gt,render:function(t){return t(H)}}).$mount("#app")},"78e5":function(t,e,n){},"7a27":function(t,e,n){},"87e0":function(t,e,n){},"8a71":function(t,e,n){},"913c":function(t,e,n){"use strict";n("7a27")},"9ae5":function(t,e,n){"use strict";n("1033")},c6d1:function(t,e,n){"use strict";n("78e5")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d9e1:function(t,e,n){"use strict";n("87e0")}});
//# sourceMappingURL=app.301436ef.js.map
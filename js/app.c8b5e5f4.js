(function(t){function e(e){for(var a,r,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-4d0ce59e":"538a7959","chunk-e58adf1a":"64acb76f","chunk-371c78ce":"28e2c470","chunk-3da9e1a2":"c8462e92","chunk-62f0acee":"28fd9134","chunk-01f1c6d9":"3cd7c9b7","chunk-4c0ecbaa":"28d1951c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-4d0ce59e":1,"chunk-e58adf1a":1,"chunk-371c78ce":1,"chunk-3da9e1a2":1,"chunk-62f0acee":1,"chunk-01f1c6d9":1,"chunk-4c0ecbaa":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-4d0ce59e":"cd32dee7","chunk-e58adf1a":"752aa411","chunk-371c78ce":"67981222","chunk-3da9e1a2":"fd05af0e","chunk-62f0acee":"e2e5b1a5","chunk-01f1c6d9":"5369ca60","chunk-4c0ecbaa":"5b27467b"}[t]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0984":function(t,e,n){},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.3f0a2016.svg"},"42f3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tab-bar",[a("tab-bar-item",{attrs:{link:"/home"}},[a("img",{attrs:{slot:"icon",src:n("9443"),alt:""},slot:"icon"}),a("img",{attrs:{slot:"active-icon",src:n("b508"),alt:""},slot:"active-icon"}),a("div",{attrs:{slot:"text"},slot:"text"},[t._v("首页")])]),a("tab-bar-item",{attrs:{link:"/category"}},[a("img",{attrs:{slot:"icon",src:n("57cd"),alt:""},slot:"icon"}),a("img",{attrs:{slot:"active-icon",src:n("a5ef"),alt:""},slot:"active-icon"}),a("div",{attrs:{slot:"text"},slot:"text"},[t._v("分类")])]),a("tab-bar-item",{attrs:{link:"/cart"}},[a("img",{attrs:{slot:"icon",src:n("d1c9"),alt:""},slot:"icon"}),a("img",{attrs:{slot:"active-icon",src:n("1f92"),alt:""},slot:"active-icon"}),a("div",{attrs:{slot:"text"},slot:"text"},[t._v("购物车")])]),a("tab-bar-item",{attrs:{link:"/profile"}},[a("img",{attrs:{slot:"icon",src:n("e55d"),alt:""},slot:"icon"}),a("img",{attrs:{slot:"active-icon",src:n("d151"),alt:""},slot:"active-icon"}),a("div",{attrs:{slot:"text"},slot:"text"},[t._v("我的")])])],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},d=l,f=(n("8af4"),n("2877")),h=Object(f["a"])(d,s,u,!1,null,"381eadd2",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar-item"},on:{click:t.itemClick}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"item-icon"},[t._t("icon")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"item-active-icon"},[t._t("active-icon")],2),n("div",{staticClass:"item-text",style:t.activeStyle},[t._t("text")],2)])},v=[],b=(n("c975"),n("ac1f"),n("5319"),n("9911"),{name:"TabBarItem",props:{link:{type:String,required:!0}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.link)},activeStyle:function(){return this.isActive?{color:"red"}:{}}},methods:{itemClick:function(){this.$router.replace(this.link)}}}),g=b,k=(n("d0c1"),Object(f["a"])(g,m,v,!1,null,"6bb8f84e",null)),y=k.exports,w={name:"MainTabBar",components:{TabBar:p,TabBarItem:y}},x=w,_=Object(f["a"])(x,o,i,!1,null,"529e9d20",null),C=_.exports,O={name:"app",components:{MainTabBar:C}},S=O,T=(n("034f"),Object(f["a"])(S,r,c,!1,null,null,null)),j=T.exports,E=(n("d3b7"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-e58adf1a"),n.e("chunk-62f0acee"),n.e("chunk-01f1c6d9")]).then(n.bind(null,"b3d7"))},A=function(){return Promise.all([n.e("chunk-e58adf1a"),n.e("chunk-371c78ce")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-e58adf1a"),n.e("chunk-3da9e1a2")]).then(n.bind(null,"c228"))},B=function(){return n.e("chunk-4d0ce59e").then(n.bind(null,"3b42"))},L=function(){return Promise.all([n.e("chunk-e58adf1a"),n.e("chunk-62f0acee"),n.e("chunk-4c0ecbaa")]).then(n.bind(null,"6ab7"))};a["a"].use(E["a"]);var N=[{path:"/",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:A},{path:"/cart",component:$},{path:"/profile",component:B},{path:"/detail/:iid",component:L}],M=new E["a"]({mode:"history",routes:N}),q=M,D=(n("7db0"),n("2f62"));a["a"].use(D["a"]);var I=new D["a"].Store({state:{cartList:[]},mutations:{addCounter:function(t,e){e.count++},addToCart:function(t,e){e.checked=!0,t.cartList.push(e)}},actions:{addCart:function(t,e){return new Promise((function(n,a){var r=t.state.cartList.find((function(t){return t.iid===e.iid}));r?(t.commit("addCounter",r),n("当前的商品数量+1")):(e.count=1,t.commit("addToCart",e),n("已加入购物车"))}))}},modules:{}}),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},F=[],H={name:"Toast",data:function(){return{message:"",isShow:!1}},components:{},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请输入提示信息",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=""}),n)}}},K=H,U=(n("97c2"),Object(f["a"])(K,J,F,!1,null,"693da994",null)),z=U.exports,G={install:function(t){var e=t.extend(z),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},Q=G;a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],a["a"].use(Q),new a["a"]({router:q,render:function(t){return t(j)},store:I}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},"8af4":function(t,e,n){"use strict";var a=n("42f3"),r=n.n(a);r.a},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"97c2":function(t,e,n){"use strict";var a=n("0984"),r=n.n(a);r.a},a2dd:function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},d0c1:function(t,e,n){"use strict";var a=n("a2dd"),r=n.n(a);r.a},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.c68224ce.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.c8b5e5f4.js.map
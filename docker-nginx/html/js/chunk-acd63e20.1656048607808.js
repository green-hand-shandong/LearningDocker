(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acd63e20"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"683a":function(t,e,n){},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=E(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,i)&&(g=x);var b=y.prototype=v.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(n,o,i,a){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function o(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return P()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o){var i=new _(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-header",[r("div",[r("img",{attrs:{src:n("cf05"),alt:""}}),r("span",[t._v("全心脏建模在线平台")])]),r("el-button",{attrs:{type:"info"},on:{click:t.logout}},[t._v("退出")])],1),r("el-container",[r("el-aside",{attrs:{width:t.isCollapse?"64px":"200px"}},[r("div",{staticClass:"toggle-button",on:{click:t.toggleCollapse}},[t._v("|||")]),r("el-menu",{attrs:{router:"","background-color":"#333744","text-color":"#fff","active-text-color":"#409EFF","unique-opened":"",collapse:t.isCollapse,"collapse-transition":!1,index:"","default-active":t.$route.path}},t._l(t.menulist,(function(e){return r("el-submenu",{key:e.id,attrs:{index:e.index}},[r("template",{slot:"title"},[r("i",{class:e.icon}),r("span",[t._v(t._s(e.name))])]),t._l(e.children,(function(e){return r("el-menu-item",{key:e.id,attrs:{index:"/"+e.index}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-menu"}),r("span",[t._v(t._s(e.name))])])],2)}))],2)})),1)],1),r("el-main",[r("router-view")],1)],1)],1)},o=[],i=(n("c975"),n("96cf"),n("1da1")),a={data:function(){return{menulist:[],isCollapse:!1}},methods:{logout:function(){window.sessionStorage.removeItem("token"),window.sessionStorage.removeItem("username"),this.$router.push("/login")},getMenuList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("user/previlege");case 2:n=e.sent,r=n.data,100===r.status&&(-1!==r.data.indexOf("1")&&t.menulist.push({index:"1",name:"用户管理",icon:"iconfont icon-icon_user",children:[{index:"users",name:"用户列表"}]}),-1!==r.data.indexOf("2")&&t.menulist.push({index:"2",name:"发布任务",icon:"iconfont icon-shangpin",children:[{index:"publishlist",name:"任务列表"}]}),-1!==r.data.indexOf("3")&&t.menulist.push({index:"3",name:"处理任务",icon:"iconfont icon-danju",children:[{index:"todolist",name:"任务领取"},{index:"mytodolist",name:"我的任务"}]}),-1!==r.data.indexOf("4")&&t.menulist.push({index:"4",name:"数据管理",icon:"iconfont icon-baobiao",children:[{index:"datalist",name:"数据列表"}]}));case 5:case"end":return e.stop()}}),e)})))()},toggleCollapse:function(){this.isCollapse=!this.isCollapse}},created:function(){this.getMenuList()}},c=a,u=(n("edc0"),n("2877")),s=Object(u["a"])(c,r,o,!1,null,"1d401d75",null);e["default"]=s.exports},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,i=n("a640"),a=n("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},cf05:function(t,e,n){t.exports=n.p+"img/logo.f5903086.png"},edc0:function(t,e,n){"use strict";var r=n("683a"),o=n.n(r);o.a}}]);
//# sourceMappingURL=chunk-acd63e20.1656048607808.js.map
!function(t){function e(e){for(var n,i,s=e[0],u=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={1:0};var a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([604,0]),r()}({171:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r(310),a=(n=o)&&n.__esModule?n:{default:n};e.default=a.default},175:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.authHeader=function(){var t=JSON.parse(localStorage.getItem("user"));if(t&&t.token){var e=["Authorization:",t.token].join(" ");return{authorization:e}}return{}}},180:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r(179),a=(n=o)&&n.__esModule?n:{default:n},i=r(175);a.default.create({baseURL:"https://localhost:3000",timeout:1e3,withCredentials:!0,responseType:"json",headers:{Accept:"application/json, text/plain, */*","content-Type":"application/json;charset=UTF-8"}});a.default.defaults.baseURL="http://localhost:3000";e.default=function(t){t.headers=(0,i.authHeader)();return a.default.request(t).then(function(t){return t.data}).catch(function(t){return console.log("Request failed: ",t.config),t.response?(console.log("Status: ",t.response.status),console.log("Data: ",t.response.data),console.log("Headers: ",t.response.headers)):console.log("Error message: ",t.message),Promise.reject(t.response||t.message)})}},181:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GET_LOGGED_USER="GET_LOGGED_USER",e.SET_LOGGED_USER="SET_LOGGED_USER"},243:function(t,e,r){(e=t.exports=r(120)(!1)).push([t.i,"@media (min-width: 769px) {\r\n  .src-postcss-layout__transitionForwardEnter--3vM_C,\r\n  .src-postcss-layout__transitionBackEnter--1TAhK {\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n    opacity: 0;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardEnterActive--1Fkns,\r\n  .src-postcss-layout__transitionBackEnterActive--3fQbx {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExit--3o2a6,\r\n  .src-postcss-layout__transitionBackExit--Dyxif {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExitActive--1oBZK,\r\n  .src-postcss-layout__transitionBackExitActive--3Erq- {\r\n    -webkit-transform: translateY(30px);\r\n            transform: translateY(30px);\r\n    opacity: 0;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .src-postcss-layout__transitionForwardEnter--3vM_C {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardEnterActive--1Fkns {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExit--3o2a6 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExitActive--1oBZK {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackEnter--1TAhK {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackEnterActive--3fQbx {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackExit--Dyxif {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackExitActive--3Erq- {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n  }\r\n}\r\n",""]),e.locals={transitionForwardEnter:"src-postcss-layout__transitionForwardEnter--3vM_C",transitionBackEnter:"src-postcss-layout__transitionBackEnter--1TAhK",transitionForwardEnterActive:"src-postcss-layout__transitionForwardEnterActive--1Fkns",transitionBackEnterActive:"src-postcss-layout__transitionBackEnterActive--3fQbx",transitionForwardExit:"src-postcss-layout__transitionForwardExit--3o2a6",transitionBackExit:"src-postcss-layout__transitionBackExit--Dyxif",transitionForwardExitActive:"src-postcss-layout__transitionForwardExitActive--1oBZK",transitionBackExitActive:"src-postcss-layout__transitionBackExitActive--3Erq-"}},244:function(t,e,r){var n=r(243);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(t.exports=n.locals)},245:function(t,e,r){(e=t.exports=r(120)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,300,400,300i,500,600,700);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),e.push([t.i,"\r\n.errors {\r\n  color: red;\r\n}",""])},246:function(t,e,r){var n=r(245);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(t.exports=n.locals)},305:function(t,e,r){(e=t.exports=r(120)(!1)).push([t.i,".src-app-pages-forms-Login-Form__test--2w9__ {\r\n  \r\n}",""]),e.locals={test:"src-app-pages-forms-Login-Form__test--2w9__"}},306:function(t,e,r){var n=r(305);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(t.exports=n.locals)},307:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=f(r(1)),i=r(195),s=r(40),u=f(r(306)),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(85)),c=f(r(303));function f(t){return t&&t.__esModule?t:{default:t}}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default.Component),o(e,[{key:"handleSubmit",value:function(t){console.log(t),this.props.fetchUsedNeeded("bing@gmail.com","bing")}},{key:"render",value:function(){var t=this;return a.default.createElement(i.Form,{model:"userinfo",onSubmit:function(e){return t.handleSubmit(e)}},a.default.createElement(i.Errors,{className:u.default.test+" errors",model:".firstName",show:"touched",messages:{valueMissing:"Username is required",maxLength:"Must be 15 characters or less",isEmail:"Email is not correct format"}}),a.default.createElement("div",{className:"form-group"},a.default.createElement("label",{htmlFor:"userinfo.firstName"},"Email: "),a.default.createElement(i.Control.text,{model:".firstName",className:"form-control",placeholder:"Enter email",required:!0,validators:{maxLength:function(t){return function(t){return t&&t.trim().length<=15}(t)},isEmail:function(t){return function(t){return c.default.isEmail(t)}(t)}},validateOn:"blur"})),a.default.createElement("div",{className:"form-group"},a.default.createElement("label",{htmlFor:"lastName"},"Password: "),a.default.createElement(i.Control.text,{model:".lastName",className:"form-control",placeholder:"Enter password"})),a.default.createElement("button",{type:"submit",className:"btn btn-default"},"Login"))}}]),e}();e.default=(0,s.connect)(function(t,e){return n({},e,{userinfo:t.Users.userinfo})},l)(p)},308:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=i(r(1)),a=(i(r(18)),i(r(307)));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),n(e,[{key:"render",value:function(){return o.default.createElement("div",{className:"col-md-6 col-md-offset-3"},o.default.createElement(a.default,null))}}]),e}();e.default=s},309:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=u(r(1)),i=r(40),s=(u(r(171)),function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(85)));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default.Component),o(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.user),a.default.createElement("div",{className:"page"},"this is content page")}}]),e}();e.default=(0,i.connect)(function(t,e){return n({},e,{user:t.Users.user})},s)(l)},310:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=i(r(1)),a=(i(r(18)),r(115));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),n(e,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(a.NavLink,{exact:!0,to:"/login"},"Login")),o.default.createElement("li",null,o.default.createElement(a.NavLink,{exact:!0,to:"/signup"},"Sign Up"))))}}]),e}();e.default=(0,a.withRouter)(s)},318:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=f(r(1)),a=(r(80),r(115)),i=r(317),s=(r(40),function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);e.default=t}(r(85)),f(r(171))),u=f(r(309)),l=f(r(308));r(246);var c=f(r(244));function f(t){return t&&t.__esModule?t:{default:t}}var p=function(){return o.default.createElement("h1",null,"404 error..., page not found")},d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),n(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var t=this.props,e=t.location,r=t.history;return o.default.createElement("div",null,o.default.createElement(s.default,null),o.default.createElement(i.TransitionGroup,{className:"page-wrapper"},o.default.createElement(i.CSSTransition,{in:!0,key:e.key,classNames:"POP"===r.action?{enter:c.default.transitionBackEnter,enterActive:c.default.transitionBackEnterActive,exit:c.default.transitionBackExit,exitActive:c.default.transitionBackExitActive}:{enter:c.default.transitionForwardEnter,enterActive:c.default.transitionForwardEnterActive,exit:c.default.transitionForwardExit,exitActive:c.default.transitionForwardExitActive},timeout:300},o.default.createElement(a.Switch,{location:e},o.default.createElement(a.Route,{exact:!0,path:"/",component:u.default}),o.default.createElement(a.Route,{path:"/login",component:l.default}),o.default.createElement(a.Route,{component:p})))))}}]),e}();e.default=(0,a.withRouter)(d)},319:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UserService=void 0;r(175);var n,o=r(180),a=(n=o)&&n.__esModule?n:{default:n};var i,s,u=(i=regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e,password:r},t.next=3,(0,a.default)({method:"post",url:"api/Users/login",data:n});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t,void 0)}),s=function(){var t=i.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});e(s)}("next")})},function(t,e){return s.apply(this,arguments)});e.UserService={login:u}},338:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(181));var a={authenticated:!1};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments[1];switch(e.type){case o.GET_LOGGED_USER:return n({},t,{user:e.user,authenticated:!0});case o.SET_LOGGED_USER:return n({},t,{authenticated:!1})}return t}},376:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=r(63),i=r(198),s=r(195),u=r(338),l=(n=u)&&n.__esModule?n:{default:n};var c={firstName:"",lastName:""},f=((0,s.createForms)({userinfo:c}),(0,a.combineReducers)(o({Users:l.default},(0,s.createForms)({userinfo:c}),{routing:i.routerReducer})));e.default=f},382:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mapDispatchToProps=function(t){return(0,n.bindActionCreators)(s,t)};var n=r(63),o=u(r(381)),a=u(r(380)),i=(r(198),r(377),u(r(376))),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(85));function u(t){return t&&t.__esModule?t:{default:t}}var l=(0,n.compose)((0,n.applyMiddleware)(o.default),(0,n.applyMiddleware)(a.default),window.devToolsExtension?window.devToolsExtension():function(t){return t}),c=(0,n.createStore)(i.default,{user:{username:"",admin:!1,_id:""},authenticated:!1},l);e.default=c},401:function(t,e,r){"use strict";var n=l(r(1)),o=r(80),a=r(115),i=r(40),s=l(r(382)),u=l(r(318));function l(t){return t&&t.__esModule?t:{default:t}}(0,o.render)(n.default.createElement(i.Provider,{store:s.default},n.default.createElement(a.BrowserRouter,null,n.default.createElement(u.default,null))),document.getElementById("root"))},604:function(t,e,r){r(603),t.exports=r(401)},85:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fetchUsedNeeded=void 0;a(r(180));var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(181)),o=r(319);a(r(179));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(t,e){return function(r){o.UserService.login(t,e).then(function(t){r(function(t){return{type:n.GET_LOGGED_USER,user:t}}(t))})}};e.fetchUsedNeeded=function(t,e){return function(r){r(i(t,e))}}}});
//# sourceMappingURL=app.js.map
!function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0};var a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([604,0]),r()}({171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(310),a=(n=o)&&n.__esModule?n:{default:n};t.default=a.default},175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authHeader=function(){var e=localStorage.getItem("user"),t=null;e&&(t=JSON.parse(e));if(t&&t.id){var r=["Authorization:",t.id].join(" ");return{authorization:r}}return{}}},180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(179),a=(n=o)&&n.__esModule?n:{default:n},i=r(175);a.default.create({baseURL:"https://localhost:3000",timeout:1e3,withCredentials:!0,responseType:"json",headers:{Accept:"application/json, text/plain, */*","content-Type":"application/json;charset=UTF-8"}});a.default.defaults.baseURL="http://localhost:3000";t.default=function(e){e.headers=(0,i.authHeader)();return a.default.request(e).then(function(e){return e.data}).catch(function(e){return console.log("Request failed: ",e.config),e.response?(console.log("Status: ",e.response.status),console.log("Data: ",e.response.data),console.log("Headers: ",e.response.headers)):console.log("Error message: ",e.message),Promise.reject(e.response||e.message)})}},181:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_LOGGED_USER="GET_LOGGED_USER",t.SET_LOGGED_USER="SET_LOGGED_USER",t.GET_USERS="GET_USERS"},243:function(e,t,r){(t=e.exports=r(120)(!1)).push([e.i,"@media (min-width: 769px) {\r\n  .src-postcss-layout__transitionForwardEnter--3vM_C,\r\n  .src-postcss-layout__transitionBackEnter--1TAhK {\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n    opacity: 0;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardEnterActive--1Fkns,\r\n  .src-postcss-layout__transitionBackEnterActive--3fQbx {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExit--3o2a6,\r\n  .src-postcss-layout__transitionBackExit--Dyxif {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExitActive--1oBZK,\r\n  .src-postcss-layout__transitionBackExitActive--3Erq- {\r\n    -webkit-transform: translateY(30px);\r\n            transform: translateY(30px);\r\n    opacity: 0;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .src-postcss-layout__transitionForwardEnter--3vM_C {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardEnterActive--1Fkns {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExit--3o2a6 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  .src-postcss-layout__transitionForwardExitActive--1oBZK {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackEnter--1TAhK {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackEnterActive--3fQbx {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackExit--Dyxif {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  .src-postcss-layout__transitionBackExitActive--3Erq- {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n  }\r\n}\r\n",""]),t.locals={transitionForwardEnter:"src-postcss-layout__transitionForwardEnter--3vM_C",transitionBackEnter:"src-postcss-layout__transitionBackEnter--1TAhK",transitionForwardEnterActive:"src-postcss-layout__transitionForwardEnterActive--1Fkns",transitionBackEnterActive:"src-postcss-layout__transitionBackEnterActive--3fQbx",transitionForwardExit:"src-postcss-layout__transitionForwardExit--3o2a6",transitionBackExit:"src-postcss-layout__transitionBackExit--Dyxif",transitionForwardExitActive:"src-postcss-layout__transitionForwardExitActive--1oBZK",transitionBackExitActive:"src-postcss-layout__transitionBackExitActive--3Erq-"}},244:function(e,t,r){var n=r(243);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(e.exports=n.locals)},245:function(e,t,r){(t=e.exports=r(120)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,300,400,300i,500,600,700);",""]),t.push([e.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),t.push([e.i,"\r\n.errors {\r\n  color: red;\r\n}\r\n.errors span {\r\n  display: block;\r\n}",""])},246:function(e,t,r){var n=r(245);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(e.exports=n.locals)},305:function(e,t,r){(t=e.exports=r(120)(!1)).push([e.i,".src-app-pages-forms-Login-Form__test--2w9__ {\r\n  \r\n}",""]),t.locals={test:"src-app-pages-forms-Login-Form__test--2w9__"}},306:function(e,t,r){var n=r(305);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(119)(n,o);n.locals&&(e.exports=n.locals)},307:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(1)),i=r(195),s=r(40),u=(c(r(306)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(85))),l=c(r(303));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.getUsers=e.getUsers.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"handleSubmit",value:function(e){console.log(e),this.props.login("bing@gmail.com","bing")}},{key:"getUsers",value:function(){this.props.getUsers({})}},{key:"render",value:function(){var e=this;return a.default.createElement(i.Form,{hideNativeErrors:!0,model:"userinfo",onSubmit:function(t){return e.handleSubmit(t)}},a.default.createElement(i.Errors,{className:"errors",model:".username",show:"touched",messages:{valueMissing:"Username is required",isEmail:"Email is not correct format"}}),a.default.createElement(i.Errors,{className:"errors",model:".password",show:"touched",messages:{valueMissing:"Password is required"}}),a.default.createElement("div",{className:"form-group"},a.default.createElement("label",{htmlFor:"userinfo.username"},"Email: "),a.default.createElement(i.Control.text,{type:"email",model:".username",className:"form-control",placeholder:"Enter email",required:!0,validators:{isEmail:function(e){return function(e){return l.default.isEmail(e)}(e)}},validateOn:"blur"})),a.default.createElement("div",{className:"form-group"},a.default.createElement("label",{htmlFor:"userinfo.password"},"Password: "),a.default.createElement(i.Control.text,{type:"password",model:".password",className:"form-control",placeholder:"Enter password",required:!0,validateOn:"blur"})),a.default.createElement("button",{type:"submit",className:"btn btn-default"},"Login"),a.default.createElement("button",{className:"btn btn-default",onClick:this.getUsers},"Get Users"))}}]),t}();t.default=(0,s.connect)(function(e,t){return n({},t)},u)(f)},308:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(1)),a=(i(r(18)),i(r(307)));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"col-md-6 col-md-offset-3"},o.default.createElement(a.default,null))}}]),t}();t.default=s},309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r(1)),i=r(40),s=(u(r(171)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(85)));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return console.log(this.props.user),a.default.createElement("div",{className:"page"},"this is content page")}}]),t}();t.default=(0,i.connect)(function(e,t){return n({},t,{user:e.Users.user})},s)(l)},310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(1)),a=(i(r(18)),r(115));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(a.NavLink,{exact:!0,to:"/login"},"Login")),o.default.createElement("li",null,o.default.createElement(a.NavLink,{exact:!0,to:"/signup"},"Sign Up"))))}}]),t}();t.default=(0,a.withRouter)(s)},318:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r(1)),a=(r(80),r(115)),i=r(317),s=(r(40),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}(r(85)),f(r(171))),u=f(r(309)),l=f(r(308));r(246);var c=f(r(244));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){return o.default.createElement("h1",null,"404 error..., page not found")},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.location,r=e.history;return o.default.createElement("div",null,o.default.createElement(s.default,null),o.default.createElement(i.TransitionGroup,{className:"page-wrapper"},o.default.createElement(i.CSSTransition,{in:!0,key:t.key,classNames:"POP"===r.action?{enter:c.default.transitionBackEnter,enterActive:c.default.transitionBackEnterActive,exit:c.default.transitionBackExit,exitActive:c.default.transitionBackExitActive}:{enter:c.default.transitionForwardEnter,enterActive:c.default.transitionForwardEnterActive,exit:c.default.transitionForwardExit,exitActive:c.default.transitionForwardExitActive},timeout:300},o.default.createElement(a.Switch,{location:t},o.default.createElement(a.Route,{exact:!0,path:"/",component:u.default}),o.default.createElement(a.Route,{path:"/login",component:l.default}),o.default.createElement(a.Route,{component:p})))))}}]),t}();t.default=(0,a.withRouter)(d)},319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserService=void 0;r(175);var n,o=r(180),a=(n=o)&&n.__esModule?n:{default:n};function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}var s,u,l=(s=i(regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:t,password:r},e.next=3,(0,a.default)({method:"post",url:"api/Customers/login",data:n});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e,void 0)})),function(e,t){return s.apply(this,arguments)}),c=(u=i(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.default)({method:"get",url:"api/Customers",filter:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,void 0)})),function(e){return u.apply(this,arguments)});t.UserService={login:l,getUsers:c}},338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(181));var a={authenticated:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.GET_LOGGED_USER:return n({},e,{user:t.user,authenticated:!0});case o.SET_LOGGED_USER:return n({},e,{authenticated:!1});case o.GET_USERS:return n({},e,{uesrs:t.users,authenticated:!0})}return e}},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(63),i=r(198),s=r(195),u=r(338),l=(n=u)&&n.__esModule?n:{default:n};var c={username:""},f=((0,s.createForms)({userinfo:c}),(0,a.combineReducers)(o({Users:l.default},(0,s.createForms)({userinfo:c}),{routing:i.routerReducer})));t.default=f},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=function(e){return(0,n.bindActionCreators)(s,e)};var n=r(63),o=u(r(381)),a=u(r(380)),i=(r(198),r(377),u(r(376))),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(85));function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.compose)((0,n.applyMiddleware)(o.default),(0,n.applyMiddleware)(a.default),window.devToolsExtension?window.devToolsExtension():function(e){return e}),c=(0,n.createStore)(i.default,{user:{username:"",admin:!1,_id:""},authenticated:!1},l);t.default=c},401:function(e,t,r){"use strict";var n=l(r(1)),o=r(80),a=r(115),i=r(40),s=l(r(382)),u=l(r(318));function l(e){return e&&e.__esModule?e:{default:e}}(0,o.render)(n.default.createElement(i.Provider,{store:s.default},n.default.createElement(a.BrowserRouter,null,n.default.createElement(u.default,null))),document.getElementById("root"))},604:function(e,t,r){r(603),e.exports=r(401)},85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=t.login=void 0;a(r(180));var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(181)),o=r(319);a(r(179));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){return function(r){o.UserService.login(e,t).then(function(e){localStorage.setItem("user",JSON.stringify(e)),r(function(e){return{type:n.GET_LOGGED_USER,user:e}}(e))})}},s=function(e){return function(t){o.UserService.getUsers(e).then(function(e){t({type:n.GET_USERS,getusers:getusers})})}};t.login=function(e,t){return function(r){r(i(e,t))}},t.getUsers=function(e){return function(t){t(s(e))}}}});
//# sourceMappingURL=app.js.map
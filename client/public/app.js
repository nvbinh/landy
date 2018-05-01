/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Users = __webpack_require__(/*! ./app/redux/actions/Users */ "./src/app/redux/actions/Users.js");

var userActions = _interopRequireWildcard(_Users);

var _Header = __webpack_require__(/*! ./app/components/Header */ "./src/app/components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _FrontPage = __webpack_require__(/*! ./FrontPage */ "./src/FrontPage.jsx");

var _FrontPage2 = _interopRequireDefault(_FrontPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // /*  */
// import React, { Component } from 'react';
// import Header from './app/views/common/Header';
// import { ExampleComponent, MessageList } from './app/components/button.component';

// import './sass/App.scss';

// class App extends Component {
//   static getPasswords() {
//     // Get the passwords and store them in state
//     // fetch('/api/passwords')
//     //   .then(res => res.json())
//     //   .then(passwords => this.setState({ passwords }));
//   }
//   // Initialize state
//   constructor(props) {
//     super(props);
//     this.state = { passwords: [] };
//   }

//   // Fetch passwords after first mount
//   componentDidMount() {
//     // this.getPasswords();
//   }

//   render() {
//     const { passwords } = this.state;

//     <span style="background-color: #ffff00;">handleSubmit = () => { console.log("this is a test") }</span>

//     return (
//       <div className="App">
//         <Header />

//         {/* Render the passwords if we have them */}

//         <MessageList />

//         {passwords.length ? (
//           <div>
//             <h1>5 Passwords.</h1>
//             <ul className="passwords">
//               {passwords.map(password =>
//                 (
//                   <li>
//                     { password }
//                   </li>
//                 )
//               )}
//             </ul>
//             <button className="more" onClick={ this.getPasswords }>
//               Get More
//             </button>
//           </div>
//         ) : (
//           // Render a helpful message otherwise
//           <div>
//             <h1>No passwords :(</h1>
//             <button className="more" onClick={ this.getPasswords }>
//               Try Again?
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// import {mapDispatchToProps} from "./app/redux/stores/Store";


var NotFound = function NotFound() {
  return _react2.default.createElement(
    "h1",
    null,
    "404 error..., page not found"
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchUsedNeeded("bing@gmail.com", "bing");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          { className: "page-wrapper" },
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            {
              "in": true,
              key: location.key,
              timeout: 300 },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              { location: location },
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _FrontPage2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { component: NotFound })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, userActions)(App));

/***/ }),

/***/ "./src/FrontPage.jsx":
/*!***************************!*\
  !*** ./src/FrontPage.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Header = __webpack_require__(/*! ./app/components/Header */ "./src/app/components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _Users = __webpack_require__(/*! ./app/redux/actions/Users */ "./src/app/redux/actions/Users.js");

var userActions = _interopRequireWildcard(_Users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {mapDispatchToProps} from "./app/redux/stores/Store";


// import * as creatorActions from "./app/redux/actions/Actions";

var Front = function (_React$Component) {
  _inherits(Front, _React$Component);

  function Front() {
    _classCallCheck(this, Front);

    return _possibleConstructorReturn(this, (Front.__proto__ || Object.getPrototypeOf(Front)).call(this));
  }

  _createClass(Front, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // console.log(this.props.users);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.users);
      return _react2.default.createElement(
        "div",
        { className: "page" },
        "this is content page"
      );
    }
  }]);

  return Front;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  return _extends({}, props, {
    users: state.Users.users
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, userActions)(Front);

/***/ }),

/***/ "./src/Main.jsx":
/*!**********************!*\
  !*** ./src/Main.jsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Store = __webpack_require__(/*! ./app/redux/stores/Store */ "./src/app/redux/stores/Store.js");

var _Store2 = _interopRequireDefault(_Store);

var _App = __webpack_require__(/*! ./App */ "./src/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _Store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById("root"));

/***/ }),

/***/ "./src/app/components/Header/Header.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Header/Header.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: "/login" },
              "Login"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { exact: true, to: "/signup" },
              "Sign Up"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),

/***/ "./src/app/components/Header/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Header/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(/*! ./Header */ "./src/app/components/Header/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ }),

/***/ "./src/app/constants/ActionTypes.js":
/*!******************************************!*\
  !*** ./src/app/constants/ActionTypes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_LOGGED_USER = exports.GET_LOGGED_USER = "GET_LOGGED_USER";
var SET_LOGGED_USER = exports.SET_LOGGED_USER = "SET_LOGGED_USER";

/***/ }),

/***/ "./src/app/redux/actions/Users.js":
/*!****************************************!*\
  !*** ./src/app/redux/actions/Users.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsedNeeded = undefined;

var _ApiUtils = __webpack_require__(/*! ../../utils/ApiUtils */ "./src/app/utils/ApiUtils.js");

var _ApiUtils2 = _interopRequireDefault(_ApiUtils);

var _ActionTypes = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/app/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

var _user = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchUserSuccess = function fetchUserSuccess(users) {
  return {
    type: types.GET_LOGGED_USER,
    users: users
  };
};

var fetchUser = function fetchUser(username, password) {
  return function (dispatch) {
    // const credentials = {email: username,password: password};
    // const users = await request({method: "post", url: "api/Users/login", data: credentials});

    var users = _user.UserService.login(username, password);

    dispatch(fetchUserSuccess(users));
  };
};

var fetchUsedNeeded = exports.fetchUsedNeeded = function fetchUsedNeeded(username, password) {
  return function (dispatch) {
    dispatch(fetchUser(username, password));
  };
};

/***/ }),

/***/ "./src/app/redux/reducers/Users.js":
/*!*****************************************!*\
  !*** ./src/app/redux/reducers/Users.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ActionTypes = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/app/constants/ActionTypes.js");

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  pending: true,
  logged: false
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {
    case types.GET_LOGGED_USER:
      return _extends({}, state, { users: action.users });
    case types.SET_LOGGED_USER:
      return _extends({}, state, { logged: action.logged });
  }

  // if (action.type === types.GET_LOGGED_USER) {
  //   return Object.assign({}, state, {
  //     pending: false,
  //     users: action.users
  //   });
  // }

  // action.type === types.GET_LOGGED_USER

  // if (action.type === types.SET_LOGGED_USER) {
  //   return Object.assign({}, state, {
  //     pending: false,
  //     logged: action.logged
  //   });
  // }

  return state;
};

exports.default = userReducer;

/***/ }),

/***/ "./src/app/redux/reducers/index.js":
/*!*****************************************!*\
  !*** ./src/app/redux/reducers/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");

var _Users = __webpack_require__(/*! ./Users */ "./src/app/redux/reducers/Users.js");

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  Users: _Users2.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;

/***/ }),

/***/ "./src/app/redux/stores/Store.js":
/*!***************************************!*\
  !*** ./src/app/redux/stores/Store.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = mapDispatchToProps;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _index = __webpack_require__(/*! ../reducers/index */ "./src/app/redux/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

var _Users = __webpack_require__(/*! ../actions/Users */ "./src/app/redux/actions/Users.js");

var userActions = _interopRequireWildcard(_Users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  user: {
    username: "",
    admin: false,
    _id: ""
  },
  isAuthenticated: false

  // const reducers = combineReducers({...rootReducer, routing: routerReducer});
};var enhancers = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _redux.applyMiddleware)(_reduxLogger2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
});

var Store = (0, _redux.createStore)(_index2.default, defaultState, enhancers);
exports.default = Store;
function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(userActions, dispatch);
};

/***/ }),

/***/ "./src/app/services/auth.service.js":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authHeader = authHeader;
/**
 * https://loopback.io/doc/en/lb2/Making-authenticated-requests.html
 * Pass the access token as parameters or headers
 */
function authHeader() {
  var user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    var authorization = ["Authorization:", user.token].join(" ");
    return { authorization: authorization };
  } else {
    return {};
  }
}

/***/ }),

/***/ "./src/app/services/user.service.js":
/*!******************************************!*\
  !*** ./src/app/services/user.service.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = undefined;

var _auth = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.js");

var _ApiUtils = __webpack_require__(/*! ../utils/ApiUtils */ "./src/app/utils/ApiUtils.js");

var _ApiUtils2 = _interopRequireDefault(_ApiUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const login = (username, password) => {
//   const credentials = {email: username, password: password};
//   const users = request({method: "post", url: "api/Users/login", data: credentials});

//   return users;
// };

var login = function login(username, password) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var credentials, users;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              credentials = { email: username, password: password };
              _context.next = 3;
              return (0, _ApiUtils2.default)({ method: "post", url: "api/Users/login", data: credentials });

            case 3:
              users = _context.sent;
              return _context.abrupt("return", users);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var UserService = exports.UserService = {
  login: login
};

// function login(username, password) {
//   return fetchUser(username, password);
// };

/***/ }),

/***/ "./src/app/utils/ApiUtils.js":
/*!***********************************!*\
  !*** ./src/app/utils/ApiUtils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _auth = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Request to the API with the library axios
 * Reference https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb
 */
var client = _axios2.default.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
  withCredentials: true,
  // transformRequest: [(data) => JSON.stringify(data.data)],
  responseType: 'json',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'content-Type': 'application/json;charset=UTF-8'
  }
});

_axios2.default.defaults.baseURL = "http://localhost:3000";

var request = function request(options) {
  options.headers = (0, _auth.authHeader)();

  var onSuccess = function onSuccess(response) {
    // console.log(response.data);
    return response.data;
  };

  var onError = function onError(error) {
    console.log('Request failed: ', error.config);

    if (error.response) {
      console.log('Status: ', error.response.status);
      console.log('Data: ', error.response.data);
      console.log('Headers: ', error.response.headers);
    } else {
      console.log('Error message: ', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return _axios2.default.request(options).then(onSuccess).catch(onError);
};

exports.default = request;

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/Main.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! D:\My Working - HERE\LandTradeReact\landy\client\src/Main.jsx */"./src/Main.jsx");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map
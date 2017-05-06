webpackHotUpdate(0,{

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(109);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(110);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(111);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(113);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(76);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(270);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(269);

var _footer2 = _interopRequireDefault(_footer);

var _loginForm = __webpack_require__(605);

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_loginForm2.default, null),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 601:
false,

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(109);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(110);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(111);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(113);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(76);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login() {
        (0, _classCallCheck3.default)(this, Login);
        return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "fh5co-main" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { "class": "jumbotron-heading" },
                            "\u0412\u0445\u043E\u0434"
                        ),
                        _react2.default.createElement(
                            "form",
                            { action: "Account/Login", method: "POST" },
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "label",
                                    { "for": "inputEmail3", className: "col-sm-2 col-form-label" },
                                    "Email"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    _react2.default.createElement("input", { name: "Email", type: "email", className: "form-control", id: "inputEmail3", placeholder: "Email" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "label",
                                    { "for": "inputPassword3", className: "col-sm-2 col-form-label" },
                                    "Password"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    _react2.default.createElement("input", { name: "Password", type: "password", className: "form-control", id: "inputPassword3", placeholder: "Password" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "offset-sm-2 col-sm-10" },
                                    _react2.default.createElement(
                                        "button",
                                        { type: "submit", className: "btn btn-primary" },
                                        "Sign in"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "h1",
                            { "class": "jumbotron-heading" },
                            "... \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
                        ),
                        _react2.default.createElement(
                            "form",
                            { action: "Account/Register", method: "POST" },
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "label",
                                    { "for": "inputEmail3", className: "col-sm-2 col-form-label" },
                                    "Email"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    _react2.default.createElement("input", { name: "Email", type: "email", className: "form-control", id: "inputEmail3", placeholder: "Email" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "label",
                                    { "for": "inputPassword3", className: "col-sm-2 col-form-label" },
                                    "Password"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    _react2.default.createElement("input", { name: "Password", type: "password", className: "form-control", id: "inputPassword3", placeholder: "Password" })
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "form-group row" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "offset-sm-2 col-sm-10" },
                                    _react2.default.createElement(
                                        "button",
                                        { type: "submit", className: "btn btn-primary" },
                                        "Registrate"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Login;
}(_react.Component);

exports.default = Login;

/***/ })

})
//# sourceMappingURL=0.0a8d7ee523aef1714fb5.hot-update.js.map
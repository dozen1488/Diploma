webpackHotUpdate(1,{

/***/ 597:
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

var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

        _this.state = {
            user: ""
        }, fetch("Account/GetRightsAccess", {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            return result.body.getReader().read();
        }).then(function (res) {
            return JSON.parse(new TextDecoder().decode(res.value));
        }).then(function (userObject) {
            _this.setState;
        });
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "header",
                    { id: "fh5co-header-section", role: "header", className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "h1",
                            { id: "fh5co-logo", className: "pull-left" },
                            _react2.default.createElement(
                                "a",
                                { href: "index.html" },
                                _react2.default.createElement("img", { src: "dist/images/logo.png", alt: "Slant Free HTML5 Template" })
                            )
                        ),
                        _react2.default.createElement(
                            "nav",
                            { id: "fh5co-menu-wrap", role: "navigation" },
                            _react2.default.createElement(
                                "ul",
                                { className: "sf-menu", id: "fh5co-primary-menu" },
                                _react2.default.createElement(
                                    "li",
                                    { className: "active" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "index.html" },
                                        "\u0414\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
                                    )
                                ),
                                _react2.default.createElement(
                                    "li",
                                    { className: "fh5co-special" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "login.html" },
                                        "\u0412\u043E\u0439\u0442\u0438 \u0438\u043B\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { id: "fh5co-hero" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-8 col-md-offset-2" },
                            _react2.default.createElement(
                                "div",
                                { className: "fh5co-hero-wrap" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "fh5co-hero-intro" },
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "to-animate hero-animate-1" },
                                        "Slant. Free HTML5 Template"
                                    ),
                                    _react2.default.createElement(
                                        "h2",
                                        { className: "to-animate hero-animate-2" },
                                        "Lovely Made by ",
                                        _react2.default.createElement(
                                            "a",
                                            { href: "http://freehtml5.co", target: "_blank" },
                                            "FREEHTML5.co"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "to-animate hero-animate-3" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#", className: "btn btn-outline btn-lg" },
                                            "Get Started"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Header;
}(_react.Component);

exports.default = Header;

/***/ })

})
//# sourceMappingURL=1.617afb38fe7a0f1949ee.hot-update.js.map
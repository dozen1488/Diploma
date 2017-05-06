webpackHotUpdate(1,{

/***/ 602:
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

var NewTemplateForm = function (_Component) {
    (0, _inherits3.default)(NewTemplateForm, _Component);

    function NewTemplateForm() {
        (0, _classCallCheck3.default)(this, NewTemplateForm);
        return (0, _possibleConstructorReturn3.default)(this, (NewTemplateForm.__proto__ || (0, _getPrototypeOf2.default)(NewTemplateForm)).apply(this, arguments));
    }

    (0, _createClass3.default)(NewTemplateForm, [{
        key: "handleChange",
        value: function handleChange(event) {
            console.log(event.target.value);
        }
    }, {
        key: "createNewTemplate",
        value: function createNewTemplate() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "input-group" },
                    _react2.default.createElement(
                        "span",
                        { className: "input-group-addon", id: "basic-addon1" },
                        "\u0418\u043C\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430"
                    ),
                    _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "\u0418\u043C\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430",
                        "aria-describedby": "basic-addon1", onChange: this.handleChange }),
                    _react2.default.createElement(
                        "button",
                        { type: "button", className: "btn btn-default navbar-btn",
                            onClick: this.createNewTemplate.bind(this, event) },
                        "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"
                    )
                )
            );
        }
    }]);
    return NewTemplateForm;
}(_react.Component);

exports.default = NewTemplateForm;

/***/ })

})
//# sourceMappingURL=1.77eb9bfd926e29edb335.hot-update.js.map
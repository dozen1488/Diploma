webpackHotUpdate(0,{

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(118);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(28);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(119);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = __webpack_require__(1256);

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateEditor = function (_Component) {
    (0, _inherits3.default)(TemplateEditor, _Component);

    function TemplateEditor(props) {
        (0, _classCallCheck3.default)(this, TemplateEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TemplateEditor.__proto__ || (0, _getPrototypeOf2.default)(TemplateEditor)).call(this, props));

        _this.state = _this.getInitialState();
        return _this;
    }

    (0, _createClass3.default)(TemplateEditor, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                code: "// Code"
            };
        }
    }, {
        key: 'updateCode',
        value: function updateCode(newCode) {
            this.setState({
                code: newCode
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var options = {
                lineNumbers: true,
                mode: "htmlmixed"
            };
            return _react2.default.createElement(_reactCodemirror2.default, { value: this.state.code, onChange: this.updateCode,
                options: options });
        }
    }]);
    return TemplateEditor;
}(_react.Component);

exports.default = TemplateEditor;

/***/ })

})
//# sourceMappingURL=0.44cfb7ec4b2131b42533.hot-update.js.map
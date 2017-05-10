webpackHotUpdate(0,{

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

var _reactCodemirror = __webpack_require__(613);

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateEditor = function (_Component) {
    (0, _inherits3.default)(TemplateEditor, _Component);

    function TemplateEditor(props) {
        (0, _classCallCheck3.default)(this, TemplateEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TemplateEditor.__proto__ || (0, _getPrototypeOf2.default)(TemplateEditor)).call(this, props));

        _this.state = _this.getInitialState();
        fetch('/api/templates/' + localStorage.getItem("templateName"), {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            return result.body.getReader().read();
        }).then(function (res) {
            return new TextDecoder().decode(res.value);
        }).then(function (templateText) {
            _this.updateCode(templateText);
        });
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
        key: 'saveTemplate',
        value: function saveTemplate() {
            var _this2 = this;

            fetch('/api/templates/' + localStorage.getItem("templateName"), {
                method: 'PUT',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.body.getReader().read();
            }).then(function (res) {
                return new TextDecoder().decode(res.value);
            }).then(function (templateText) {
                _this2.updateCode(templateText);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var options = {
                lineNumbers: true,
                mode: "htmlmixed"
            };
            var style = {
                height: '100vh'
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactCodemirror2.default, { style: style, value: this.state.code, onChange: this.updateCode.bind(this),
                    options: options }),
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-primary', onClick: this.saveTemplate.bind(this) },
                    '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
                )
            );
        }
    }]);
    return TemplateEditor;
}(_react.Component);

exports.default = TemplateEditor;

/***/ })

})
//# sourceMappingURL=0.195443d52734c981c4a7.hot-update.js.map
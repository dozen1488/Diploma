webpackHotUpdate(3,{

/***/ 604:
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

var _reactCodemirror = __webpack_require__(602);

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentEditor = function (_Component) {
    (0, _inherits3.default)(ComponentEditor, _Component);

    function ComponentEditor(props) {
        (0, _classCallCheck3.default)(this, ComponentEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ComponentEditor.__proto__ || (0, _getPrototypeOf2.default)(ComponentEditor)).call(this, props));

        _this.state = _this.getInitialState();
        fetch('/api/components/' + localStorage.getItem("componentName"), {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            return result.body.getReader().read();
        }).then(function (res) {
            return new TextDecoder().decode(res.value);
        }).then(function (componentText) {
            _this.updateCode(componentText);
        });
        return _this;
    }

    (0, _createClass3.default)(ComponentEditor, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                code: "<div></div>"
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
        key: 'saveComponent',
        value: function saveComponent() {
            fetch('/api/components/' + localStorage.getItem("componentName"), {
                method: 'PUT',
                credentials: "same-origin",
                body: this.state.code
            }).then(function (result) {
                window.location.replace('cabinet.html');
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
                    { type: 'button', className: 'btn btn-primary', onClick: this.saveComponent.bind(this) },
                    '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
                )
            );
        }
    }]);
    return ComponentEditor;
}(_react.Component);

exports.default = ComponentEditor;

/***/ })

})
//# sourceMappingURL=3.3f46932ad211405f57fe.hot-update.js.map
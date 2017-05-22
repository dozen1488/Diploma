webpackHotUpdate(1,{

/***/ 615:
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

var NewComponentForm = function (_Component) {
    (0, _inherits3.default)(NewComponentForm, _Component);

    function NewComponentForm(props) {
        (0, _classCallCheck3.default)(this, NewComponentForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewComponentForm.__proto__ || (0, _getPrototypeOf2.default)(NewComponentForm)).call(this, props));

        _this.state = _this.getInitialState();
        return _this;
    }

    (0, _createClass3.default)(NewComponentForm, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                componentName: ''
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state.componentName = event.target.value;
        }
    }, {
        key: 'createNewComponent',
        value: function createNewComponent() {
            fetch('/api/components/' + this.state.componentName, {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.text();
            }).then(function (componentName) {
                localStorage.setItem("componentName", componentName);
                window.location.replace('componentEditor.html');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'input-group' },
                    _react2.default.createElement(
                        'span',
                        { className: 'input-group-addon', id: 'basic-addon1' },
                        '\u0418\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0418\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430',
                        'aria-describedby': 'basic-addon1', onChange: this.handleChange.bind(this) }),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-default navbar-btn',
                            onClick: this.createNewComponent.bind(this) },
                        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                    )
                )
            );
        }
    }]);
    return NewComponentForm;
}(_react.Component);

exports.default = NewComponentForm;

/***/ })

})
//# sourceMappingURL=1.a3987e1bb7aaf4cfe46f.hot-update.js.map
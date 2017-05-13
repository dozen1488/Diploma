webpackHotUpdate(4,{

/***/ 607:
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

var _header = __webpack_require__(598);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(597);

var _footer2 = _interopRequireDefault(_footer);

var _newPage = __webpack_require__(618);

var _newPage2 = _interopRequireDefault(_newPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteEditor = function (_Component) {
    (0, _inherits3.default)(SiteEditor, _Component);

    function SiteEditor() {
        (0, _classCallCheck3.default)(this, SiteEditor);
        return (0, _possibleConstructorReturn3.default)(this, (SiteEditor.__proto__ || (0, _getPrototypeOf2.default)(SiteEditor)).apply(this, arguments));
    }

    (0, _createClass3.default)(SiteEditor, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6 col-md-4' },
                    _react2.default.createElement(_newPage2.default, null)
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);
    return SiteEditor;
}(_react.Component);

exports.default = SiteEditor;

/***/ }),

/***/ 618:
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

var NewPageForm = function (_Component) {
    (0, _inherits3.default)(NewPageForm, _Component);

    function NewPageForm(props) {
        (0, _classCallCheck3.default)(this, NewPageForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewPageForm.__proto__ || (0, _getPrototypeOf2.default)(NewPageForm)).call(this, props));

        _this.state = _this.getInitialState();
        return _this;
    }

    (0, _createClass3.default)(NewPageForm, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                pageName: ''
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state.pageName = event.target.value;
        }
    }, {
        key: 'createNewPage',
        value: function createNewPage() {
            fetch('/api/sites/' + localStorage.getItem("siteName") + '/' + this.state.pageName, {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.body.getReader().read();
            }).then(function (res) {
                return new TextDecoder().decode(res.value);
            }).then(function (pageName) {
                localStorage.setItem("pageName", pageName);
                window.location.replace('pageEditor.html');
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
                        '\u0418\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0418\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B',
                        'aria-describedby': 'basic-addon1', onChange: this.handleChange.bind(this) }),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-default navbar-btn',
                            onClick: this.createNewPage.bind(this, event) },
                        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                    )
                )
            );
        }
    }]);
    return NewPageForm;
}(_react.Component);

exports.default = NewPageForm;

/***/ })

})
//# sourceMappingURL=4.28631e9c7135830d2929.hot-update.js.map
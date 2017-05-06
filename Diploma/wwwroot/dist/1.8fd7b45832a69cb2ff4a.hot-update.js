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

var _header = __webpack_require__(270);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(269);

var _footer2 = _interopRequireDefault(_footer);

var _newTemplate = __webpack_require__(606);

var _newTemplate2 = _interopRequireDefault(_newTemplate);

var _newSite = __webpack_require__(607);

var _newSite2 = _interopRequireDefault(_newSite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cabinet = function (_Component) {
    (0, _inherits3.default)(Cabinet, _Component);

    function Cabinet() {
        (0, _classCallCheck3.default)(this, Cabinet);
        return (0, _possibleConstructorReturn3.default)(this, (Cabinet.__proto__ || (0, _getPrototypeOf2.default)(Cabinet)).apply(this, arguments));
    }

    (0, _createClass3.default)(Cabinet, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_newTemplate2.default, null),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);
    return Cabinet;
}(_react.Component);

exports.default = Cabinet;

/***/ }),

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewSiteForm = function (_Component) {
    (0, _inherits3.default)(NewSiteForm, _Component);

    function NewSiteForm(props) {
        (0, _classCallCheck3.default)(this, NewSiteForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewSiteForm.__proto__ || (0, _getPrototypeOf2.default)(NewSiteForm)).call(this, props));

        _this.state = _this.getInitialState();
        return _this;
    }

    (0, _createClass3.default)(NewSiteForm, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                siteName: ''
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state.templateName = event.target.value;
        }
    }, {
        key: 'createNewTemplate',
        value: function createNewTemplate() {
            console.log(this.state.siteName);
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
                        '\u0418\u043C\u044F \u0441\u0430\u0439\u0442\u0430'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0418\u043C\u044F \u0441\u0430\u0439\u0442\u0430',
                        'aria-describedby': 'basic-addon1', onChange: this.handleChange.bind(this) }),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-default navbar-btn',
                            onClick: this.createNewTemplate.bind(this, event) },
                        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                    )
                )
            );
        }
    }]);
    return NewSiteForm;
}(_react.Component);

exports.default = NewSiteForm;

/***/ })

})
//# sourceMappingURL=1.8fd7b45832a69cb2ff4a.hot-update.js.map
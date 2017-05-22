webpackHotUpdate(2,{

/***/ 624:
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

var _reactDropdown = __webpack_require__(605);

var _reactDropdown2 = _interopRequireDefault(_reactDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewImageForm = function (_Component) {
    (0, _inherits3.default)(NewImageForm, _Component);

    function NewImageForm(props) {
        (0, _classCallCheck3.default)(this, NewImageForm);
        return (0, _possibleConstructorReturn3.default)(this, (NewImageForm.__proto__ || (0, _getPrototypeOf2.default)(NewImageForm)).call(this, props));
    }

    (0, _createClass3.default)(NewImageForm, [{
        key: 'render',
        value: function render() {
            var siteAction = '../api/sites/' + localStorage.getItem("siteName") + '/images';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
                ),
                _react2.default.createElement(
                    'form',
                    { action: siteAction, className: 'form-group', method: 'post', encType: 'multipart/form-data' },
                    _react2.default.createElement('input', { type: 'file', placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435', name: 'uploadedFile' }),
                    _react2.default.createElement('input', { type: 'submit', value: '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C' })
                )
            );
        }
    }]);
    return NewImageForm;
}(_react.Component);

exports.default = NewImageForm;

/***/ })

})
//# sourceMappingURL=2.1769210ad5618a976e63.hot-update.js.map
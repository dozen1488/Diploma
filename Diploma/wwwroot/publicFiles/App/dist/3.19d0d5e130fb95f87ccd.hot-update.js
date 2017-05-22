webpackHotUpdate(3,{

/***/ 610:
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

var _newPage = __webpack_require__(621);

var _newPage2 = _interopRequireDefault(_newPage);

var _pageList = __webpack_require__(622);

var _pageList2 = _interopRequireDefault(_pageList);

var _uploadImage = __webpack_require__(644);

var _uploadImage2 = _interopRequireDefault(_uploadImage);

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
                _react2.default.createElement(_uploadImage2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_pageList2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
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

/***/ 644:
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

var _reactDropdown = __webpack_require__(642);

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
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'file', title: 'Search for a file to add' })
            );
        }
    }]);
    return NewImageForm;
}(_react.Component);

exports.default = NewImageForm;

/***/ })

})
//# sourceMappingURL=3.19d0d5e130fb95f87ccd.hot-update.js.map
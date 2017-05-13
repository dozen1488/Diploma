webpackHotUpdate(0,{

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(799);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(175);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(176);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(177);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(179);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(178);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(76);

var _react2 = _interopRequireDefault(_react);

var _reactDnd = __webpack_require__(785);

var _reactDndHtml5Backend = __webpack_require__(773);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _Knight = __webpack_require__(793);

var _Knight2 = _interopRequireDefault(_Knight);

var _Square = __webpack_require__(794);

var _Square2 = _interopRequireDefault(_Square);

var _Board = __webpack_require__(795);

var _Board2 = _interopRequireDefault(_Board);

var _Game = __webpack_require__(805);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageEditor = function (_Component) {
    (0, _inherits3.default)(PageEditor, _Component);

    function PageEditor(props) {
        (0, _classCallCheck3.default)(this, PageEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));

        _this.state = { position: [7, 4] };
        return _this;
    }

    (0, _createClass3.default)(PageEditor, [{
        key: 'observe',
        value: function observe(_ref) {
            var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                x = _ref2[0],
                y = _ref2[1];

            this.setState({ position: [x, y] });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Board2.default, { knightPosition: [7, 4] });
        }
    }]);
    return PageEditor;
}(_react.Component);

exports.default = PageEditor;

/***/ })

})
//# sourceMappingURL=0.1177612e123409f16d42.hot-update.js.map
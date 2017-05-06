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

var _spectacle = __webpack_require__(727);

var _spectacleCodeSlide = __webpack_require__(1289);

var _spectacleCodeSlide2 = _interopRequireDefault(_spectacleCodeSlide);

var _preloader = __webpack_require__(1323);

var _preloader2 = _interopRequireDefault(_preloader);

var _default = __webpack_require__(1317);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _default2.default)({
  primary: "#039BE5",
  secondary: "#607D8B"
});

(0, _preloader2.default)({});

var TemplateEditor = function (_Component) {
  (0, _inherits3.default)(TemplateEditor, _Component);

  function TemplateEditor() {
    (0, _classCallCheck3.default)(this, TemplateEditor);
    return (0, _possibleConstructorReturn3.default)(this, (TemplateEditor.__proto__ || (0, _getPrototypeOf2.default)(TemplateEditor)).apply(this, arguments));
  }

  (0, _createClass3.default)(TemplateEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _spectacle.Spectacle,
        { theme: "okaidia" },
        _react2.default.createElement(
          _spectacle.Deck,
          { transition: [], transitionDuration: 0, progress: 'bar' },
          _react2.default.createElement(_spectacleCodeSlide2.default, {
            transition: [],
            lang: 'js',
            code: "code",
            ranges: [{ loc: [0, 270], title: "Walking through some code" }, { loc: [0, 1], title: "The Beginning" }, { loc: [1, 2] }, { loc: [1, 2], note: "Heres a note!" }, { loc: [2, 3] }, { loc: [8, 10] }] })
        )
      );
    }
  }]);
  return TemplateEditor;
}(_react.Component);

exports.default = TemplateEditor;

/***/ })

})
//# sourceMappingURL=0.53512e1923669d136a5f.hot-update.js.map
webpackHotUpdate(0,{

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageEditor = function (_Component) {
    (0, _inherits3.default)(PageEditor, _Component);

    function PageEditor() {
        (0, _classCallCheck3.default)(this, PageEditor);
        return (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).apply(this, arguments));
    }

    (0, _createClass3.default)(PageEditor, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Square2.default,
                    { black: true },
                    _react2.default.createElement(_Knight2.default, null)
                )
            );
        }
    }]);
    return PageEditor;
}(_react.Component);

exports.default = PageEditor;

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = __webpack_require__(616);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Square = __webpack_require__(794);

var _Square2 = _interopRequireDefault(_Square);

var _Knight = __webpack_require__(793);

var _Knight2 = _interopRequireDefault(_Knight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = function (_Component) {
  (0, _inherits3.default)(Board, _Component);

  function Board() {
    (0, _classCallCheck3.default)(this, Board);
    return (0, _possibleConstructorReturn3.default)(this, (Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).apply(this, arguments));
  }

  (0, _createClass3.default)(Board, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Square2.default,
          { black: true },
          _react2.default.createElement(_Knight2.default, null)
        )
      );
    }
  }]);
  return Board;
}(_react.Component);

exports.default = Board;


Board.propTypes = {
  knightPosition: _propTypes2.default.arrayOf(_propTypes2.default.number.isRequired).isRequired
};

/***/ })

})
//# sourceMappingURL=0.8ff369e7f762002eb336.hot-update.js.map
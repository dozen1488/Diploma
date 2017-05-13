webpackHotUpdate(0,{

/***/ 793:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemTypes = {
  KNIGHT: 'knight'
};

var knightSource = {
  beginDrag: function beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

var Knight = function (_Component) {
  (0, _inherits3.default)(Knight, _Component);

  function Knight() {
    (0, _classCallCheck3.default)(this, Knight);
    return (0, _possibleConstructorReturn3.default)(this, (Knight.__proto__ || (0, _getPrototypeOf2.default)(Knight)).apply(this, arguments));
  }

  (0, _createClass3.default)(Knight, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        '\u2658'
      );
    }
  }]);
  return Knight;
}(_react.Component);

exports.default = Knight;

/***/ })

})
//# sourceMappingURL=0.72a8404f0cf8268f879e.hot-update.js.map
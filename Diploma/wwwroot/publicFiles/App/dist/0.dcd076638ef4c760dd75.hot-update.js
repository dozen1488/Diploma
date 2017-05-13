webpackHotUpdate(0,{

/***/ 794:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = function (_Component) {
  (0, _inherits3.default)(Square, _Component);

  function Square() {
    (0, _classCallCheck3.default)(this, Square);
    return (0, _possibleConstructorReturn3.default)(this, (Square.__proto__ || (0, _getPrototypeOf2.default)(Square)).apply(this, arguments));
  }

  (0, _createClass3.default)(Square, [{
    key: 'render',
    value: function render() {
      var black = this.props.black;

      var fill = black ? 'black' : 'white';
      var stroke = black ? 'white' : 'black';

      return _react2.default.createElement('div', { style: {
          backgroundColor: fill,
          color: stroke,
          width: '12vw',
          height: '12vh'
        } });
    }
  }]);
  return Square;
}(_react.Component);

exports.default = Square;


Square.propTypes = {
  black: _propTypes2.default.bool
};

/***/ })

})
//# sourceMappingURL=0.dcd076638ef4c760dd75.hot-update.js.map
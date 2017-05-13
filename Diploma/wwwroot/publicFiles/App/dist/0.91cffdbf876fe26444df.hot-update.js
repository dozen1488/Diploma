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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Knight = function (_Component) {
  (0, _inherits3.default)(Knight, _Component);

  function Knight() {
    (0, _classCallCheck3.default)(this, Knight);
    return (0, _possibleConstructorReturn3.default)(this, (Knight.__proto__ || (0, _getPrototypeOf2.default)(Knight)).apply(this, arguments));
  }

  (0, _createClass3.default)(Knight, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging;

      return connectDragSource(_react2.default.createElement(
        'div',
        { style: {
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move'
          } },
        '\u2658'
      ));
    }
  }]);
  return Knight;
}(_react.Component);

Knight.propTypes = {
  connectDragSource: _react.PropTypes.func.isRequired,
  isDragging: _react.PropTypes.bool.isRequired
};
(0, _reactDnd.DragSource)(ItemTypes.KNIGHT, knightSource, collect)(Knight);

var PageEditor = function (_Component2) {
  (0, _inherits3.default)(PageEditor, _Component2);

  function PageEditor(props) {
    (0, _classCallCheck3.default)(this, PageEditor);
    return (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        (0, _reactDnd.DragSource)(ItemTypes.KNIGHT, knightSource, collect)(Knight)
      );
    }
  }]);
  return PageEditor;
}(_react.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(PageEditor);

/***/ })

})
//# sourceMappingURL=0.91cffdbf876fe26444df.hot-update.js.map
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

var Types = {
  CARD: 'card'
};

var cardSource = {
  beginDrag: function beginDrag(props) {
    // Return the data describing the dragged item
    var item = { id: props.id };
    return item;
  },
  endDrag: function endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    var item = monitor.getItem();
    var dropResult = monitor.getDropResult();
    CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

var PageEditor = function (_Component) {
  (0, _inherits3.default)(PageEditor, _Component);

  function PageEditor() {
    (0, _classCallCheck3.default)(this, PageEditor);
    return (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'render',
    value: function render() {
      // Your component receives its own props as usual
      var id = this.props.id;

      // These two props are injected by React DnD,
      // as defined by your `collect` function above:

      var _props = this.props,
          isDragging = _props.isDragging,
          connectDragSource = _props.connectDragSource;


      return connectDragSource(_react2.default.createElement(
        'div',
        null,
        'I am a draggable card number ',
        id,
        isDragging && ' (and I am being dragged now)'
      ));
    }
  }]);
  return PageEditor;
}(_react.Component);

exports.default = (0, _reactDnd.DragSource)(Types.CARD, cardSource, collect)(PageEditor);

/***/ })

})
//# sourceMappingURL=0.d456c3b705b529aef0df.hot-update.js.map
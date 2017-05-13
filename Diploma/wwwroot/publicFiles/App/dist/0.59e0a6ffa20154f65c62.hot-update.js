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

  function PageEditor(props) {
    (0, _classCallCheck3.default)(this, PageEditor);
    return (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
          } },
        (0, _reactDnd.DragSource)('knight', knightSource, collect)(Knight)
      );
    }
  }]);
  return PageEditor;
}(_react.Component);

exports.default = PageEditor;

/***/ })

})
//# sourceMappingURL=0.59e0a6ffa20154f65c62.hot-update.js.map
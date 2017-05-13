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

var _propTypes = __webpack_require__(616);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(785);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemTypes = {
    KNIGHT: 'knight'
};

var knightSource = {
    beginDrag: function beginDrag(props) {
        console.log(props);
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
    connectDragSource: _propTypes2.default.func.isRequired,
    isDragging: _propTypes2.default.bool.isRequired
};

exports.default = (0, _reactDnd.DragSource)(ItemTypes.KNIGHT, knightSource, collect)(Knight);

/***/ })

})
//# sourceMappingURL=0.b0cc9d3ab149d630cbb9.hot-update.js.map
webpackHotUpdate(0,{

/***/ 806:
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

var _propTypes = __webpack_require__(616);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Square = __webpack_require__(794);

var _Square2 = _interopRequireDefault(_Square);

var _Game = __webpack_require__(805);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemTypes = {
    KNIGHT: 'knight'
};

var squareTarget = {
    drop: function drop(props, monitor) {
        (0, _Game.moveKnight)(props.x, props.y);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

var BoardSquare = function (_Component) {
    (0, _inherits3.default)(BoardSquare, _Component);

    function BoardSquare() {
        (0, _classCallCheck3.default)(this, BoardSquare);
        return (0, _possibleConstructorReturn3.default)(this, (BoardSquare.__proto__ || (0, _getPrototypeOf2.default)(BoardSquare)).apply(this, arguments));
    }

    (0, _createClass3.default)(BoardSquare, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                x = _props.x,
                y = _props.y,
                connectDropTarget = _props.connectDropTarget,
                isOver = _props.isOver;

            var black = (x + y) % 2 === 1;

            return connectDropTarget(_react2.default.createElement(
                'div',
                { style: {
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                    } },
                _react2.default.createElement(
                    _Square2.default,
                    { black: black },
                    this.props.children
                ),
                isOver && _react2.default.createElement('div', { style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow'
                    } })
            ));
        }
    }]);
    return BoardSquare;
}(_react.Component);

BoardSquare.propTypes = {
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired,
    isOver: _propTypes2.default.bool.isRequired
};

exports.default = (0, _reactDnd.DropTarget)(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);

/***/ })

})
//# sourceMappingURL=0.214e70c3de1743a6d56d.hot-update.js.map
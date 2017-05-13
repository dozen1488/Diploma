webpackHotUpdate(0,{

/***/ 795:
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

var _reactDndHtml5Backend = __webpack_require__(773);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _react = __webpack_require__(76);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(616);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(785);

var _Square = __webpack_require__(794);

var _Square2 = _interopRequireDefault(_Square);

var _Knight = __webpack_require__(793);

var _Knight2 = _interopRequireDefault(_Knight);

var _Game = __webpack_require__(805);

var _BoardSquare = __webpack_require__(806);

var _BoardSquare2 = _interopRequireDefault(_BoardSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = function (_Component) {
    (0, _inherits3.default)(Board, _Component);

    function Board() {
        (0, _classCallCheck3.default)(this, Board);
        return (0, _possibleConstructorReturn3.default)(this, (Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).apply(this, arguments));
    }

    (0, _createClass3.default)(Board, [{
        key: 'renderSquare',
        value: function renderSquare(i) {
            var x = i % 8;
            var y = Math.floor(i / 8);
            return _react2.default.createElement(
                'div',
                { key: i,
                    style: { width: '12.5%', height: '12.5%' } },
                _react2.default.createElement(
                    _BoardSquare2.default,
                    { x: x,
                        y: y },
                    this.renderPiece(x, y)
                )
            );
        }
    }, {
        key: 'renderPiece',
        value: function renderPiece(x, y) {
            var _props$knightPosition = (0, _slicedToArray3.default)(this.props.knightPosition, 2),
                knightX = _props$knightPosition[0],
                knightY = _props$knightPosition[1];

            if (x === knightX && y === knightY) {
                return _react2.default.createElement(_Knight2.default, null);
            }
        }
    }, {
        key: 'handleSquareClick',
        value: function handleSquareClick(toX, toY) {
            (0, _Game.moveKnight)(toX, toY);
        }
    }, {
        key: 'render',
        value: function render() {
            var squares = [];
            for (var i = 0; i < 64; i++) {
                squares.push(this.renderSquare(i));
            }

            return _react2.default.createElement(
                'div',
                { style: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexWrap: 'wrap'
                    } },
                squares
            );
        }
    }]);
    return Board;
}(_react.Component);

Board.propTypes = {
    knightPosition: _propTypes2.default.arrayOf(_propTypes2.default.number.isRequired).isRequired
};

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Board);

/***/ }),

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

var _propTypes = __webpack_require__(616);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Square = __webpack_require__(794);

var _Square2 = _interopRequireDefault(_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                y = _props.y;

            var black = (x + y) % 2 === 1;

            return _react2.default.createElement(
                _Square2.default,
                { black: black },
                this.props.children
            );
        }
    }]);
    return BoardSquare;
}(_react.Component);

exports.default = BoardSquare;


BoardSquare.propTypes = {
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
};

/***/ })

})
//# sourceMappingURL=0.4acca03cbe26645c6729.hot-update.js.map
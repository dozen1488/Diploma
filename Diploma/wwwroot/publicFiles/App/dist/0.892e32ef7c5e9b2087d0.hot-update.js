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
        key: 'renderSquare',
        value: function renderSquare(i) {
            var x = i % 8;
            var y = Math.floor(i / 8);
            var black = (x + y) % 2 === 1;

            var _props$knightPosition = (0, _slicedToArray3.default)(this.props.knightPosition, 2),
                knightX = _props$knightPosition[0],
                knightY = _props$knightPosition[1];

            var piece = x === knightX && y === knightY ? _react2.default.createElement(_Knight2.default, null) : null;

            return _react2.default.createElement(
                'div',
                { key: i,
                    style: { width: '12vh', height: '12vh' } },
                _react2.default.createElement(
                    _Square2.default,
                    { black: black },
                    piece
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var squares = [];
            debugger;
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

exports.default = Board;


Board.propTypes = {
    knightPosition: _propTypes2.default.arrayOf(_propTypes2.default.number.isRequired).isRequired
};

/***/ })

})
//# sourceMappingURL=0.892e32ef7c5e9b2087d0.hot-update.js.map
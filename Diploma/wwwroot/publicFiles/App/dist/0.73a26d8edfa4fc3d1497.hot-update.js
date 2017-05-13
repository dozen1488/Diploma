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
          style: { width: '12.5%', height: '12.5%' } },
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

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(183)
  , TAG = __webpack_require__(67)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(800), __esModule: true };

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(801), __esModule: true };

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(798);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(797);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(310);
__webpack_require__(306);
module.exports = __webpack_require__(803);

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(310);
__webpack_require__(306);
module.exports = __webpack_require__(804);

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(796)
  , ITERATOR  = __webpack_require__(67)('iterator')
  , Iterators = __webpack_require__(111);
module.exports = __webpack_require__(43).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(77)
  , get      = __webpack_require__(802);
module.exports = __webpack_require__(43).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(796)
  , ITERATOR  = __webpack_require__(67)('iterator')
  , Iterators = __webpack_require__(111);
module.exports = __webpack_require__(43).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ })

})
//# sourceMappingURL=0.73a26d8edfa4fc3d1497.hot-update.js.map
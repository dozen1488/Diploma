webpackHotUpdate(6,{

/***/ 607:
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

var _sortablejs = __webpack_require__(621);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageEditor = function (_Component) {
    (0, _inherits3.default)(PageEditor, _Component);

    function PageEditor(props) {
        (0, _classCallCheck3.default)(this, PageEditor);
        return (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));
    }

    (0, _createClass3.default)(PageEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var el = document.getElementById('from');
            var sortable = _sortablejs2.default.create(el, {
                group: {
                    name: "shared",
                    pull: "clone",
                    revertClone: true
                },
                onEnd: function onEnd(event) {
                    console.log(event);
                }
            });
            var el1 = document.getElementById('to');
            var sortable1 = _sortablejs2.default.create(el1, {
                group: "shared"
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: {
                            width: '50vw',
                            float: 'left'
                        } },
                    _react2.default.createElement(
                        'ul',
                        { id: 'to' },
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 2'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 3'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: {
                            width: '50vw',
                            float: 'right'
                        } },
                    _react2.default.createElement(
                        'ul',
                        { id: 'from' },
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 2'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'item 3'
                        )
                    )
                )
            );
        }
    }]);
    return PageEditor;
}(_react.Component);

exports.default = PageEditor;

/***/ })

})
//# sourceMappingURL=6.fdb97dc3342c464f89e1.hot-update.js.map
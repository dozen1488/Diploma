webpackHotUpdate(2,{

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(109);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(110);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(111);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(113);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(76);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageList = function (_Component) {
    (0, _inherits3.default)(PageList, _Component);

    function PageList(props) {
        (0, _classCallCheck3.default)(this, PageList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PageList.__proto__ || (0, _getPrototypeOf2.default)(PageList)).call(this, props));

        _this.state = _this.getInitialState();
        _this.getSitePages(_this);
        return _this;
    }

    (0, _createClass3.default)(PageList, [{
        key: 'getSitePages',
        value: function getSitePages(self) {
            fetch('/api/sites/' + localStorage.getItem("siteName"), {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (pages) {
                self.setState(function (prevstate) {
                    prevstate.pageList = pages;
                });
            });
        }
    }, {
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                pageList: []
            };
        }
    }, {
        key: 'editPage',
        value: function editPage(pageName) {
            localStorage.setItem("templateName", '');
            localStorage.setItem("pageName", pageName);
            window.location.replace('pageEditor.html');
        }
    }, {
        key: 'deletePage',
        value: function deletePage(pageName) {
            var self = this;
            fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + pageName, {
                method: 'DELETE',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function () {
                self.getSitePages(self);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var pages = this.state.pageList.map(function (pageName) {
                return _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            pageName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', role: 'group', 'aria-label': '...' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.editPage.bind(_this2, pageName) },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.deletePage.bind(_this2, pageName) },
                            'Delete'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'col-md-4 thumbnail' },
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B'
                ),
                pages
            );
        }
    }]);
    return PageList;
}(_react.Component);

exports.default = PageList;

/***/ })

})
//# sourceMappingURL=2.c44ea7a00eeee3ea7778.hot-update.js.map
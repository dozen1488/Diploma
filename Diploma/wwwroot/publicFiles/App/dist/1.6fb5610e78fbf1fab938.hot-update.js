webpackHotUpdate(1,{

/***/ 618:
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

var SiteList = function (_Component) {
    (0, _inherits3.default)(SiteList, _Component);

    function SiteList(props) {
        (0, _classCallCheck3.default)(this, SiteList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SiteList.__proto__ || (0, _getPrototypeOf2.default)(SiteList)).call(this, props));

        _this.state = _this.getInitialState();
        _this.getSites(_this);
        return _this;
    }

    (0, _createClass3.default)(SiteList, [{
        key: 'getSites',
        value: function getSites(self) {
            fetch('/api/sites', {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (sites) {
                self.setState(function (prevstate) {
                    prevstate.siteList = sites;
                });
            });
        }
    }, {
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                siteList: []
            };
        }
    }, {
        key: 'editSite',
        value: function editSite(siteName) {
            localStorage.setItem("siteName", siteName);
            window.location.replace('siteEditor.html');
        }
    }, {
        key: 'deleteComponent',
        value: function deleteComponent(siteName) {
            var self = this;
            fetch('/api/sites/' + siteName, {
                method: 'DELETE',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function () {
                self.getSites(self);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var sites = this.state.siteList.map(function (siteName) {
                return _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            siteName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', role: 'group', 'aria-label': '...' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.editSite.bind(_this2, siteName) },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.deleteComponent.bind(_this2, siteName) },
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
                    '\u0421\u0430\u0439\u0442\u044B'
                ),
                sites
            );
        }
    }]);
    return SiteList;
}(_react.Component);

exports.default = SiteList;

/***/ })

})
//# sourceMappingURL=1.6fb5610e78fbf1fab938.hot-update.js.map
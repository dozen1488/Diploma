webpackHotUpdate(1,{

/***/ 614:
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

var ComponentList = function (_Component) {
    (0, _inherits3.default)(ComponentList, _Component);

    function ComponentList(props) {
        (0, _classCallCheck3.default)(this, ComponentList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ComponentList.__proto__ || (0, _getPrototypeOf2.default)(ComponentList)).call(this, props));

        _this.state = _this.getInitialState();
        _this.getComponents(_this);
        return _this;
    }

    (0, _createClass3.default)(ComponentList, [{
        key: 'getComponents',
        value: function getComponents(self) {
            fetch('/api/components', {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (components) {
                self.setState(function (prevstate) {
                    prevstate.componentList = components;
                });
            });
        }
    }, {
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                componentList: []
            };
        }
    }, {
        key: 'editComponent',
        value: function editComponent(templateName) {
            localStorage.setItem("componentName", templateName);
            window.location.replace('componentEditor.html');
        }
    }, {
        key: 'deleteComponent',
        value: function deleteComponent(componentName) {
            var self = this;
            fetch('/api/components/' + componentName, {
                method: 'DELETE',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function () {
                self.getComponents(self);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var components = this.state.componentList.map(function (componentName) {
                return _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            componentName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', role: 'group', 'aria-label': '...' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.editComponent.bind(_this2, componentName) },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.deleteComponent.bind(_this2, componentName) },
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
                    '\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B'
                ),
                components
            );
        }
    }]);
    return ComponentList;
}(_react.Component);

exports.default = ComponentList;

/***/ })

})
//# sourceMappingURL=1.98af005ed9fe7e6bcc0e.hot-update.js.map
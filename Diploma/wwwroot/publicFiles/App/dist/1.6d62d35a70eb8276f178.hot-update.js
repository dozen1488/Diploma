webpackHotUpdate(1,{

/***/ 619:
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

var TemplateList = function (_Component) {
    (0, _inherits3.default)(TemplateList, _Component);

    function TemplateList(props) {
        (0, _classCallCheck3.default)(this, TemplateList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TemplateList.__proto__ || (0, _getPrototypeOf2.default)(TemplateList)).call(this, props));

        _this.state = _this.getInitialState();
        _this.getTemplates(_this);

        return _this;
    }

    (0, _createClass3.default)(TemplateList, [{
        key: 'getTemplates',
        value: function getTemplates(self) {
            fetch('/api/templates', {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (templates) {
                self.setState(function (prevstate) {
                    prevstate.templateList = templates;
                });
            });
        }
    }, {
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                templateList: []
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.state.siteName = event.target.value;
        }
    }, {
        key: 'editTemplate',
        value: function editTemplate(templateName) {
            localStorage.setItem("templateName", templateName);
            window.location.replace('templateEditor.html');
        }
    }, {
        key: 'deleteTemplate',
        value: function deleteTemplate(templateName) {
            var self = this;
            fetch('/api/templates/' + templateName, {
                method: 'DELETE',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function () {
                self.getTemplates(self);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var templates = this.state.templateList.map(function (templateName) {
                return _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            templateName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', role: 'group', 'aria-label': '...' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.editTemplate.bind(_this2, templateName) },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn',
                                onClick: _this2.deleteTemplate.bind(_this2, templateName) },
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
                    'Templates'
                ),
                templates
            );
        }
    }]);
    return TemplateList;
}(_react.Component);

exports.default = TemplateList;

/***/ })

})
//# sourceMappingURL=1.6d62d35a70eb8276f178.hot-update.js.map
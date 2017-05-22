webpackHotUpdate(3,{

/***/ 621:
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

var _reactDropdown = __webpack_require__(642);

var _reactDropdown2 = _interopRequireDefault(_reactDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewPageForm = function (_Component) {
    (0, _inherits3.default)(NewPageForm, _Component);

    function NewPageForm(props) {
        (0, _classCallCheck3.default)(this, NewPageForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewPageForm.__proto__ || (0, _getPrototypeOf2.default)(NewPageForm)).call(this, props));

        _this.state = _this.getInitialState();
        var self = _this;
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
                prevstate.availableTemps = templates;
                return prevstate;
            });
        });
        return _this;
    }

    (0, _createClass3.default)(NewPageForm, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                pageName: '',
                tempName: '',
                availableTemps: []
            };
        }
    }, {
        key: 'templateNameChange',
        value: function templateNameChange(event) {
            this.setState(function (prevstate) {
                prevstate.tempName = event.value;
                return prevstate;
            });
        }
    }, {
        key: 'pageNameChange',
        value: function pageNameChange(event) {
            var pagename = event.target.value;
            this.setState(function (prevstate) {
                prevstate.pageName = pagename;
                return prevstate;
            });
        }
    }, {
        key: 'createNewPage',
        value: function createNewPage() {
            var _this2 = this;

            fetch('/api/sites/' + localStorage.getItem("siteName") + '/' + this.state.pageName, {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.body.getReader().read();
            }).then(function (res) {
                return new TextDecoder().decode(res.value);
            }).then(function (pageName) {
                localStorage.setItem("pageName", _this2.state.pageName);
                localStorage.setItem("templateName", _this2.state.tempName);
                window.location.replace('pageEditor.html');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var options = this.state.availableTemps;
            var choosenTemplate = this.state.tempName;
            return _react2.default.createElement(
                'div',
                { className: 'conrainer' },
                _react2.default.createElement(_reactDropdown2.default, { options: options, onChange: this.templateNameChange.bind(this),
                    value: choosenTemplate,
                    placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D' }),
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0418\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B',
                    'aria-describedby': 'basic-addon1', onChange: this.pageNameChange.bind(this) }),
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-default navbar-btn',
                        onClick: this.createNewPage.bind(this, event) },
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                )
            );
        }
    }]);
    return NewPageForm;
}(_react.Component);

exports.default = NewPageForm;

/***/ })

})
//# sourceMappingURL=3.a8cb18f930ba6d1b1341.hot-update.js.map
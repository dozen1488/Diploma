webpackHotUpdate(6,{

/***/ 607:
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

var _sortablejs = __webpack_require__(627);

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyCode = '\n    (\n        function el(event){\n            console.dir(event.srcElement.parentElement.childNodes[1].value);\n            event.srcElement.parentElement.innerText = event.srcElement.parentElement.childNodes[1].value;\n        }\n    )\n    (event)\n';

var PageEditor = function (_Component) {
    (0, _inherits3.default)(PageEditor, _Component);

    function PageEditor(props) {
        (0, _classCallCheck3.default)(this, PageEditor);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));

        _this.state = _this.getInitialState();
        _this.getBody();
        return _this;
    }

    (0, _createClass3.default)(PageEditor, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                innerHTML: ''
            };
        }
    }, {
        key: 'getBody',
        value: function getBody() {
            var _this2 = this;

            if (localStorage.getItem("templateName") != '') fetch('/api/templates/' + localStorage.getItem("templateName"), {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.body.getReader().read();
            }).then(function (res) {
                return new TextDecoder().decode(res.value);
            }).then(function (templateText) {
                _this2.setState(function (prevstate) {
                    prevstate.innerHTML = templateText;
                });
                _this2.componentDidMount();
            });else {
                fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + localStorage.getItem("pageName"), {
                    method: 'GET',
                    credentials: "same-origin",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (result) {
                    return result.body.getReader().read();
                }).then(function (res) {
                    return new TextDecoder().decode(res.value);
                }).then(function (templateText) {
                    _this2.setState(function (prevstate) {
                        prevstate.innerHTML = templateText;
                    });
                    _this2.componentDidMount();
                });
            }
        }
    }, {
        key: 'onEndStrategy',
        value: function onEndStrategy(event) {
            event.item = document.createElement("div");
            //event.clone.className
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var el = document.getElementById('from');
            var sortable = _sortablejs2.default.create(el, {
                group: {
                    name: "components",
                    put: [],
                    pull: "clone",
                    revertClone: true
                },
                sort: false,
                onEnd: function onEnd(event) {
                    console.log(event);
                    if (event.item.parentNode.id == "from") return;
                    event.item.innerHTML = '\n                    <input type="text" size="40">\n                    <button onclick="' + bodyCode + '">\u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435</button>\n                    ';
                }
            });
            var eWcontainers = Array.prototype.slice.call(document.getElementsByClassName('EWcontainer'));
            eWcontainers = eWcontainers.forEach(function (container) {
                return _sortablejs2.default.create(container, {
                    group: {
                        name: "shared",
                        put: ["components"],
                        pull: true
                    }
                });
            });
        }
    }, {
        key: 'saveInnerHTML',
        value: function saveInnerHTML() {
            document.getElementById("EWinnerHTMLElement").innerHTML;
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'EWinnerHTMLElement', style: {
                        width: '80vw',
                        float: 'left'
                    }, dangerouslySetInnerHTML: {
                        __html: this.state.innerHTML
                    } }),
                _react2.default.createElement(
                    'div',
                    { style: {
                            width: '20vw',
                            float: 'right'
                        } },
                    _react2.default.createElement(
                        'div',
                        { id: 'from' },
                        _react2.default.createElement(
                            'div',
                            { id: 'imageComponent' },
                            '\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'textComponent' },
                            '\u0422\u0435\u043A\u0441\u0442'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'videoComponent' },
                            '\u0412\u0438\u0434\u0435\u043E'
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
//# sourceMappingURL=6.6f8dc210a09a659c8aaf.hot-update.js.map
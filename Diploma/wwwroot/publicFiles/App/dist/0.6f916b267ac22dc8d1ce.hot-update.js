webpackHotUpdate(0,{

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(628);

var _promise2 = _interopRequireDefault(_promise);

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

var _sortablejs = __webpack_require__(643);

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
        _this.getComponents();
        return _this;
    }

    (0, _createClass3.default)(PageEditor, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                innerHTML: '',
                components: []
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
        key: 'getComponent',
        value: function getComponent(componentName) {
            return fetch('/api/components/' + componentName, {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (result) {
                return result.body.getReader().read();
            }).then(function (res) {
                return new TextDecoder().decode(res.value);
            });
        }
    }, {
        key: 'getComponents',
        value: function getComponents() {
            var self = this;
            fetch('/api/components', {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (components) {
                var componentObjects = [];
                _promise2.default.all(components.map(function (name) {
                    return self.getComponent(name);
                })).then(function (componentBodies) {
                    var iteration = 0;
                    components.forEach(function (component) {
                        componentObjects.push({
                            name: component,
                            body: componentBodies[iteration++]
                        });
                    });
                }).then(function () {
                    return componentObjects;
                }).then(function (components) {
                    self.setState(function (prevstate) {
                        prevstate.components = components;
                        return prevstate;
                    });
                    self.componentDidMount();
                });
            });
        }
    }, {
        key: 'onEndStrategy',
        value: function onEndStrategy(id) {
            debugger;
            return this.state.components.find(function (comp) {
                return comp.name == id;
            }).body;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
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
                    event.item.innerHTML = self.onEndStrategy.call(self, event.item.id);
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
        key: 'savePage',
        value: function savePage() {
            fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + localStorage.getItem("pageName"), {
                method: 'PUT',
                credentials: "same-origin",
                body: this.saveInnerHTML()
            }).then(function () {
                window.location.replace('siteEditor.html');
            });
        }
    }, {
        key: 'saveInnerHTML',
        value: function saveInnerHTML() {
            return document.getElementById("EWinnerHTMLElement").innerHTML;
        }
    }, {
        key: 'render',
        value: function render() {
            var components = this.state.components.map(function (compname) {
                return _react2.default.createElement(
                    'div',
                    { id: compname.name },
                    compname.name
                );
            });

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
                            float: 'right',
                            height: '100vh'
                        } },
                    _react2.default.createElement(
                        'div',
                        { id: 'from' },
                        components,
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary',
                                onClick: this.savePage.bind(this) },
                            '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
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
//# sourceMappingURL=0.6f916b267ac22dc8d1ce.hot-update.js.map
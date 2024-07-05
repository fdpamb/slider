"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _isNativeReflectConstruct2 = _interopRequireDefault(require("@babel/runtime/helpers/isNativeReflectConstruct"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));
var _excluded = ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"];
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, (0, _isNativeReflectConstruct2.default)() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
var Handle = exports.default = /*#__PURE__*/function (_React$Component) {
  function Handle() {
    var _this;
    (0, _classCallCheck2.default)(this, Handle);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Handle, [].concat(args));
    _this.state = {
      clickFocused: false
    };
    _this.onMouseUpListener = void 0;
    _this.handle = void 0;
    _this.setHandleRef = function (node) {
      _this.handle = node;
    };
    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };
    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault();
      // fix https://github.com/ant-design/ant-design/issues/15324
      _this.focus();
    };
    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };
    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };
    return _this;
  }
  (0, _inherits2.default)(Handle, _React$Component);
  return (0, _createClass2.default)(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0, _addEventListener.default)(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        prefixCls = _this$props.prefixCls,
        vertical = _this$props.vertical,
        reverse = _this$props.reverse,
        offset = _this$props.offset,
        style = _this$props.style,
        disabled = _this$props.disabled,
        min = _this$props.min,
        max = _this$props.max,
        value = _this$props.value,
        tabIndex = _this$props.tabIndex,
        ariaLabel = _this$props.ariaLabel,
        ariaLabelledBy = _this$props.ariaLabelledBy,
        ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
        restProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var className = (0, _classnames.default)(this.props.className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, reverse ? 'top' : 'bottom', "".concat(offset, "%")), reverse ? 'bottom' : 'top', 'auto'), "transform", reverse ? null : "translateY(+50%)") : (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, reverse ? 'right' : 'left', "".concat(offset, "%")), reverse ? 'left' : 'right', 'auto'), "transform", "translateX(".concat(reverse ? '+' : '-', "50%)"));
      var elStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), positionStyle);
      var mergedTabIndex = tabIndex || 0;
      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }
      var ariaValueText;
      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown
        // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);
}(_react.default.Component);
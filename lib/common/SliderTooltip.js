"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _rcTooltip = _interopRequireDefault(require("rc-tooltip"));
var _ref = require("rc-util/lib/ref");
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var visible = props.visible,
    overlay = props.overlay;
  var innerRef = React.useRef(null);
  var tooltipRef = (0, _ref.composeRef)(ref, innerRef);
  var rafRef = React.useRef(null);
  function cancelKeepAlign() {
    _raf.default.cancel(rafRef.current);
  }
  function keepAlign() {
    rafRef.current = (0, _raf.default)(function () {
      var _innerRef$current;
      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }
  React.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [visible, overlay]);
  return /*#__PURE__*/React.createElement(_rcTooltip.default, (0, _extends2.default)({
    ref: tooltipRef
  }, props));
});
var _default = exports.default = SliderTooltip;
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
var Track = function Track(props) {
  var className = props.className,
    included = props.included,
    vertical = props.vertical,
    style = props.style;
  var length = props.length,
    offset = props.offset,
    reverse = props.reverse;
  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }
  var positonStyle = vertical ? _defineProperty(_defineProperty(_defineProperty({}, reverse ? 'top' : 'bottom', "".concat(offset, "%")), reverse ? 'bottom' : 'top', 'auto'), "height", "".concat(length, "%")) : _defineProperty(_defineProperty(_defineProperty({}, reverse ? 'right' : 'left', "".concat(offset, "%")), reverse ? 'left' : 'right', 'auto'), "width", "".concat(length, "%"));
  var elStyle = _objectSpread(_objectSpread({}, style), positonStyle);
  return included ? /*#__PURE__*/React.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};
export default Track;
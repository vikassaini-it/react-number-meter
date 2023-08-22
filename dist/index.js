function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"techo-wrap":"_RollingMeter__techo-wrap__1RdTA","techo-digits":"_RollingMeter__techo-digits__1NGEq","techo-digit":"_RollingMeter__techo-digit__2lNIy","mymove":"_RollingMeter__mymove__1SwaE"};

function RollingMeter(_ref) {
  var value = _ref.value,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1000 : _ref$duration,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '3rem' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily;
  var _useState = React.useState([]),
    rotVal = _useState[0],
    setRotVal = _useState[1];
  React.useEffect(function () {
    var localRot = JSON.parse(JSON.stringify(rotVal));
    (value + '').split('').forEach(function (val, idx) {
      if (!localRot[idx]) {
        localRot[idx] = {
          v: 0,
          r: 0
        };
      }
      localRot[idx]['r'] = localRot[idx]['r'] + 36 * ((parseInt(val, 10) - localRot[idx]['v'] + 9) % 9 + (parseInt(val, 10) < localRot[idx]['v'] ? 1 : 0));
      localRot[idx]['v'] = parseInt(val, 10);
    });
    setRotVal(localRot);
  }, [value]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles['techo-wrap'],
    style: {
      height: size,
      fontSize: size,
      lineHeight: size
    }
  }, (value + '').split('').map(function (val, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digits'],
      key: val + idx,
      style: {
        color: color,
        fontFamily: fontFamily,
        transform: "rotateX( " + (rotVal[idx] ? rotVal[idx]['r'] : 0) * -1 + "deg ) ",
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )",
        transitionProperty: "all",
        transitionDuration: duration + "ms",
        position: 'relative'
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "0",
      style: {
        transform: 'rotateX(0deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "0"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "1",
      style: {
        transform: 'rotateX(36deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "1"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "2",
      style: {
        transform: 'rotateX(72deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "2"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "3",
      style: {
        transform: 'rotateX(108deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "3"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "4",
      style: {
        transform: 'rotateX(144deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "4"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "5",
      style: {
        transform: 'rotateX(180deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "5"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "6",
      style: {
        transform: 'rotateX(216deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "6"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "7",
      style: {
        transform: 'rotateX(252deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "7"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "8",
      style: {
        transform: 'rotateX(288deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "8"), /*#__PURE__*/React__default.createElement("div", {
      className: styles['techo-digit'],
      "data-val": "9",
      style: {
        transform: 'rotateX(324deg)',
        transformOrigin: "0rem 0rem calc( " + size + " + 2rem )"
      }
    }, "9"));
  }));
}

var styles$1 = {"speedo-wrap":"_ShiftingMeter__speedo-wrap__2J0Sd","speedo-digits":"_ShiftingMeter__speedo-digits__2ZrgR"};

function ShiftingMeter(_ref) {
  var value = _ref.value,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1000 : _ref$duration,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '3rem' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? 'sans-serif' : _ref$fontFamily;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1['speedo-wrap'],
    style: {
      height: size,
      fontSize: size,
      lineHeight: size
    }
  }, (value + '').split('').map(function (val, idx) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digits'],
      key: idx,
      style: {
        color: color,
        fontFamily: fontFamily,
        marginTop: "calc( -" + val + "em ",
        transitionProperty: "all",
        transitionDuration: duration + "ms",
        transitionDelay: ((value + '').split('').length - idx) * 20 + "ms"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "0"
    }, "0"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "1"
    }, "1"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "2"
    }, "2"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "3"
    }, "3"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "4"
    }, "4"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "5"
    }, "5"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "6"
    }, "6"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "7"
    }, "7"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "8"
    }, "8"), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1['speedo-digit'],
      "data-val": "9"
    }, "9"));
  }));
}

exports.RollingMeter = RollingMeter;
exports.ShiftingMeter = ShiftingMeter;
//# sourceMappingURL=index.js.map

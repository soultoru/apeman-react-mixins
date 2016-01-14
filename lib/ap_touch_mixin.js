/**
 * Mixin to add touch handlers.
 * @constructor ApTouchMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOUCH_HAMMER_KEY = "_apTouchHammer";

function createTouchHammer(node, props) {
    if (!node) {
        return;
    }
    var Hammer = require('hammerjs'),
        hammer = new Hammer(node);
    if (props.touchOptions) {
        hammer.set(props.touchOptions);
    }
    Object.keys(ApTouchMixin.propTypes).filter(function (key) {
        return !!props[key];
    }).forEach(function (key) {
        if (/^on/.test(key)) {
            var event = key.replace(/^on/, '').toLowerCase();
            hammer.on(event, props[key]);
        }
        if (/Direction$/.test(key)) {
            var gesture = key.replace(/Direction$/, '');
            hammer.get(gesture).set({ direction: Hammer['DIRECTION_' + props[key]] });
        }
        if (/Threshold$/.test(key)) {
            var threshold = key.replace(/Threshold$/, '');
            hammer.get(threshold).set({ threshold: props[key] });
        }
    });
    return hammer;
}

function destroyTouchHammer(hammer) {
    if (!hammer) {
        return;
    }
    hammer.stop();
    hammer.destroy();
}

function supportsTouch(props) {
    var touchableKey = Object.keys(ApTouchMixin.propTypes);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var hit = !! ~touchableKey.indexOf(key);
            if (hit) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}

/** Enum for touching */
var touchEnums = {
    directions: ['NONE', 'LEFT', 'RIGHT', 'UP', 'DOWN', 'HORIZONTAL', 'VERTICAL', 'ALL']
};

/** @lends ApTouchMixin */
var ApTouchMixin = {

    //--------------------
    // Custom
    //--------------------

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        onTap: _react.PropTypes.func,
        onDoubleTap: _react.PropTypes.func,
        onPan: _react.PropTypes.func,
        onPanStart: _react.PropTypes.func,
        onPanMove: _react.PropTypes.func,
        onPanEnd: _react.PropTypes.func,
        onPanCancel: _react.PropTypes.func,
        onSwipe: _react.PropTypes.func,
        onPress: _react.PropTypes.func,
        onPressUp: _react.PropTypes.func,
        onPinch: _react.PropTypes.func,
        onPinchStart: _react.PropTypes.func,
        onPinchMove: _react.PropTypes.func,
        onPinchEnd: _react.PropTypes.func,
        onPinchCancel: _react.PropTypes.func,
        onRotate: _react.PropTypes.func,
        onRotateStart: _react.PropTypes.func,
        onRotateMove: _react.PropTypes.func,
        onRotateEnd: _react.PropTypes.func,
        onRotateCancel: _react.PropTypes.func,
        touchOptions: _react.PropTypes.object,
        panThreshold: _react.PropTypes.number,
        panDirection: _react.PropTypes.oneOf(touchEnums.directions),
        swipeDirection: _react.PropTypes.oneOf(touchEnums.directions)
    },

    statics: {},

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        var s = this;
        var touchable = supportsTouch(s.props);
        if (touchable) {
            s[TOUCH_HAMMER_KEY] = createTouchHammer(_reactDom2.default.findDOMNode(s), s.props);
        }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        var s = this;
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        var s = this;
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        var hammer = s[TOUCH_HAMMER_KEY];
        if (hammer) {
            destroyTouchHammer(hammer);
        }
        delete s[TOUCH_HAMMER_KEY];
    }
};

module.exports = Object.freeze(ApTouchMixin);
//# sourceMappingURL=data:application/json;base64,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QUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfdG91Y2hfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGFkZCB0b3VjaCBoYW5kbGVycy5cbiAqIEBjb25zdHJ1Y3RvciBBcFRvdWNoTWl4aW5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgVE9VQ0hfSEFNTUVSX0tFWSA9IFwiX2FwVG91Y2hIYW1tZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hIYW1tZXIobm9kZSwgcHJvcHMpIHtcbiAgICBpZighbm9kZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IEhhbW1lciA9IHJlcXVpcmUoJ2hhbW1lcmpzJyksXG4gICAgICAgIGhhbW1lciA9IG5ldyBIYW1tZXIobm9kZSk7XG4gICAgaWYgKHByb3BzLnRvdWNoT3B0aW9ucykge1xuICAgICAgICBoYW1tZXIuc2V0KHByb3BzLnRvdWNoT3B0aW9ucyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKEFwVG91Y2hNaXhpbi5wcm9wVHlwZXMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+ICEhcHJvcHNba2V5XSlcbiAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICgvXm9uLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBrZXkucmVwbGFjZSgvXm9uLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaGFtbWVyLm9uKGV2ZW50LCBwcm9wc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvRGlyZWN0aW9uJC8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdlc3R1cmUgPSBrZXkucmVwbGFjZSgvRGlyZWN0aW9uJC8sICcnKTtcbiAgICAgICAgICAgICAgICBoYW1tZXIuZ2V0KGdlc3R1cmUpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXJbJ0RJUkVDVElPTl8nICsgcHJvcHNba2V5XV19KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9UaHJlc2hvbGQkLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhyZXNob2xkID0ga2V5LnJlcGxhY2UoL1RocmVzaG9sZCQvLCAnJyk7XG4gICAgICAgICAgICAgICAgaGFtbWVyLmdldCh0aHJlc2hvbGQpLnNldCh7dGhyZXNob2xkOiBwcm9wc1trZXldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBoYW1tZXI7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lUb3VjaEhhbW1lcihoYW1tZXIpIHtcbiAgICBpZiAoIWhhbW1lcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbW1lci5zdG9wKCk7XG4gICAgaGFtbWVyLmRlc3Ryb3koKTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNUb3VjaChwcm9wcykge1xuICAgIGxldCB0b3VjaGFibGVLZXkgPSBPYmplY3Qua2V5cyhBcFRvdWNoTWl4aW4ucHJvcFR5cGVzKTtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJvcHMpKSB7XG4gICAgICAgIGxldCBoaXQgPSAhIX50b3VjaGFibGVLZXkuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBFbnVtIGZvciB0b3VjaGluZyAqL1xuY29uc3QgdG91Y2hFbnVtcyA9IHtcbiAgICBkaXJlY3Rpb25zOiBbXG4gICAgICAgICdOT05FJyxcbiAgICAgICAgJ0xFRlQnLFxuICAgICAgICAnUklHSFQnLFxuICAgICAgICAnVVAnLFxuICAgICAgICAnRE9XTicsXG4gICAgICAgICdIT1JJWk9OVEFMJyxcbiAgICAgICAgJ1ZFUlRJQ0FMJyxcbiAgICAgICAgJ0FMTCdcbiAgICBdXG59O1xuXG4vKiogQGxlbmRzIEFwVG91Y2hNaXhpbiAqL1xubGV0IEFwVG91Y2hNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBvblRhcDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Eb3VibGVUYXA6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGFuOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhblN0YXJ0OiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbk1vdmU6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGFuRW5kOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbkNhbmNlbDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Td2lwZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QcmVzczogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QcmVzc1VwOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoU3RhcnQ6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGluY2hNb3ZlOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoRW5kOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoQ2FuY2VsOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblJvdGF0ZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVTdGFydDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVNb3ZlOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblJvdGF0ZUVuZDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVDYW5jZWw6IHR5cGVzLmZ1bmMsXG4gICAgICAgIHRvdWNoT3B0aW9uczogdHlwZXMub2JqZWN0LFxuICAgICAgICBwYW5UaHJlc2hvbGQ6IHR5cGVzLm51bWJlcixcbiAgICAgICAgcGFuRGlyZWN0aW9uOiB0eXBlcy5vbmVPZih0b3VjaEVudW1zLmRpcmVjdGlvbnMpLFxuICAgICAgICBzd2lwZURpcmVjdGlvbjogdHlwZXMub25lT2YodG91Y2hFbnVtcy5kaXJlY3Rpb25zKVxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7fSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB0b3VjaGFibGUgPSBzdXBwb3J0c1RvdWNoKHMucHJvcHMpO1xuICAgICAgICBpZiAodG91Y2hhYmxlKSB7XG4gICAgICAgICAgICBzW1RPVUNIX0hBTU1FUl9LRVldID0gY3JlYXRlVG91Y2hIYW1tZXIoUmVhY3RET00uZmluZERPTU5vZGUocyksIHMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCBoYW1tZXIgPSBzW1RPVUNIX0hBTU1FUl9LRVldO1xuICAgICAgICBpZiAoaGFtbWVyKSB7XG4gICAgICAgICAgICBkZXN0cm95VG91Y2hIYW1tZXIoaGFtbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc1tUT1VDSF9IQU1NRVJfS0VZXTtcbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFRvdWNoTWl4aW4pO1xuIl19
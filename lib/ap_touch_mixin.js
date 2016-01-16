/**
 * Mixin to add touch handlers.
 * @constructor ApTouchMixin
 */

"use strict";

var _ApTouchMixin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var ApTouchMixin = (_ApTouchMixin = {}, _defineProperty(_ApTouchMixin, TOUCH_HAMMER_KEY, null), _defineProperty(_ApTouchMixin, 'propTypes', {
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
}), _defineProperty(_ApTouchMixin, 'statics', {}), _defineProperty(_ApTouchMixin, 'componentDidMount', function componentDidMount() {
    var s = this;
    var touchable = supportsTouch(s.props);
    if (touchable) {
        s[TOUCH_HAMMER_KEY] = createTouchHammer(_reactDom2.default.findDOMNode(s), s.props);
    }
}), _defineProperty(_ApTouchMixin, 'componentWillUnmount', function componentWillUnmount() {
    var s = this;
    var hammer = s[TOUCH_HAMMER_KEY];
    if (hammer) {
        destroyTouchHammer(hammer);
    }
    delete s[TOUCH_HAMMER_KEY];
}), _ApTouchMixin);

module.exports = Object.freeze(ApTouchMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3RvdWNoX21peGluLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUtiLElBQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7O0FBRTFDLFNBQVMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNwQyxRQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1AsZUFBTztLQUNWO0FBQ0QsUUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1QixNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsUUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLGNBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ2xDO0FBQ0QsVUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQzlCLE1BQU0sQ0FBQyxVQUFBLEdBQUc7ZUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUFBLENBQUMsQ0FDM0IsT0FBTyxDQUFDLFVBQUEsR0FBRyxFQUFJO0FBQ1osWUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2pCLGdCQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqRCxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEM7QUFDRCxZQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDeEIsZ0JBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGtCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQTtTQUMxRTtBQUNELFlBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN4QixnQkFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDdEQ7S0FDSixDQUFDLENBQUM7QUFDUCxXQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxTQUFTLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtBQUNoQyxRQUFJLENBQUMsTUFBTSxFQUFFO0FBQ1QsZUFBTztLQUNWO0FBQ0QsVUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsVUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ3BCOztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRTtBQUMxQixRQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O0FBQ3ZELDZCQUFnQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4SEFBRTtnQkFBM0IsR0FBRzs7QUFDUixnQkFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxnQkFBSSxHQUFHLEVBQUU7QUFDTCx1QkFBTyxJQUFJLENBQUM7YUFDZjtTQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsV0FBTyxLQUFLLENBQUM7Q0FDaEI7OztBQUFBLEFBR0QsSUFBTSxVQUFVLEdBQUc7QUFDZixjQUFVLEVBQUUsQ0FDUixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxJQUFJLEVBQ0osTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxDQUNSO0NBQ0o7OztBQUFDLEFBR0YsSUFBSSxZQUFZLHVEQU1YLGdCQUFnQixFQUFHLElBQUksK0NBTWI7QUFDUCxTQUFLLEVBQUUsT0FoRkEsU0FBUyxDQWdGSCxJQUFJO0FBQ2pCLGVBQVcsRUFBRSxPQWpGTixTQUFTLENBaUZHLElBQUk7QUFDdkIsU0FBSyxFQUFFLE9BbEZBLFNBQVMsQ0FrRkgsSUFBSTtBQUNqQixjQUFVLEVBQUUsT0FuRkwsU0FBUyxDQW1GRSxJQUFJO0FBQ3RCLGFBQVMsRUFBRSxPQXBGSixTQUFTLENBb0ZDLElBQUk7QUFDckIsWUFBUSxFQUFFLE9BckZILFNBQVMsQ0FxRkEsSUFBSTtBQUNwQixlQUFXLEVBQUUsT0F0Rk4sU0FBUyxDQXNGRyxJQUFJO0FBQ3ZCLFdBQU8sRUFBRSxPQXZGRixTQUFTLENBdUZELElBQUk7QUFDbkIsV0FBTyxFQUFFLE9BeEZGLFNBQVMsQ0F3RkQsSUFBSTtBQUNuQixhQUFTLEVBQUUsT0F6RkosU0FBUyxDQXlGQyxJQUFJO0FBQ3JCLFdBQU8sRUFBRSxPQTFGRixTQUFTLENBMEZELElBQUk7QUFDbkIsZ0JBQVksRUFBRSxPQTNGUCxTQUFTLENBMkZJLElBQUk7QUFDeEIsZUFBVyxFQUFFLE9BNUZOLFNBQVMsQ0E0RkcsSUFBSTtBQUN2QixjQUFVLEVBQUUsT0E3RkwsU0FBUyxDQTZGRSxJQUFJO0FBQ3RCLGlCQUFhLEVBQUUsT0E5RlIsU0FBUyxDQThGSyxJQUFJO0FBQ3pCLFlBQVEsRUFBRSxPQS9GSCxTQUFTLENBK0ZBLElBQUk7QUFDcEIsaUJBQWEsRUFBRSxPQWhHUixTQUFTLENBZ0dLLElBQUk7QUFDekIsZ0JBQVksRUFBRSxPQWpHUCxTQUFTLENBaUdJLElBQUk7QUFDeEIsZUFBVyxFQUFFLE9BbEdOLFNBQVMsQ0FrR0csSUFBSTtBQUN2QixrQkFBYyxFQUFFLE9BbkdULFNBQVMsQ0FtR00sSUFBSTtBQUMxQixnQkFBWSxFQUFFLE9BcEdQLFNBQVMsQ0FvR0ksTUFBTTtBQUMxQixnQkFBWSxFQUFFLE9BckdQLFNBQVMsQ0FxR0ksTUFBTTtBQUMxQixnQkFBWSxFQUFFLE9BdEdQLFNBQVMsQ0FzR0ksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDaEQsa0JBQWMsRUFBRSxPQXZHVCxTQUFTLENBdUdNLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0NBQ3JELDZDQUVRLEVBQUUsb0ZBTVM7QUFDaEIsUUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsUUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxRQUFJLFNBQVMsRUFBRTtBQUNYLFNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLG1CQUFTLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0U7Q0FDSiwwRkFFc0I7QUFDbkIsUUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsUUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDakMsUUFBSSxNQUFNLEVBQUU7QUFDUiwwQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtBQUNELFdBQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Q0FDOUIsaUJBQ0osQ0FBQzs7QUFHRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfdG91Y2hfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGFkZCB0b3VjaCBoYW5kbGVycy5cbiAqIEBjb25zdHJ1Y3RvciBBcFRvdWNoTWl4aW5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgVE9VQ0hfSEFNTUVSX0tFWSA9IFwiX2FwVG91Y2hIYW1tZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hIYW1tZXIobm9kZSwgcHJvcHMpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgSGFtbWVyID0gcmVxdWlyZSgnaGFtbWVyanMnKSxcbiAgICAgICAgaGFtbWVyID0gbmV3IEhhbW1lcihub2RlKTtcbiAgICBpZiAocHJvcHMudG91Y2hPcHRpb25zKSB7XG4gICAgICAgIGhhbW1lci5zZXQocHJvcHMudG91Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoQXBUb3VjaE1peGluLnByb3BUeXBlcylcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gISFwcm9wc1trZXldKVxuICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKC9eb24vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGtleS5yZXBsYWNlKC9eb24vLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBoYW1tZXIub24oZXZlbnQsIHByb3BzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9EaXJlY3Rpb24kLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2VzdHVyZSA9IGtleS5yZXBsYWNlKC9EaXJlY3Rpb24kLywgJycpO1xuICAgICAgICAgICAgICAgIGhhbW1lci5nZXQoZ2VzdHVyZSkuc2V0KHtkaXJlY3Rpb246IEhhbW1lclsnRElSRUNUSU9OXycgKyBwcm9wc1trZXldXX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1RocmVzaG9sZCQvLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB0aHJlc2hvbGQgPSBrZXkucmVwbGFjZSgvVGhyZXNob2xkJC8sICcnKTtcbiAgICAgICAgICAgICAgICBoYW1tZXIuZ2V0KHRocmVzaG9sZCkuc2V0KHt0aHJlc2hvbGQ6IHByb3BzW2tleV19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGhhbW1lcjtcbn1cblxuZnVuY3Rpb24gZGVzdHJveVRvdWNoSGFtbWVyKGhhbW1lcikge1xuICAgIGlmICghaGFtbWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFtbWVyLnN0b3AoKTtcbiAgICBoYW1tZXIuZGVzdHJveSgpO1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1RvdWNoKHByb3BzKSB7XG4gICAgbGV0IHRvdWNoYWJsZUtleSA9IE9iamVjdC5rZXlzKEFwVG91Y2hNaXhpbi5wcm9wVHlwZXMpO1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wcykpIHtcbiAgICAgICAgbGV0IGhpdCA9ICEhfnRvdWNoYWJsZUtleS5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEVudW0gZm9yIHRvdWNoaW5nICovXG5jb25zdCB0b3VjaEVudW1zID0ge1xuICAgIGRpcmVjdGlvbnM6IFtcbiAgICAgICAgJ05PTkUnLFxuICAgICAgICAnTEVGVCcsXG4gICAgICAgICdSSUdIVCcsXG4gICAgICAgICdVUCcsXG4gICAgICAgICdET1dOJyxcbiAgICAgICAgJ0hPUklaT05UQUwnLFxuICAgICAgICAnVkVSVElDQUwnLFxuICAgICAgICAnQUxMJ1xuICAgIF1cbn07XG5cbi8qKiBAbGVuZHMgQXBUb3VjaE1peGluICovXG5sZXQgQXBUb3VjaE1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFtUT1VDSF9IQU1NRVJfS0VZXTogbnVsbCxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBvblRhcDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Eb3VibGVUYXA6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGFuOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhblN0YXJ0OiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbk1vdmU6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGFuRW5kOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbkNhbmNlbDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Td2lwZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QcmVzczogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QcmVzc1VwOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoU3RhcnQ6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGluY2hNb3ZlOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoRW5kOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoQ2FuY2VsOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblJvdGF0ZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVTdGFydDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVNb3ZlOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblJvdGF0ZUVuZDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVDYW5jZWw6IHR5cGVzLmZ1bmMsXG4gICAgICAgIHRvdWNoT3B0aW9uczogdHlwZXMub2JqZWN0LFxuICAgICAgICBwYW5UaHJlc2hvbGQ6IHR5cGVzLm51bWJlcixcbiAgICAgICAgcGFuRGlyZWN0aW9uOiB0eXBlcy5vbmVPZih0b3VjaEVudW1zLmRpcmVjdGlvbnMpLFxuICAgICAgICBzd2lwZURpcmVjdGlvbjogdHlwZXMub25lT2YodG91Y2hFbnVtcy5kaXJlY3Rpb25zKVxuICAgIH0sXG5cbiAgICBzdGF0aWNzOiB7fSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQgdG91Y2hhYmxlID0gc3VwcG9ydHNUb3VjaChzLnByb3BzKTtcbiAgICAgICAgaWYgKHRvdWNoYWJsZSkge1xuICAgICAgICAgICAgc1tUT1VDSF9IQU1NRVJfS0VZXSA9IGNyZWF0ZVRvdWNoSGFtbWVyKFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpLCBzLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQgaGFtbWVyID0gc1tUT1VDSF9IQU1NRVJfS0VZXTtcbiAgICAgICAgaWYgKGhhbW1lcikge1xuICAgICAgICAgICAgZGVzdHJveVRvdWNoSGFtbWVyKGhhbW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNbVE9VQ0hfSEFNTUVSX0tFWV07XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBUb3VjaE1peGluKTtcbiJdfQ==
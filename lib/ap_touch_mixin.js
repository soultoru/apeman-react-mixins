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
//# sourceMappingURL=data:application/json;base64,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QUFZLENBQUMsQ0FBQyIsImZpbGUiOiJhcF90b3VjaF9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gYWRkIHRvdWNoIGhhbmRsZXJzLlxuICogQGNvbnN0cnVjdG9yIEFwVG91Y2hNaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jb25zdCBUT1VDSF9IQU1NRVJfS0VZID0gXCJfYXBUb3VjaEhhbW1lclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVUb3VjaEhhbW1lcihub2RlLCBwcm9wcykge1xuICAgIGxldCBIYW1tZXIgPSByZXF1aXJlKCdoYW1tZXJqcycpLFxuICAgICAgICBoYW1tZXIgPSBuZXcgSGFtbWVyKG5vZGUpO1xuICAgIGlmIChwcm9wcy50b3VjaE9wdGlvbnMpIHtcbiAgICAgICAgaGFtbWVyLnNldChwcm9wcy50b3VjaE9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhBcFRvdWNoTWl4aW4ucHJvcFR5cGVzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAhIXByb3BzW2tleV0pXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoL15vbi8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0ga2V5LnJlcGxhY2UoL15vbi8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGhhbW1lci5vbihldmVudCwgcHJvcHNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL0RpcmVjdGlvbiQvLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBnZXN0dXJlID0ga2V5LnJlcGxhY2UoL0RpcmVjdGlvbiQvLCAnJyk7XG4gICAgICAgICAgICAgICAgaGFtbWVyLmdldChnZXN0dXJlKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyWydESVJFQ1RJT05fJyArIHByb3BzW2tleV1dfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvVGhyZXNob2xkJC8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRocmVzaG9sZCA9IGtleS5yZXBsYWNlKC9UaHJlc2hvbGQkLywgJycpO1xuICAgICAgICAgICAgICAgIGhhbW1lci5nZXQodGhyZXNob2xkKS5zZXQoe3RocmVzaG9sZDogcHJvcHNba2V5XX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICByZXR1cm4gaGFtbWVyO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95VG91Y2hIYW1tZXIoaGFtbWVyKSB7XG4gICAgaWYgKCFoYW1tZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW1tZXIuc3RvcCgpO1xuICAgIGhhbW1lci5kZXN0cm95KCk7XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzVG91Y2gocHJvcHMpIHtcbiAgICBsZXQgdG91Y2hhYmxlS2V5ID0gT2JqZWN0LmtleXMoQXBUb3VjaE1peGluLnByb3BUeXBlcyk7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByb3BzKSkge1xuICAgICAgICBsZXQgaGl0ID0gISF+dG91Y2hhYmxlS2V5LmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogRW51bSBmb3IgdG91Y2hpbmcgKi9cbmNvbnN0IHRvdWNoRW51bXMgPSB7XG4gICAgZGlyZWN0aW9uczogW1xuICAgICAgICAnTk9ORScsXG4gICAgICAgICdMRUZUJyxcbiAgICAgICAgJ1JJR0hUJyxcbiAgICAgICAgJ1VQJyxcbiAgICAgICAgJ0RPV04nLFxuICAgICAgICAnSE9SSVpPTlRBTCcsXG4gICAgICAgICdWRVJUSUNBTCcsXG4gICAgICAgICdBTEwnXG4gICAgXVxufTtcblxuLyoqIEBsZW5kcyBBcFRvdWNoTWl4aW4gKi9cbmxldCBBcFRvdWNoTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgb25UYXA6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uRG91YmxlVGFwOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbjogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QYW5TdGFydDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QYW5Nb3ZlOiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBhbkVuZDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QYW5DYW5jZWw6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uU3dpcGU6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUHJlc3M6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUHJlc3NVcDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QaW5jaDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QaW5jaFN0YXJ0OiB0eXBlcy5mdW5jLFxuICAgICAgICBvblBpbmNoTW92ZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QaW5jaEVuZDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25QaW5jaENhbmNlbDogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGU6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUm90YXRlU3RhcnQ6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUm90YXRlTW92ZTogdHlwZXMuZnVuYyxcbiAgICAgICAgb25Sb3RhdGVFbmQ6IHR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUm90YXRlQ2FuY2VsOiB0eXBlcy5mdW5jLFxuICAgICAgICB0b3VjaE9wdGlvbnM6IHR5cGVzLm9iamVjdCxcbiAgICAgICAgcGFuVGhyZXNob2xkOiB0eXBlcy5udW1iZXIsXG4gICAgICAgIHBhbkRpcmVjdGlvbjogdHlwZXMub25lT2YodG91Y2hFbnVtcy5kaXJlY3Rpb25zKSxcbiAgICAgICAgc3dpcGVEaXJlY3Rpb246IHR5cGVzLm9uZU9mKHRvdWNoRW51bXMuZGlyZWN0aW9ucylcbiAgICB9LFxuXG4gICAgc3RhdGljczoge30sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQgdG91Y2hhYmxlID0gc3VwcG9ydHNUb3VjaChzLnByb3BzKTtcbiAgICAgICAgaWYgKHRvdWNoYWJsZSkge1xuICAgICAgICAgICAgc1tUT1VDSF9IQU1NRVJfS0VZXSA9IGNyZWF0ZVRvdWNoSGFtbWVyKFJlYWN0RE9NLmZpbmRET01Ob2RlKHMpLCBzLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQgaGFtbWVyID0gc1tUT1VDSF9IQU1NRVJfS0VZXTtcbiAgICAgICAgaWYgKGhhbW1lcikge1xuICAgICAgICAgICAgZGVzdHJveVRvdWNoSGFtbWVyKGhhbW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHNbVE9VQ0hfSEFNTUVSX0tFWV07XG4gICAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBUb3VjaE1peGluKTtcbiJdfQ==
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactView = require('apeman-react-view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixin for stackable views
 */

"use strict";

/** @lends ApStackMixin */
var ApStackMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Pop this view from parent stack.
     */

    popThisViewFromCurrentStack: function popThisViewFromCurrentStack() {
        var s = this;
        var props = s.props;

        var topView = props.viewTop();
        var isTop = topView.viewId === props.viewId;
        if (!isTop) {
            console.warn('The top view of current stack is not this view.');
            return;
        }
        s.popViewFromCurrentStack();
    },
    popViewFromCurrentStack: function popViewFromCurrentStack() {
        var s = this;
        var props = s.props;

        props.viewPop();
    },
    pushViewToCurrentStack: function pushViewToCurrentStack(view, params, way) {
        var s = this;
        var props = s.props;

        props.viewPush(view, params, way);
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        viewId: _react.PropTypes.string.isRequired,
        viewWay: _react.PropTypes.string.isRequired,
        viewPush: _react.PropTypes.func.isRequired,
        viewPop: _react.PropTypes.func.isRequired,
        viewTop: _react.PropTypes.func.isRequired
    },

    propTypes: {},

    getInitialState: function getInitialState() {
        return {};
    },
    getDefaultProps: function getDefaultProps() {
        return {
            viewId: null,
            viewWay: null,
            viewPush: null,
            viewPop: null,
            viewTop: null
        };
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {
        var s = this;
        var props = s.props;
    },
    componentDidMount: function componentDidMount() {
        var s = this;
        var props = s.props;
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
        var props = s.props;
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        var props = s.props;
    }
};

module.exports = Object.freeze(ApStackMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3ZpZXdfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsWUFBWTs7O0FBQUMsQUFJYixJQUFNLFlBQVksR0FBRzs7Ozs7Ozs7OztBQVNqQiwrQkFBMkIseUNBQUU7QUFDekIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLOztBQUNWLFlBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixZQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDNUMsWUFBSSxDQUFDLEtBQUssRUFBRTtBQUNSLG1CQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDaEUsbUJBQU87U0FDVjtBQUNELFNBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQy9CO0FBRUQsMkJBQXVCLHFDQUFFO0FBQ3JCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSzs7QUFDVixhQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7QUFFRCwwQkFBc0Isa0NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7QUFDckMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLOztBQUNWLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQzs7Ozs7O0FBTUQsV0FBTyxFQUFFO0FBQ0wsY0FBTSxFQUFFLE9BNUNELFNBQVMsQ0E0Q0YsTUFBTSxDQUFDLFVBQVU7QUFDL0IsZUFBTyxFQUFFLE9BN0NGLFNBQVMsQ0E2Q0QsTUFBTSxDQUFDLFVBQVU7QUFDaEMsZ0JBQVEsRUFBRSxPQTlDSCxTQUFTLENBOENBLElBQUksQ0FBQyxVQUFVO0FBQy9CLGVBQU8sRUFBRSxPQS9DRixTQUFTLENBK0NELElBQUksQ0FBQyxVQUFVO0FBQzlCLGVBQU8sRUFBRSxPQWhERixTQUFTLENBZ0RELElBQUksQ0FBQyxVQUFVO0tBQ2pDOztBQUVELGFBQVMsRUFBRSxFQUFFOztBQUViLG1CQUFlLDZCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjtBQUVELG1CQUFlLDZCQUFHO0FBQ2QsZUFBTztBQUNILGtCQUFNLEVBQUUsSUFBSTtBQUNaLG1CQUFPLEVBQUUsSUFBSTtBQUNiLG9CQUFRLEVBQUUsSUFBSTtBQUNkLG1CQUFPLEVBQUUsSUFBSTtBQUNiLG1CQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFBO0tBQ0o7Ozs7OztBQU1ELHNCQUFrQixnQ0FBRztBQUNqQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELHFCQUFpQiwrQkFBRztBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELDZCQUF5QixxQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7QUFFRCx3QkFBb0Isa0NBQUc7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJhcF92aWV3X21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiBmb3Igc3RhY2thYmxlIHZpZXdzXG4gKi9cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcFZpZXdTdGFja30gZnJvbSAnYXBlbWFuLXJlYWN0LXZpZXcnO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqIEBsZW5kcyBBcFN0YWNrTWl4aW4gKi9cbmNvbnN0IEFwU3RhY2tNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBQb3AgdGhpcyB2aWV3IGZyb20gcGFyZW50IHN0YWNrLlxuICAgICAqL1xuICAgIHBvcFRoaXNWaWV3RnJvbUN1cnJlbnRTdGFjaygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgbGV0IHRvcFZpZXcgPSBwcm9wcy52aWV3VG9wKCk7XG4gICAgICAgIGxldCBpc1RvcCA9IHRvcFZpZXcudmlld0lkID09PSBwcm9wcy52aWV3SWQ7XG4gICAgICAgIGlmICghaXNUb3ApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIHRvcCB2aWV3IG9mIGN1cnJlbnQgc3RhY2sgaXMgbm90IHRoaXMgdmlldy4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzLnBvcFZpZXdGcm9tQ3VycmVudFN0YWNrKCk7XG4gICAgfSxcblxuICAgIHBvcFZpZXdGcm9tQ3VycmVudFN0YWNrKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgICAgICBwcm9wcy52aWV3UG9wKCk7XG4gICAgfSxcblxuICAgIHB1c2hWaWV3VG9DdXJyZW50U3RhY2sodmlldywgcGFyYW1zLCB3YXkpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgcHJvcHMudmlld1B1c2godmlldywgcGFyYW1zLCB3YXkpO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHZpZXdJZDogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZpZXdXYXk6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3UHVzaDogdHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3UG9wOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHZpZXdUb3A6IHR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHt9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdJZDogbnVsbCxcbiAgICAgICAgICAgIHZpZXdXYXk6IG51bGwsXG4gICAgICAgICAgICB2aWV3UHVzaDogbnVsbCxcbiAgICAgICAgICAgIHZpZXdQb3A6IG51bGwsXG4gICAgICAgICAgICB2aWV3VG9wOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFN0YWNrTWl4aW4pO1xuIl19
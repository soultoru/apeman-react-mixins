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

    popThisView: function popThisView() {
        var s = this;
        var props = s.props;

        props.popThisView(props.viewId);
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        viewId: _react.PropTypes.string.isRequired,
        viewWay: _react.PropTypes.string.isRequired,
        viewPop: _react.PropTypes.func.isRequired
    },

    propTypes: {},

    getInitialState: function getInitialState() {
        return {};
    },
    getDefaultProps: function getDefaultProps() {
        return {
            viewId: null,
            viewWay: null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3ZpZXdfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsWUFBWTs7O0FBQUMsQUFJYixJQUFNLFlBQVksR0FBRzs7Ozs7O0FBTWpCLGVBQVcseUJBQUU7QUFDVCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7O0FBQ1YsYUFBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkM7Ozs7OztBQU1ELFdBQU8sRUFBRTtBQUNMLGNBQU0sRUFBRSxPQXZCRCxTQUFTLENBdUJGLE1BQU0sQ0FBQyxVQUFVO0FBQy9CLGVBQU8sRUFBRSxPQXhCRixTQUFTLENBd0JELE1BQU0sQ0FBQyxVQUFVO0FBQ2hDLGVBQU8sRUFBRSxPQXpCRixTQUFTLENBeUJELElBQUksQ0FBQyxVQUFVO0tBQ2pDOztBQUVELGFBQVMsRUFBRSxFQUFFOztBQUViLG1CQUFlLDZCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjtBQUVELG1CQUFlLDZCQUFHO0FBQ2QsZUFBTztBQUNILGtCQUFNLEVBQUUsSUFBSTtBQUNaLG1CQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFBO0tBQ0o7Ozs7OztBQU1ELHNCQUFrQixnQ0FBRztBQUNqQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELHFCQUFpQiwrQkFBRztBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELDZCQUF5QixxQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7QUFFRCx3QkFBb0Isa0NBQUc7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJhcF92aWV3X21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiBmb3Igc3RhY2thYmxlIHZpZXdzXG4gKi9cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcFZpZXdTdGFja30gZnJvbSAnYXBlbWFuLXJlYWN0LXZpZXcnO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqIEBsZW5kcyBBcFN0YWNrTWl4aW4gKi9cbmNvbnN0IEFwU3RhY2tNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBwb3BUaGlzVmlldygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgcHJvcHMucG9wVGhpc1ZpZXcocHJvcHMudmlld0lkKTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljczoge1xuICAgICAgICB2aWV3SWQ6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3V2F5OiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmlld1BvcDogdHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge30sXG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlld0lkOiBudWxsLFxuICAgICAgICAgICAgdmlld1dheTogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBTdGFja01peGluKTtcbiJdfQ==
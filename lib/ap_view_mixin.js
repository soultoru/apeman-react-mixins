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
     * Pop this view from the current stack only if this view is the top.
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

    /**
     * Pop a view from the current stack.
     */
    popViewFromCurrentStack: function popViewFromCurrentStack() {
        var s = this;
        var props = s.props;

        props.viewPop();
    },

    /**
     * Push a view to the current stack.
     * @param {object} view - View component class.
     * @param {object} params - View params.
     * @param {string} way - View push way.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3ZpZXdfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsWUFBWTs7O0FBQUMsQUFJYixJQUFNLFlBQVksR0FBRzs7Ozs7Ozs7OztBQVNqQiwrQkFBMkIseUNBQUU7QUFDekIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLOztBQUNWLFlBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixZQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDNUMsWUFBSSxDQUFDLEtBQUssRUFBRTtBQUNSLG1CQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDaEUsbUJBQU87U0FDVjtBQUNELFNBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQy9COzs7OztBQUtELDJCQUF1QixxQ0FBRTtBQUNyQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7O0FBQ1YsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25COzs7Ozs7OztBQVFELDBCQUFzQixrQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztBQUNyQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7O0FBQ1YsYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDOzs7Ozs7QUFNRCxXQUFPLEVBQUU7QUFDTCxjQUFNLEVBQUUsT0FyREQsU0FBUyxDQXFERixNQUFNLENBQUMsVUFBVTtBQUMvQixlQUFPLEVBQUUsT0F0REYsU0FBUyxDQXNERCxNQUFNLENBQUMsVUFBVTtBQUNoQyxnQkFBUSxFQUFFLE9BdkRILFNBQVMsQ0F1REEsSUFBSSxDQUFDLFVBQVU7QUFDL0IsZUFBTyxFQUFFLE9BeERGLFNBQVMsQ0F3REQsSUFBSSxDQUFDLFVBQVU7QUFDOUIsZUFBTyxFQUFFLE9BekRGLFNBQVMsQ0F5REQsSUFBSSxDQUFDLFVBQVU7S0FDakM7O0FBRUQsYUFBUyxFQUFFLEVBQUU7O0FBRWIsbUJBQWUsNkJBQUc7QUFDZCxlQUFPLEVBQUUsQ0FBQztLQUNiO0FBRUQsbUJBQWUsNkJBQUc7QUFDZCxlQUFPO0FBQ0gsa0JBQU0sRUFBRSxJQUFJO0FBQ1osbUJBQU8sRUFBRSxJQUFJO0FBQ2Isb0JBQVEsRUFBRSxJQUFJO0FBQ2QsbUJBQU8sRUFBRSxJQUFJO0FBQ2IsbUJBQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7S0FDSjs7Ozs7O0FBTUQsc0JBQWtCLGdDQUFHO0FBQ2pCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0FBRUQscUJBQWlCLCtCQUFHO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0FBRUQsNkJBQXlCLHFDQUFDLFNBQVMsRUFBRTtBQUNqQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3ZpZXdfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIGZvciBzdGFja2FibGUgdmlld3NcbiAqL1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwVmlld1N0YWNrfSBmcm9tICdhcGVtYW4tcmVhY3Qtdmlldyc7XG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKiogQGxlbmRzIEFwU3RhY2tNaXhpbiAqL1xuY29uc3QgQXBTdGFja01peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIFBvcCB0aGlzIHZpZXcgZnJvbSB0aGUgY3VycmVudCBzdGFjayBvbmx5IGlmIHRoaXMgdmlldyBpcyB0aGUgdG9wLlxuICAgICAqL1xuICAgIHBvcFRoaXNWaWV3RnJvbUN1cnJlbnRTdGFjaygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgbGV0IHRvcFZpZXcgPSBwcm9wcy52aWV3VG9wKCk7XG4gICAgICAgIGxldCBpc1RvcCA9IHRvcFZpZXcudmlld0lkID09PSBwcm9wcy52aWV3SWQ7XG4gICAgICAgIGlmICghaXNUb3ApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIHRvcCB2aWV3IG9mIGN1cnJlbnQgc3RhY2sgaXMgbm90IHRoaXMgdmlldy4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzLnBvcFZpZXdGcm9tQ3VycmVudFN0YWNrKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBvcCBhIHZpZXcgZnJvbSB0aGUgY3VycmVudCBzdGFjay5cbiAgICAgKi9cbiAgICBwb3BWaWV3RnJvbUN1cnJlbnRTdGFjaygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgcHJvcHMudmlld1BvcCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgdmlldyB0byB0aGUgY3VycmVudCBzdGFjay5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlldyAtIFZpZXcgY29tcG9uZW50IGNsYXNzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBWaWV3IHBhcmFtcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2F5IC0gVmlldyBwdXNoIHdheS5cbiAgICAgKi9cbiAgICBwdXNoVmlld1RvQ3VycmVudFN0YWNrKHZpZXcsIHBhcmFtcywgd2F5KXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgICAgIHByb3BzLnZpZXdQdXNoKHZpZXcsIHBhcmFtcywgd2F5KTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljczoge1xuICAgICAgICB2aWV3SWQ6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3V2F5OiB0eXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmlld1B1c2g6IHR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgdmlld1BvcDogdHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3VG9wOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7fSxcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3SWQ6IG51bGwsXG4gICAgICAgICAgICB2aWV3V2F5OiBudWxsLFxuICAgICAgICAgICAgdmlld1B1c2g6IG51bGwsXG4gICAgICAgICAgICB2aWV3UG9wOiBudWxsLFxuICAgICAgICAgICAgdmlld1RvcDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBTdGFja01peGluKTtcbiJdfQ==
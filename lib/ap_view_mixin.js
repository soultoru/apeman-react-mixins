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
        var isTop = topView.id === props.viewId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3ZpZXdfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsWUFBWTs7O0FBQUMsQUFJYixJQUFNLFlBQVksR0FBRzs7Ozs7Ozs7OztBQVNqQiwrQkFBMkIseUNBQUU7QUFDekIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLOztBQUNWLFlBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixZQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDeEMsWUFBSSxDQUFDLEtBQUssRUFBRTtBQUNSLG1CQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDaEUsbUJBQU87U0FDVjtBQUNELFNBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQy9COzs7OztBQUtELDJCQUF1QixxQ0FBRTtBQUNyQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7O0FBQ1YsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25COzs7Ozs7OztBQVFELDBCQUFzQixrQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztBQUNyQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7O0FBQ1YsYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDOzs7Ozs7QUFNRCxXQUFPLEVBQUU7QUFDTCxjQUFNLEVBQUUsT0FyREQsU0FBUyxDQXFERixNQUFNLENBQUMsVUFBVTtBQUMvQixlQUFPLEVBQUUsT0F0REYsU0FBUyxDQXNERCxNQUFNLENBQUMsVUFBVTtBQUNoQyxnQkFBUSxFQUFFLE9BdkRILFNBQVMsQ0F1REEsSUFBSSxDQUFDLFVBQVU7QUFDL0IsZUFBTyxFQUFFLE9BeERGLFNBQVMsQ0F3REQsSUFBSSxDQUFDLFVBQVU7QUFDOUIsZUFBTyxFQUFFLE9BekRGLFNBQVMsQ0F5REQsSUFBSSxDQUFDLFVBQVU7S0FDakM7O0FBRUQsYUFBUyxFQUFFLEVBQUU7O0FBRWIsbUJBQWUsNkJBQUc7QUFDZCxlQUFPLEVBQUUsQ0FBQztLQUNiO0FBRUQsbUJBQWUsNkJBQUc7QUFDZCxlQUFPO0FBQ0gsa0JBQU0sRUFBRSxJQUFJO0FBQ1osbUJBQU8sRUFBRSxJQUFJO0FBQ2Isb0JBQVEsRUFBRSxJQUFJO0FBQ2QsbUJBQU8sRUFBRSxJQUFJO0FBQ2IsbUJBQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7S0FDSjs7Ozs7O0FBTUQsc0JBQWtCLGdDQUFHO0FBQ2pCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0FBRUQscUJBQWlCLCtCQUFHO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0FBRUQsNkJBQXlCLHFDQUFDLFNBQVMsRUFBRTtBQUNqQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDUixLQUFLLEdBQUksQ0FBQyxDQUFWLEtBQUs7S0FDYjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3ZpZXdfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIGZvciBzdGFja2FibGUgdmlld3NcbiAqL1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwVmlld1N0YWNrfSBmcm9tICdhcGVtYW4tcmVhY3Qtdmlldyc7XG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKiogQGxlbmRzIEFwU3RhY2tNaXhpbiAqL1xuY29uc3QgQXBTdGFja01peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIFBvcCB0aGlzIHZpZXcgZnJvbSB0aGUgY3VycmVudCBzdGFjayBvbmx5IGlmIHRoaXMgdmlldyBpcyB0aGUgdG9wLlxuICAgICAqL1xuICAgIHBvcFRoaXNWaWV3RnJvbUN1cnJlbnRTdGFjaygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgbGV0IHRvcFZpZXcgPSBwcm9wcy52aWV3VG9wKCk7XG4gICAgICAgIGxldCBpc1RvcCA9IHRvcFZpZXcuaWQgPT09IHByb3BzLnZpZXdJZDtcbiAgICAgICAgaWYgKCFpc1RvcCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgdG9wIHZpZXcgb2YgY3VycmVudCBzdGFjayBpcyBub3QgdGhpcyB2aWV3LicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHMucG9wVmlld0Zyb21DdXJyZW50U3RhY2soKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUG9wIGEgdmlldyBmcm9tIHRoZSBjdXJyZW50IHN0YWNrLlxuICAgICAqL1xuICAgIHBvcFZpZXdGcm9tQ3VycmVudFN0YWNrKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgICAgICBwcm9wcy52aWV3UG9wKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFB1c2ggYSB2aWV3IHRvIHRoZSBjdXJyZW50IHN0YWNrLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3IC0gVmlldyBjb21wb25lbnQgY2xhc3MuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFZpZXcgcGFyYW1zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3YXkgLSBWaWV3IHB1c2ggd2F5LlxuICAgICAqL1xuICAgIHB1c2hWaWV3VG9DdXJyZW50U3RhY2sodmlldywgcGFyYW1zLCB3YXkpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgcHJvcHMudmlld1B1c2godmlldywgcGFyYW1zLCB3YXkpO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHZpZXdJZDogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZpZXdXYXk6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3UHVzaDogdHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3UG9wOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIHZpZXdUb3A6IHR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHt9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdJZDogbnVsbCxcbiAgICAgICAgICAgIHZpZXdXYXk6IG51bGwsXG4gICAgICAgICAgICB2aWV3UHVzaDogbnVsbCxcbiAgICAgICAgICAgIHZpZXdQb3A6IG51bGwsXG4gICAgICAgICAgICB2aWV3VG9wOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFN0YWNrTWl4aW4pO1xuIl19
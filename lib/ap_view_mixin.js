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

    popThisView: function popThisView() {
        var s = this;
        var props = s.props;

        props.viewPop(props.viewId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3ZpZXdfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsWUFBWTs7O0FBQUMsQUFJYixJQUFNLFlBQVksR0FBRzs7Ozs7Ozs7OztBQVNqQixlQUFXLHlCQUFFO0FBQ1QsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLOztBQUNWLGFBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7Ozs7QUFNRCxXQUFPLEVBQUU7QUFDTCxjQUFNLEVBQUUsT0ExQkQsU0FBUyxDQTBCRixNQUFNLENBQUMsVUFBVTtBQUMvQixlQUFPLEVBQUUsT0EzQkYsU0FBUyxDQTJCRCxNQUFNLENBQUMsVUFBVTtBQUNoQyxlQUFPLEVBQUUsT0E1QkYsU0FBUyxDQTRCRCxJQUFJLENBQUMsVUFBVTtLQUNqQzs7QUFFRCxhQUFTLEVBQUUsRUFBRTs7QUFFYixtQkFBZSw2QkFBRztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7QUFFRCxtQkFBZSw2QkFBRztBQUNkLGVBQU87QUFDSCxrQkFBTSxFQUFFLElBQUk7QUFDWixtQkFBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQTtLQUNKOzs7Ozs7QUFNRCxzQkFBa0IsZ0NBQUc7QUFDakIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFJLENBQUMsQ0FBVixLQUFLO0tBQ2I7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0FBRUQsd0JBQW9CLGtDQUFHO0FBQ25CLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNSLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSztLQUNiO0NBRUosQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfdmlld19taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gZm9yIHN0YWNrYWJsZSB2aWV3c1xuICovXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBWaWV3U3RhY2t9IGZyb20gJ2FwZW1hbi1yZWFjdC12aWV3JztcblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKiBAbGVuZHMgQXBTdGFja01peGluICovXG5jb25zdCBBcFN0YWNrTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogUG9wIHRoaXMgdmlldyBmcm9tIHBhcmVudCBzdGFjay5cbiAgICAgKi9cbiAgICBwb3BUaGlzVmlldygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgcHJvcHMudmlld1BvcChwcm9wcy52aWV3SWQpO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIHZpZXdJZDogdHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZpZXdXYXk6IHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2aWV3UG9wOiB0eXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7fSxcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3SWQ6IG51bGwsXG4gICAgICAgICAgICB2aWV3V2F5OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFN0YWNrTWl4aW4pO1xuIl19
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactView = require('apeman-react-view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Mixin to handle stack
                                                                                                                                                                                                                   */

"use strict";

var STACK_INSETS_STATE_KEY = 'stackInsets';

/** @lends ApStackMixin */
var ApStackMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Render a stack element.
     * @returns {object} - A react element.
     */

    renderStack: function renderStack() {
        var s = this;
        var state = s.state;
        var props = s.props;

        var insets = s.getStackInsets();
        return _react2.default.createElement(_apemanReactView.ApViewStack, { stacker: props.stacker,
            insetTop: insets.top || 0,
            insetRight: insets.right || 0,
            insetLeft: insets.left || 0,
            insetBottom: insets.bottom || 0
        });
    },

    /**
     * Get insets of the stack.
     * @returns {object}
     */
    getStackInsets: function getStackInsets() {
        var s = this;
        return s.state[STACK_INSETS_STATE_KEY] || {};
    },

    /**
     * Set insets of the stack.
     * @param {nextInsets}
     */
    setStackInsets: function setStackInsets(nextInsets) {
        var s = this;
        var insets = s.getStackInsets();
        s.setState(_defineProperty({}, STACK_INSETS_STATE_KEY, Object.assign(insets, nextInsets)));
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        Stacker: _apemanReactView.ApViewStack.Stacker
    },

    propTypes: {
        stacker: _react.PropTypes.instanceOf(_apemanReactView.ApViewStack.Stacker).isRequired
    },

    getInitialState: function getInitialState() {
        return _defineProperty({}, STACK_INSETS_STATE_KEY, {});
    }
};

module.exports = Object.freeze(ApStackMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3N0YWNrX21peGluLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUtBLFlBQVksQ0FBQzs7QUFFYixJQUFNLHNCQUFzQixHQUFHLGFBQWE7OztBQUFDLEFBRzdDLElBQU0sWUFBWSxHQUFHOzs7Ozs7Ozs7OztBQVVqQixlQUFXLHlCQUFFO0FBQ1QsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ1IsS0FBSyxHQUFXLENBQUMsQ0FBakIsS0FBSztZQUFFLEtBQUssR0FBSSxDQUFDLENBQVYsS0FBSzs7QUFDakIsWUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2hDLGVBQU8sK0NBcEJQLFdBQVcsSUFvQlMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEFBQUM7QUFDdkIsb0JBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQUFBQztBQUMxQixzQkFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxBQUFDO0FBQzlCLHFCQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEFBQUM7QUFDNUIsdUJBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQUFBQztVQUV0QyxDQUFDO0tBQ2xCOzs7Ozs7QUFLRCxrQkFBYyw0QkFBRTtBQUNaLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoRDs7Ozs7O0FBS0Qsa0JBQWMsMEJBQUMsVUFBVSxFQUFDO0FBQ3RCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFlBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNoQyxTQUFDLENBQUMsUUFBUSxxQkFDTCxzQkFBc0IsRUFBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFDN0QsQ0FBQztLQUNOOzs7Ozs7QUFNRCxXQUFPLEVBQUU7QUFDTCxlQUFPLEVBQUUsaUJBckRULFdBQVcsQ0FxRFUsT0FBTztLQUMvQjs7QUFFRCxhQUFTLEVBQUU7QUFDUCxlQUFPLEVBQUUsT0ExREYsU0FBUyxDQTBERCxVQUFVLENBQUMsaUJBekQxQixXQUFXLENBeUQyQixPQUFPLENBQUMsQ0FBQyxVQUFVO0tBQzVEOztBQUVELG1CQUFlLDZCQUFHO0FBQ2QsbUNBQ0ssc0JBQXNCLEVBQUcsRUFBRSxFQUM5QjtLQUNMO0NBRUosQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfc3RhY2tfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSBzdGFja1xuICovXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBWaWV3U3RhY2t9IGZyb20gJ2FwZW1hbi1yZWFjdC12aWV3JztcblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBTVEFDS19JTlNFVFNfU1RBVEVfS0VZID0gJ3N0YWNrSW5zZXRzJztcblxuLyoqIEBsZW5kcyBBcFN0YWNrTWl4aW4gKi9cbmNvbnN0IEFwU3RhY2tNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSBzdGFjayBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSByZWFjdCBlbGVtZW50LlxuICAgICAqL1xuICAgIHJlbmRlclN0YWNrKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtzdGF0ZSwgcHJvcHN9ID0gcztcbiAgICAgICAgbGV0IGluc2V0cyA9IHMuZ2V0U3RhY2tJbnNldHMoKTtcbiAgICAgICAgcmV0dXJuIDxBcFZpZXdTdGFjayBzdGFja2VyPXtwcm9wcy5zdGFja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0VG9wPXtpbnNldHMudG9wIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXRSaWdodD17aW5zZXRzLnJpZ2h0IHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXRMZWZ0PXtpbnNldHMubGVmdCB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0Qm90dG9tPXtpbnNldHMuYm90dG9tIHx8IDB9XG4gICAgICAgID5cbiAgICAgICAgPC9BcFZpZXdTdGFjaz47XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgaW5zZXRzIG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldFN0YWNrSW5zZXRzKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHMuc3RhdGVbU1RBQ0tfSU5TRVRTX1NUQVRFX0tFWV0gfHwge307XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXQgaW5zZXRzIG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0ge25leHRJbnNldHN9XG4gICAgICovXG4gICAgc2V0U3RhY2tJbnNldHMobmV4dEluc2V0cyl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IGluc2V0cyA9IHMuZ2V0U3RhY2tJbnNldHMoKTtcbiAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbU1RBQ0tfSU5TRVRTX1NUQVRFX0tFWV06IE9iamVjdC5hc3NpZ24oaW5zZXRzLCBuZXh0SW5zZXRzKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBTdGFja2VyOiBBcFZpZXdTdGFjay5TdGFja2VyXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzdGFja2VyOiB0eXBlcy5pbnN0YW5jZU9mKEFwVmlld1N0YWNrLlN0YWNrZXIpLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW1NUQUNLX0lOU0VUU19TVEFURV9LRVldOiB7fVxuICAgICAgICB9O1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwU3RhY2tNaXhpbik7XG4iXX0=
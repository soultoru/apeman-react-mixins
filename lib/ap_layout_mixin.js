/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HANDLER_NOT_IMPLEMENTED_WARNING = '[ApLayoutMixin] Should implement doLayout method.';
var LAYOUT_INTERVAL = 40;

/** @lends ApResizeMixin */
var ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------

    _layoutIfNeeded: function _layoutIfNeeded() {
        var s = this;

        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(function () {
            s.doLayout();
        }, LAYOUT_INTERVAL);
    },

    /**
     * Reserve layout.
     */
    setNeedsLayout: function setNeedsLayout() {
        var s = this;
        setTimeout(s._layoutIfNeeded, 0);
    },

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        var s = this;
        if (!s.doLayout) {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
            return;
        }
        window.addEventListener('resize', s._layoutIfNeeded);
        setNeedsLayout();
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
        setNeedsLayout();
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        var s = this;
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        var s = this;
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        window.removeEventListener('resize', s._layoutIfNeeded);
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxFQUFFOzs7QUFBQyxBQUczQixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBS2hCLG1CQUFlLDZCQUFFO0FBQ2IsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUViLG9CQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLFNBQUMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQUs7QUFDN0IsYUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDdkI7Ozs7O0FBS0Qsa0JBQWMsNEJBQUU7QUFDWixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixrQkFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7Ozs7QUFVRCxzQkFBa0IsZ0NBQUcsRUFDcEI7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzlDLG1CQUFPO1NBQ1Y7QUFDRCxjQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyRCxzQkFBYyxFQUFFLENBQUM7S0FDcEI7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLHNCQUFjLEVBQUUsQ0FBQztLQUNwQjtBQUVELHVCQUFtQiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHNCQUFrQiw4QkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixjQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMzRDtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX2xheW91dF9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIHJlc2l6ZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFJlc2l6ZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HID0gJ1tBcExheW91dE1peGluXSBTaG91bGQgaW1wbGVtZW50IGRvTGF5b3V0IG1ldGhvZC4nO1xuY29uc3QgTEFZT1VUX0lOVEVSVkFMID0gNDA7XG5cbi8qKiBAbGVuZHMgQXBSZXNpemVNaXhpbiAqL1xubGV0IEFwUmVzaXplTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIF9sYXlvdXRJZk5lZWRlZCgpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHMuX2xheW91dFRpbWVyKTtcbiAgICAgICAgcy5fbGF5b3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgcy5kb0xheW91dCgpO1xuICAgICAgICB9LCBMQVlPVVRfSU5URVJWQUwpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNlcnZlIGxheW91dC5cbiAgICAgKi9cbiAgICBzZXROZWVkc0xheW91dCgpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQocy5fbGF5b3V0SWZOZWVkZWQsIDApO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBpZiAoIXMuZG9MYXlvdXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5fbGF5b3V0SWZOZWVkZWQpO1xuICAgICAgICBzZXROZWVkc0xheW91dCgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHNldE5lZWRzTGF5b3V0KCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5fbGF5b3V0SWZOZWVkZWQpO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
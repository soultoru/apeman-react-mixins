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

    _layoutIfNeeded: function _layoutIfNeeded(immidiate) {
        var s = this;

        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(function () {
            s.doLayout();
        }, immidiate ? 0 : LAYOUT_INTERVAL);
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
        s._layoutIfNeeded(true);
        s._layoutIfNeeded();
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
        setTimeout(s._layoutIfNeeded, LAYOUT_INTERVAL / 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxFQUFFOzs7QUFBQyxBQUczQixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBS2hCLG1CQUFlLDJCQUFDLFNBQVMsRUFBQztBQUN0QixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7O0FBRWIsb0JBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0IsU0FBQyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBSztBQUM3QixhQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEIsRUFBRSxTQUFTLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0tBQ3ZDOzs7OztBQUtELGtCQUFjLDRCQUFFO0FBQ1osWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2Isa0JBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3BDOzs7Ozs7Ozs7O0FBVUQsc0JBQWtCLGdDQUFHLEVBQ3BCO0FBRUQscUJBQWlCLCtCQUFHO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFlBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQ2IsbUJBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUM5QyxtQkFBTztTQUNWO0FBQ0QsY0FBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckQsU0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixTQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDdkI7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGtCQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFFRCx1QkFBbUIsK0JBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUN0QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCxzQkFBa0IsOEJBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNyQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCx3QkFBb0Isa0NBQUc7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsY0FBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDM0Q7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyIsImZpbGUiOiJhcF9sYXlvdXRfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSByZXNpemUuXG4gKiBAY29uc3RydWN0b3IgQXBSZXNpemVNaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyA9ICdbQXBMYXlvdXRNaXhpbl0gU2hvdWxkIGltcGxlbWVudCBkb0xheW91dCBtZXRob2QuJztcbmNvbnN0IExBWU9VVF9JTlRFUlZBTCA9IDQwO1xuXG4vKiogQGxlbmRzIEFwUmVzaXplTWl4aW4gKi9cbmxldCBBcFJlc2l6ZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBfbGF5b3V0SWZOZWVkZWQoaW1taWRpYXRlKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChzLl9sYXlvdXRUaW1lcik7XG4gICAgICAgIHMuX2xheW91dFRpbWVyID0gc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHMuZG9MYXlvdXQoKTtcbiAgICAgICAgfSwgaW1taWRpYXRlID8gMCA6IExBWU9VVF9JTlRFUlZBTCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2VydmUgbGF5b3V0LlxuICAgICAqL1xuICAgIHNldE5lZWRzTGF5b3V0KCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChzLl9sYXlvdXRJZk5lZWRlZCwgMCk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmICghcy5kb0xheW91dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKEhBTkRMRVJfTk9UX0lNUExFTUVOVEVEX1dBUk5JTkcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLl9sYXlvdXRJZk5lZWRlZCk7XG4gICAgICAgIHMuX2xheW91dElmTmVlZGVkKHRydWUpO1xuICAgICAgICBzLl9sYXlvdXRJZk5lZWRlZCgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQocy5fbGF5b3V0SWZOZWVkZWQsIExBWU9VVF9JTlRFUlZBTCAvIDIpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMuX2xheW91dElmTmVlZGVkKTtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFJlc2l6ZU1peGluKTtcbiJdfQ==
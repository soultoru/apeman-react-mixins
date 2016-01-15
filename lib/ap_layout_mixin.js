/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HANDLER_NOT_IMPLEMENTED_WARNING = '[ApLayoutMixin] Should implement doLayout method.';
var LAYOUT_INTERVAL = 100;

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
        }
        window.addEventListener('resize', s._layoutIfNeeded);

        setTimeout(s._layoutIfNeeded, LAYOUT_INTERVAL / 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxHQUFHOzs7QUFBQyxBQUc1QixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBS2hCLG1CQUFlLDZCQUFFO0FBQ2IsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUViLG9CQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLFNBQUMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQUs7QUFDN0IsYUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDdkI7Ozs7O0FBS0Qsa0JBQWMsNEJBQUU7QUFDWixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixrQkFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7Ozs7QUFVRCxzQkFBa0IsZ0NBQUcsRUFDcEI7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO0FBQ0QsY0FBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRXJELGtCQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGtCQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFFRCx1QkFBbUIsK0JBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUN0QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCxzQkFBa0IsOEJBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNyQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCx3QkFBb0Isa0NBQUc7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsY0FBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDM0Q7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyIsImZpbGUiOiJhcF9sYXlvdXRfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSByZXNpemUuXG4gKiBAY29uc3RydWN0b3IgQXBSZXNpemVNaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyA9ICdbQXBMYXlvdXRNaXhpbl0gU2hvdWxkIGltcGxlbWVudCBkb0xheW91dCBtZXRob2QuJztcbmNvbnN0IExBWU9VVF9JTlRFUlZBTCA9IDEwMDtcblxuLyoqIEBsZW5kcyBBcFJlc2l6ZU1peGluICovXG5sZXQgQXBSZXNpemVNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgX2xheW91dElmTmVlZGVkKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcblxuICAgICAgICBjbGVhclRpbWVvdXQocy5fbGF5b3V0VGltZXIpO1xuICAgICAgICBzLl9sYXlvdXRUaW1lciA9IHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBzLmRvTGF5b3V0KCk7XG4gICAgICAgIH0sIExBWU9VVF9JTlRFUlZBTCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2VydmUgbGF5b3V0LlxuICAgICAqL1xuICAgIHNldE5lZWRzTGF5b3V0KCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChzLl9sYXlvdXRJZk5lZWRlZCwgMCk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmICghcy5kb0xheW91dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKEhBTkRMRVJfTk9UX0lNUExFTUVOVEVEX1dBUk5JTkcpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLl9sYXlvdXRJZk5lZWRlZCk7XG5cbiAgICAgICAgc2V0VGltZW91dChzLl9sYXlvdXRJZk5lZWRlZCwgTEFZT1VUX0lOVEVSVkFMIC8gMik7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChzLl9sYXlvdXRJZk5lZWRlZCwgTEFZT1VUX0lOVEVSVkFMIC8gMik7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5fbGF5b3V0SWZOZWVkZWQpO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
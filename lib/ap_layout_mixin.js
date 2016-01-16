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

        setTimeout(s._layoutIfNeeded, 10);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxHQUFHOzs7QUFBQyxBQUc1QixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBS2hCLG1CQUFlLDZCQUFFO0FBQ2IsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUViLG9CQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLFNBQUMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQUs7QUFDN0IsYUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hCLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDdkI7Ozs7O0FBS0Qsa0JBQWMsNEJBQUU7QUFDWixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixrQkFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7Ozs7QUFVRCxzQkFBa0IsZ0NBQUcsRUFDcEI7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO0FBQ0QsY0FBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRXJELGtCQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyQztBQUVELDZCQUF5QixxQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2Isa0JBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0RDtBQUVELHVCQUFtQiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHNCQUFrQiw4QkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixjQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMzRDtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX2xheW91dF9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIHJlc2l6ZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFJlc2l6ZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HID0gJ1tBcExheW91dE1peGluXSBTaG91bGQgaW1wbGVtZW50IGRvTGF5b3V0IG1ldGhvZC4nO1xuY29uc3QgTEFZT1VUX0lOVEVSVkFMID0gMTAwO1xuXG4vKiogQGxlbmRzIEFwUmVzaXplTWl4aW4gKi9cbmxldCBBcFJlc2l6ZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBfbGF5b3V0SWZOZWVkZWQoKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChzLl9sYXlvdXRUaW1lcik7XG4gICAgICAgIHMuX2xheW91dFRpbWVyID0gc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIHMuZG9MYXlvdXQoKTtcbiAgICAgICAgfSwgTEFZT1VUX0lOVEVSVkFMKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXJ2ZSBsYXlvdXQuXG4gICAgICovXG4gICAgc2V0TmVlZHNMYXlvdXQoKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KHMuX2xheW91dElmTmVlZGVkLCAwKTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgaWYgKCFzLmRvTGF5b3V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMuX2xheW91dElmTmVlZGVkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KHMuX2xheW91dElmTmVlZGVkLCAxMCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChzLl9sYXlvdXRJZk5lZWRlZCwgTEFZT1VUX0lOVEVSVkFMIC8gMik7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5fbGF5b3V0SWZOZWVkZWQpO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
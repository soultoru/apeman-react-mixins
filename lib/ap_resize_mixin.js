/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HANDLER_NOT_IMPLEMENTED_WARNING = '[ApResizeMixin] Should implement windowDidResize method.';

/** @lends ApResizeMixin */
var ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        var s = this;
        if (s.windowDidResize) {
            window.addEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
    },
    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        var s = this;
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        var s = this;
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        if (s.windowDidResize) {
            window.removeEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3Jlc2l6ZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRywwREFBMEQ7OztBQUFDLEFBR25HLElBQUksYUFBYSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQWNoQixzQkFBa0IsZ0NBQUcsRUFDcEI7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO0FBQ25CLGtCQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN4RCxNQUFNO0FBQ0gsbUJBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtLQUNKO0FBRUQsNkJBQXlCLHFDQUFDLFNBQVMsRUFBRTtBQUNqQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCx1QkFBbUIsK0JBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUN0QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCxzQkFBa0IsOEJBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRTtBQUNyQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCx3QkFBb0Isa0NBQUc7QUFDbkIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO0FBQ25CLGtCQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzRCxNQUFNO0FBQ0gsbUJBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtLQUNKO0NBRUosQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfcmVzaXplX21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiB0byBoYW5kbGUgcmVzaXplLlxuICogQGNvbnN0cnVjdG9yIEFwUmVzaXplTWl4aW5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhBTkRMRVJfTk9UX0lNUExFTUVOVEVEX1dBUk5JTkcgPSAnW0FwUmVzaXplTWl4aW5dIFNob3VsZCBpbXBsZW1lbnQgd2luZG93RGlkUmVzaXplIG1ldGhvZC4nO1xuXG4vKiogQGxlbmRzIEFwUmVzaXplTWl4aW4gKi9cbmxldCBBcFJlc2l6ZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmIChzLndpbmRvd0RpZFJlc2l6ZSkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMud2luZG93RGlkUmVzaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBpZiAocy53aW5kb3dEaWRSZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLndpbmRvd0RpZFJlc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFJlc2l6ZU1peGluKTtcbiJdfQ==
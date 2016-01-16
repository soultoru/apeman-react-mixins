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

    componentDidMount: function componentDidMount() {
        var s = this;
        if (s.windowDidResize) {
            window.addEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        if (s.windowDidResize) {
            window.removeEventListener('resize', s.windowDidResize);
        }
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3Jlc2l6ZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRywwREFBMEQ7OztBQUFDLEFBR25HLElBQUksYUFBYSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQWNoQixxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO0FBQ25CLGtCQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN4RCxNQUFNO0FBQ0gsbUJBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtLQUNKO0FBRUQsd0JBQW9CLGtDQUFHO0FBQ25CLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFlBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtBQUNuQixrQkFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0Q7S0FDSjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3Jlc2l6ZV9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIHJlc2l6ZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFJlc2l6ZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HID0gJ1tBcFJlc2l6ZU1peGluXSBTaG91bGQgaW1wbGVtZW50IHdpbmRvd0RpZFJlc2l6ZSBtZXRob2QuJztcblxuLyoqIEBsZW5kcyBBcFJlc2l6ZU1peGluICovXG5sZXQgQXBSZXNpemVNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgaWYgKHMud2luZG93RGlkUmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy53aW5kb3dEaWRSZXNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKEhBTkRMRVJfTk9UX0lNUExFTUVOVEVEX1dBUk5JTkcpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmIChzLndpbmRvd0RpZFJlc2l6ZSkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMud2luZG93RGlkUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
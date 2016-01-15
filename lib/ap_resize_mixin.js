/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HANDLER_NOT_IMPLEMENTED_WARNING = '[ApResizeMixin] Should implement onResize method.';

/** @lends ApResizeMixin */
var ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Handle resize.
     * @returns {object} e - Resize event.
     */
    onResize: undefined,

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        var s = this;
        if (s.onResize) {
            window.addEventListener('resize', s.onResize);
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
        if (s.onResize) {
            window.removeEventListener('resize', s.onResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3Jlc2l6ZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQ7OztBQUFDLEFBRzVGLElBQUksYUFBYSxHQUFHOzs7Ozs7Ozs7O0FBV2hCLFlBQVEsRUFBRSxTQUFTOzs7Ozs7Ozs7O0FBVW5CLHNCQUFrQixnQ0FBRyxFQUNwQjtBQUVELHFCQUFpQiwrQkFBRztBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixZQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDWixrQkFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakQsTUFBTTtBQUNILG1CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDakQ7S0FDSjtBQUVELDZCQUF5QixxQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsdUJBQW1CLCtCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDdEMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsc0JBQWtCLDhCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDckMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsd0JBQW9CLGtDQUFHO0FBQ25CLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFlBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtBQUNaLGtCQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRCxNQUFNO0FBQ0gsbUJBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNqRDtLQUNKO0NBRUosQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfcmVzaXplX21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiB0byBoYW5kbGUgcmVzaXplLlxuICogQGNvbnN0cnVjdG9yIEFwUmVzaXplTWl4aW5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhBTkRMRVJfTk9UX0lNUExFTUVOVEVEX1dBUk5JTkcgPSAnW0FwUmVzaXplTWl4aW5dIFNob3VsZCBpbXBsZW1lbnQgb25SZXNpemUgbWV0aG9kLic7XG5cbi8qKiBAbGVuZHMgQXBSZXNpemVNaXhpbiAqL1xubGV0IEFwUmVzaXplTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgcmVzaXplLlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IGUgLSBSZXNpemUgZXZlbnQuXG4gICAgICovXG4gICAgb25SZXNpemU6IHVuZGVmaW5lZCxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmIChzLm9uUmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5vblJlc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgaWYgKHMub25SZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLm9uUmVzaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
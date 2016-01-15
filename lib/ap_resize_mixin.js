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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3Jlc2l6ZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQ7OztBQUFDLEFBRzVGLElBQUksYUFBYSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQWNoQixzQkFBa0IsZ0NBQUcsRUFDcEI7QUFFRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQ1osa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pELE1BQU07QUFDSCxtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0o7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHVCQUFtQiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHNCQUFrQiw4QkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixZQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDWixrQkFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQsTUFBTTtBQUNILG1CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDakQ7S0FDSjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3Jlc2l6ZV9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIHJlc2l6ZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFJlc2l6ZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HID0gJ1tBcFJlc2l6ZU1peGluXSBTaG91bGQgaW1wbGVtZW50IG9uUmVzaXplIG1ldGhvZC4nO1xuXG4vKiogQGxlbmRzIEFwUmVzaXplTWl4aW4gKi9cbmxldCBBcFJlc2l6ZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGlmIChzLm9uUmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5vblJlc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgaWYgKHMub25SZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzLm9uUmVzaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
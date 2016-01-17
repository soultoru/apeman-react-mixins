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

    _layoutTimer: null,

    /**
     * Reserve layout.
     */
    layout: function layout(immidate) {
        var s = this;
        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(function () {
            s.doLayout();
        }, immidate ? 0 : LAYOUT_INTERVAL);
    },

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentDidMount: function componentDidMount() {
        var s = this;
        if (!s.doLayout) {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
            return;
        }
        window.addEventListener('resize', s.layout);
        s.layout(true);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
        s.layout();
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        clearTimeout(s._layoutTimer);
        window.removeEventListener('resize', s.layout);
        delete s._layoutTimer;
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxFQUFFOzs7QUFBQyxBQUczQixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBTWhCLGdCQUFZLEVBQUUsSUFBSTs7Ozs7QUFLbEIsVUFBTSxrQkFBQyxRQUFRLEVBQUM7QUFDWixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixvQkFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QixTQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFLO0FBQzdCLGFBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQixFQUFFLFFBQVEsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7S0FDdEM7Ozs7Ozs7Ozs7QUFVRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzlDLG1CQUFPO1NBQ1Y7QUFDRCxjQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxTQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBRUQsNkJBQXlCLHFDQUFDLFNBQVMsRUFBRTtBQUNqQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixTQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZDtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixvQkFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QixjQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxlQUFRLENBQUMsQ0FBQyxZQUFZLENBQUM7S0FDMUI7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyIsImZpbGUiOiJhcF9sYXlvdXRfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSByZXNpemUuXG4gKiBAY29uc3RydWN0b3IgQXBSZXNpemVNaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyA9ICdbQXBMYXlvdXRNaXhpbl0gU2hvdWxkIGltcGxlbWVudCBkb0xheW91dCBtZXRob2QuJztcbmNvbnN0IExBWU9VVF9JTlRFUlZBTCA9IDQwO1xuXG4vKiogQGxlbmRzIEFwUmVzaXplTWl4aW4gKi9cbmxldCBBcFJlc2l6ZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIF9sYXlvdXRUaW1lcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFJlc2VydmUgbGF5b3V0LlxuICAgICAqL1xuICAgIGxheW91dChpbW1pZGF0ZSl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHMuX2xheW91dFRpbWVyKTtcbiAgICAgICAgcy5fbGF5b3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgcy5kb0xheW91dCgpO1xuICAgICAgICB9LCBpbW1pZGF0ZSA/IDAgOiBMQVlPVVRfSU5URVJWQUwpO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgaWYgKCFzLmRvTGF5b3V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oSEFORExFUl9OT1RfSU1QTEVNRU5URURfV0FSTklORyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMubGF5b3V0KTtcbiAgICAgICAgcy5sYXlvdXQodHJ1ZSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5sYXlvdXQoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHMuX2xheW91dFRpbWVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHMubGF5b3V0KTtcbiAgICAgICAgZGVsZXRlICBzLl9sYXlvdXRUaW1lcjtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFJlc2l6ZU1peGluKTtcbiJdfQ==
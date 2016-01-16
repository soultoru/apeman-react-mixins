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
        window.removeEventListener('resize', s.layout);
    }
};

module.exports = Object.freeze(ApResizeMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xheW91dF9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7O0FBSWIsSUFBTSwrQkFBK0IsR0FBRyxtREFBbUQsQ0FBQztBQUM1RixJQUFNLGVBQWUsR0FBRyxFQUFFOzs7QUFBQyxBQUczQixJQUFJLGFBQWEsR0FBRzs7Ozs7O0FBTWhCLGdCQUFZLEVBQUUsSUFBSTs7Ozs7QUFLbEIsVUFBTSxrQkFBQyxRQUFRLEVBQUM7QUFDWixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixvQkFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QixTQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFLO0FBQzdCLGFBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNoQixFQUFFLFFBQVEsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7S0FDdEM7Ozs7Ozs7Ozs7QUFVRCxxQkFBaUIsK0JBQUc7QUFDaEIsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsWUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzlDLG1CQUFPO1NBQ1Y7QUFDRCxjQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxTQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBRUQsNkJBQXlCLHFDQUFDLFNBQVMsRUFBRTtBQUNqQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixTQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZDtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixjQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsRDtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX2xheW91dF9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIHJlc2l6ZS5cbiAqIEBjb25zdHJ1Y3RvciBBcFJlc2l6ZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HID0gJ1tBcExheW91dE1peGluXSBTaG91bGQgaW1wbGVtZW50IGRvTGF5b3V0IG1ldGhvZC4nO1xuY29uc3QgTEFZT1VUX0lOVEVSVkFMID0gNDA7XG5cbi8qKiBAbGVuZHMgQXBSZXNpemVNaXhpbiAqL1xubGV0IEFwUmVzaXplTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgX2xheW91dFRpbWVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogUmVzZXJ2ZSBsYXlvdXQuXG4gICAgICovXG4gICAgbGF5b3V0KGltbWlkYXRlKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBjbGVhclRpbWVvdXQocy5fbGF5b3V0VGltZXIpO1xuICAgICAgICBzLl9sYXlvdXRUaW1lciA9IHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICBzLmRvTGF5b3V0KCk7XG4gICAgICAgIH0sIGltbWlkYXRlID8gMCA6IExBWU9VVF9JTlRFUlZBTCk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBpZiAoIXMuZG9MYXlvdXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihIQU5ETEVSX05PVF9JTVBMRU1FTlRFRF9XQVJOSU5HKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5sYXlvdXQpO1xuICAgICAgICBzLmxheW91dCh0cnVlKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLmxheW91dCgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcy5sYXlvdXQpO1xuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwUmVzaXplTWl4aW4pO1xuIl19
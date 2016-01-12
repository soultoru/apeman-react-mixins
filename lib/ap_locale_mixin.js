/**
 * React mixin set of apeman.
 * @constructor ApLocaleMixin
 */

"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOCALE_PROP_KEY = "_apLocale";

/** @lends LocaleMixin */
var LocaleMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Get locales
     * @returns {object} - Locale data.
     */

    getLocale: function getLocale() {
        var s = this;
        return s.context[LOCALE_PROP_KEY];
    },

    //--------------------
    // Specs
    //--------------------
    contextTypes: _defineProperty({}, LOCALE_PROP_KEY, _react.PropTypes.object),
    childContextTypes: _defineProperty({}, LOCALE_PROP_KEY, _react.PropTypes.object),

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        var s = this;
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
    },
    getChildContext: function getChildContext() {
        var s = this;
        return _defineProperty({}, LOCALE_PROP_KEY, s.props.locale || s.getLocale());
    }
};

module.exports = Object.freeze(LocaleMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xvY2FsZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYixJQUFNLGVBQWUsR0FBRyxXQUFXOzs7QUFBQyxBQUdwQyxJQUFJLFdBQVcsR0FBRzs7Ozs7Ozs7Ozs7QUFXZCxhQUFTLHVCQUFFO0FBQ1AsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsZUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JDOzs7OztBQUtELGdCQUFZLHNCQUNQLGVBQWUsRUFBRyxPQXpCWixTQUFTLENBeUJTLE1BQU0sQ0FDbEM7QUFDRCxxQkFBaUIsc0JBQ1osZUFBZSxFQUFHLE9BNUJaLFNBQVMsQ0E0QlMsTUFBTSxDQUNsQzs7Ozs7O0FBTUQsc0JBQWtCLGdDQUFHLEVBQ3BCO0FBRUQscUJBQWlCLCtCQUFHO0FBQ2hCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELDZCQUF5QixxQ0FBQyxTQUFTLEVBQUU7QUFDakMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsdUJBQW1CLCtCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDdEMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsc0JBQWtCLDhCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDckMsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2hCO0FBRUQsd0JBQW9CLGtDQUFHO0FBQ25CLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELG1CQUFlLDZCQUFFO0FBQ2IsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2IsbUNBQ0ssZUFBZSxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFDckQ7S0FDSjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX2xvY2FsZV9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgbWl4aW4gc2V0IG9mIGFwZW1hbi5cbiAqIEBjb25zdHJ1Y3RvciBBcExvY2FsZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMT0NBTEVfUFJPUF9LRVkgPSBcIl9hcExvY2FsZVwiO1xuXG4vKiogQGxlbmRzIExvY2FsZU1peGluICovXG5sZXQgTG9jYWxlTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgbG9jYWxlc1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gTG9jYWxlIGRhdGEuXG4gICAgICovXG4gICAgZ2V0TG9jYWxlKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHMuY29udGV4dFtMT0NBTEVfUFJPUF9LRVldO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29udGV4dFR5cGVzOiB7XG4gICAgICAgIFtMT0NBTEVfUFJPUF9LRVldOiB0eXBlcy5vYmplY3RcbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICAgIFtMT0NBTEVfUFJPUF9LRVldOiB0eXBlcy5vYmplY3RcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtMT0NBTEVfUFJPUF9LRVldOiBzLnByb3BzLmxvY2FsZSB8fCBzLmdldExvY2FsZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShMb2NhbGVNaXhpbik7XG4iXX0=
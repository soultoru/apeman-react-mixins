/**
 * Mixin to handle locale.
 * @constructor ApLocaleMixin
 */

"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOCALE_PROP_KEY = "_apLocale";

/** @lends ApLocaleMixin */
var ApLocaleMixin = {

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
    getChildContext: function getChildContext() {
        var s = this;
        return _defineProperty({}, LOCALE_PROP_KEY, s.props.locale || s.getLocale());
    },

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
    }
};

module.exports = Object.freeze(ApLocaleMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xvY2FsZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYixJQUFNLGVBQWUsR0FBRyxXQUFXOzs7QUFBQyxBQUdwQyxJQUFJLGFBQWEsR0FBRzs7Ozs7Ozs7Ozs7QUFXaEIsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNyQzs7Ozs7QUFLRCxnQkFBWSxzQkFDUCxlQUFlLEVBQUcsT0F6QlosU0FBUyxDQXlCUyxNQUFNLENBQ2xDO0FBQ0QscUJBQWlCLHNCQUNaLGVBQWUsRUFBRyxPQTVCWixTQUFTLENBNEJTLE1BQU0sQ0FDbEM7QUFDRCxtQkFBZSw2QkFBRTtBQUNiLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLG1DQUNLLGVBQWUsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQ3JEO0tBQ0o7Ozs7OztBQU1ELHNCQUFrQixnQ0FBRyxFQUNwQjtBQUVELHFCQUFpQiwrQkFBRztBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHVCQUFtQiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHNCQUFrQiw4QkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyIsImZpbGUiOiJhcF9sb2NhbGVfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSBsb2NhbGUuXG4gKiBAY29uc3RydWN0b3IgQXBMb2NhbGVNaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTE9DQUxFX1BST1BfS0VZID0gXCJfYXBMb2NhbGVcIjtcblxuLyoqIEBsZW5kcyBBcExvY2FsZU1peGluICovXG5sZXQgQXBMb2NhbGVNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8qKlxuICAgICAqIEdldCBsb2NhbGVzXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBMb2NhbGUgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRMb2NhbGUoKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gcy5jb250ZXh0W0xPQ0FMRV9QUk9QX0tFWV07XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb250ZXh0VHlwZXM6IHtcbiAgICAgICAgW0xPQ0FMRV9QUk9QX0tFWV06IHR5cGVzLm9iamVjdFxuICAgIH0sXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgICAgW0xPQ0FMRV9QUk9QX0tFWV06IHR5cGVzLm9iamVjdFxuICAgIH0sXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtMT0NBTEVfUFJPUF9LRVldOiBzLnByb3BzLmxvY2FsZSB8fCBzLmdldExvY2FsZSgpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcExvY2FsZU1peGluKTtcbiJdfQ==
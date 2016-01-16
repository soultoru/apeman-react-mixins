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
    }

    //--------------------
    // Lifecycle
    //--------------------

};

module.exports = Object.freeze(ApLocaleMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX2xvY2FsZV9taXhpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJYixJQUFNLGVBQWUsR0FBRyxXQUFXOzs7QUFBQyxBQUdwQyxJQUFJLGFBQWEsR0FBRzs7Ozs7Ozs7Ozs7QUFVaEIsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNyQzs7Ozs7QUFLRCxnQkFBWSxzQkFDUCxlQUFlLEVBQUcsT0F4QlosU0FBUyxDQXdCUyxNQUFNLENBQ2xDO0FBQ0QscUJBQWlCLHNCQUNaLGVBQWUsRUFBRyxPQTNCWixTQUFTLENBMkJTLE1BQU0sQ0FDbEM7QUFDRCxtQkFBZSw2QkFBRTtBQUNiLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLG1DQUNLLGVBQWUsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQ3JEO0tBQ0o7Ozs7OztDQU9KLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX2xvY2FsZV9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gaGFuZGxlIGxvY2FsZS5cbiAqIEBjb25zdHJ1Y3RvciBBcExvY2FsZU1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMT0NBTEVfUFJPUF9LRVkgPSBcIl9hcExvY2FsZVwiO1xuXG4vKiogQGxlbmRzIEFwTG9jYWxlTWl4aW4gKi9cbmxldCBBcExvY2FsZU1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdldCBsb2NhbGVzXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBMb2NhbGUgZGF0YS5cbiAgICAgKi9cbiAgICBnZXRMb2NhbGUoKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gcy5jb250ZXh0W0xPQ0FMRV9QUk9QX0tFWV07XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb250ZXh0VHlwZXM6IHtcbiAgICAgICAgW0xPQ0FMRV9QUk9QX0tFWV06IHR5cGVzLm9iamVjdFxuICAgIH0sXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgICAgW0xPQ0FMRV9QUk9QX0tFWV06IHR5cGVzLm9iamVjdFxuICAgIH0sXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtMT0NBTEVfUFJPUF9LRVldOiBzLnByb3BzLmxvY2FsZSB8fCBzLmdldExvY2FsZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcExvY2FsZU1peGluKTtcbiJdfQ==
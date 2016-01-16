/**
 * Mixin to handle spin.
 * @constructor ApSpinMixin
 */

"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SPIN_PROP_KEY = "_apSpin";

/** @lends ApSpinMixin */
var ApSpinMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Count active spin
     * @returns {number} - Number of spins.
     */

    countSpin: function countSpin() {
        var s = this;
        return Number(s.state[SPIN_PROP_KEY] || 0);
    },

    /**
     * Check if spin exists.
     * @returns {boolean} - Exists or not.
     */
    hasSpin: function hasSpin() {
        var s = this;
        return s.countSpin() > 0;
    },

    /**
     * Increment spin count.
     */
    pushSpin: function pushSpin() {
        var s = this;
        s.setState(_defineProperty({}, SPIN_PROP_KEY, s.countSpin() + 1));
    },

    /**
     * Decrement spin count.
     */
    popSpin: function popSpin() {
        var s = this;
        s.setState(_defineProperty({}, SPIN_PROP_KEY, s.countSpin() - 1));
    },

    /**
     * Rest spin count
     */
    resetSpin: function resetSpin() {
        var s = this;
        s.setState(_defineProperty({}, SPIN_PROP_KEY, 0));
    },

    //--------------------
    // Specs
    //--------------------
    getInitialState: function getInitialState() {
        var s = this;
        return _defineProperty({}, SPIN_PROP_KEY, 0);
    }

    //--------------------
    // Lifecycle
    //--------------------

};

module.exports = Object.freeze(ApSpinMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3NwaW5fbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSWIsSUFBTSxhQUFhLEdBQUcsU0FBUzs7O0FBQUMsQUFHaEMsSUFBSSxXQUFXLEdBQUc7Ozs7Ozs7Ozs7O0FBVWQsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDOUM7Ozs7OztBQU1ELFdBQU8scUJBQUU7QUFDTCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixlQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7O0FBS0QsWUFBUSxzQkFBRTtBQUNOLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7Ozs7O0FBS0QsV0FBTyxxQkFBRTtBQUNMLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7Ozs7O0FBS0QsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLEVBQUUsQ0FBQztLQUNwQzs7Ozs7QUFLRCxtQkFBZSw2QkFBRTtBQUNiLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLG1DQUNLLGFBQWEsRUFBRyxDQUFDLEVBQ3JCO0tBQ0o7Ozs7OztDQU9KLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3NwaW5fbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSBzcGluLlxuICogQGNvbnN0cnVjdG9yIEFwU3Bpbk1peGluXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0eXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTUElOX1BST1BfS0VZID0gXCJfYXBTcGluXCI7XG5cbi8qKiBAbGVuZHMgQXBTcGluTWl4aW4gKi9cbmxldCBBcFNwaW5NaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBDb3VudCBhY3RpdmUgc3BpblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gTnVtYmVyIG9mIHNwaW5zLlxuICAgICAqL1xuICAgIGNvdW50U3Bpbigpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBOdW1iZXIocy5zdGF0ZVtTUElOX1BST1BfS0VZXSB8fCAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3BpbiBleGlzdHMuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IC0gRXhpc3RzIG9yIG5vdC5cbiAgICAgKi9cbiAgICBoYXNTcGluKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHMuY291bnRTcGluKCkgPiAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgc3BpbiBjb3VudC5cbiAgICAgKi9cbiAgICBwdXNoU3Bpbigpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHMuc2V0U3RhdGUoe1tTUElOX1BST1BfS0VZXTogcy5jb3VudFNwaW4oKSArIDF9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVjcmVtZW50IHNwaW4gY291bnQuXG4gICAgICovXG4gICAgcG9wU3Bpbigpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHMuc2V0U3RhdGUoe1tTUElOX1BST1BfS0VZXTogcy5jb3VudFNwaW4oKSAtIDF9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzdCBzcGluIGNvdW50XG4gICAgICovXG4gICAgcmVzZXRTcGluKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5zZXRTdGF0ZSh7W1NQSU5fUFJPUF9LRVldOiAwfSk7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcGVjc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZXRJbml0aWFsU3RhdGUoKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW1NQSU5fUFJPUF9LRVldOiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFNwaW5NaXhpbik7XG4iXX0=
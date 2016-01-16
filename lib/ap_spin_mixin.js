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

module.exports = Object.freeze(ApSpinMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3NwaW5fbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSWIsSUFBTSxhQUFhLEdBQUcsU0FBUzs7O0FBQUMsQUFHaEMsSUFBSSxXQUFXLEdBQUc7Ozs7Ozs7Ozs7O0FBVWQsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLGVBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDOUM7Ozs7OztBQU1ELFdBQU8scUJBQUU7QUFDTCxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDYixlQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7O0FBS0QsWUFBUSxzQkFBRTtBQUNOLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7Ozs7O0FBS0QsV0FBTyxxQkFBRTtBQUNMLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDcEQ7Ozs7O0FBS0QsYUFBUyx1QkFBRTtBQUNQLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxRQUFRLHFCQUFHLGFBQWEsRUFBRyxDQUFDLEVBQUUsQ0FBQztLQUNwQzs7Ozs7QUFLRCxtQkFBZSw2QkFBRTtBQUNiLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLG1DQUNLLGFBQWEsRUFBRyxDQUFDLEVBQ3JCO0tBQ0o7Ozs7OztBQU1ELHNCQUFrQixnQ0FBRyxFQUNwQjtBQUVELHFCQUFpQiwrQkFBRztBQUNoQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7QUFFRCw2QkFBeUIscUNBQUMsU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHVCQUFtQiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHNCQUFrQiw4QkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNoQjtBQUVELHdCQUFvQixrQ0FBRztBQUNuQixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7Q0FFSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJhcF9zcGluX21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiB0byBoYW5kbGUgc3Bpbi5cbiAqIEBjb25zdHJ1Y3RvciBBcFNwaW5NaXhpblxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU1BJTl9QUk9QX0tFWSA9IFwiX2FwU3BpblwiO1xuXG4vKiogQGxlbmRzIEFwU3Bpbk1peGluICovXG5sZXQgQXBTcGluTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogQ291bnQgYWN0aXZlIHNwaW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIE51bWJlciBvZiBzcGlucy5cbiAgICAgKi9cbiAgICBjb3VudFNwaW4oKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gTnVtYmVyKHMuc3RhdGVbU1BJTl9QUk9QX0tFWV0gfHwgMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHNwaW4gZXhpc3RzLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSAtIEV4aXN0cyBvciBub3QuXG4gICAgICovXG4gICAgaGFzU3Bpbigpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzLmNvdW50U3BpbigpID4gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHNwaW4gY291bnQuXG4gICAgICovXG4gICAgcHVzaFNwaW4oKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLnNldFN0YXRlKHtbU1BJTl9QUk9QX0tFWV06IHMuY291bnRTcGluKCkgKyAxfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCBzcGluIGNvdW50LlxuICAgICAqL1xuICAgIHBvcFNwaW4oKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLnNldFN0YXRlKHtbU1BJTl9QUk9QX0tFWV06IHMuY291bnRTcGluKCkgLSAxfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc3Qgc3BpbiBjb3VudFxuICAgICAqL1xuICAgIHJlc2V0U3Bpbigpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHMuc2V0U3RhdGUoe1tTUElOX1BST1BfS0VZXTogMH0pO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTUElOX1BST1BfS0VZXTogMFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBTcGluTWl4aW4pO1xuIl19
/**
 * Mixin to add uuid.
 * @constructor ApUuidMixin
 */

"use strict";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @lends ApUuidMixin */
var ApUuidMixin = {

    //--------------------
    // Custom
    //--------------------

    uuid: null,

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {
        var s = this;
        s.uuid = s.uuid || _uuid2.default.v4();
    }
};

module.exports = Object.freeze(ApUuidMixin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwX3V1aWRfbWl4aW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBTWIsSUFBSSxXQUFXLEdBQUc7Ozs7OztBQU1kLFFBQUksRUFBRSxJQUFJOzs7Ozs7Ozs7O0FBVVYsc0JBQWtCLGdDQUFHO0FBQ2pCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNiLFNBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxlQUFLLEVBQUUsRUFBRSxDQUFDO0tBQ2hDO0NBQ0osQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMiLCJmaWxlIjoiYXBfdXVpZF9taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb2t1bmlzaGluaXNoaS9wcm9qZWN0cy9hcGVtYW4tcmVhY3QtbWl4aW5zL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gdG8gYWRkIHV1aWQuXG4gKiBAY29uc3RydWN0b3IgQXBVdWlkTWl4aW5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcblxuLyoqIEBsZW5kcyBBcFV1aWRNaXhpbiAqL1xubGV0IEFwVXVpZE1peGluID0ge1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHV1aWQ6IG51bGwsXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHMudXVpZCA9IHMudXVpZCB8fCB1dWlkLnY0KCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKEFwVXVpZE1peGluKTtcbiJdfQ==
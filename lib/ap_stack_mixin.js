'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _apemanReactView = require('apeman-react-view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Mixin to handle stack
                                                                                                                                                                                                                   */

"use strict";

var INSETS_STATE_KEY = '_apStackInsets';

/** @lends ApStackMixin */
var ApStackMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Render a stack element.
     * @returns {object} - A react element.
     */

    renderStack: function renderStack() {
        var s = this;
        var state = s.state;
        var props = s.props;

        var insets = s.getStackInsets();
        return _react2.default.createElement(_apemanReactView.ApViewStack, { stacker: props.stacker,
            insetTop: insets.top || 0,
            insetRight: insets.right || 0,
            insetLeft: insets.left || 0,
            insetBottom: insets.bottom || 0
        });
    },

    /**
     * Get insets of the stack.
     * @returns {object}
     */
    getStackInsets: function getStackInsets() {
        var s = this;
        return s.state[INSETS_STATE_KEY] || {};
    },

    /**
     * Set insets of the stack.
     * @param {object} nextInsets - Insets to set.
     */
    setStackInsets: function setStackInsets(nextInsets) {
        var s = this;
        var insets = s.getStackInsets();
        s.setState(_defineProperty({}, INSETS_STATE_KEY, Object.assign(insets, nextInsets)));
    },

    /**
     * Bind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    bindStacker: function bindStacker(stacker) {
        var s = this;
        s._addStackerListener('push', s.stackedViewDidPush);
        s._addStackerListener('pop', s.stackedViewDidPop);
    },

    /**
     * Unbind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    unbindStacker: function unbindStacker(stacker) {
        var s = this;
        s._removeStackerListener('push', s.stackedViewDidPush);
        s._removeStackerListener('pop', s.stackedViewDidPop);
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        Stacker: _apemanReactView.ApViewStack.Stacker
    },

    propTypes: {
        stacker: _react.PropTypes.instanceOf(_apemanReactView.ApViewStack.Stacker).isRequired,
        stackInsets: _react.PropTypes.object
    },

    getInitialState: function getInitialState() {
        return _defineProperty({}, INSETS_STATE_KEY, {});
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount: function componentWillMount() {
        var s = this;
        var props = s.props;

        s.bindStacker(props.stacker);
    },
    componentDidMount: function componentDidMount() {
        var s = this;
        var props = s.props;

        if (props.stackInsets) {
            s.setStackInsets(props.stackInsets);
        }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var s = this;
        var props = s.props;

        if (nextProps.stackInsets) {
            s.setStackInsets(nextProps.stackInsets);
        }
        if (nextProps.stacker) {
            s.unbindStacker(props.stacker);
            s.bindStacker(nextProps.stacker);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        var s = this;
        var props = s.props;

        s.unbindStacker(props.stacker);
    },

    //------------------
    // Private
    //------------------

    _addStackerListener: function _addStackerListener(event, listner) {
        var s = this;
        var stacker = s.props.stacker;

        if (listner && stacker) {
            stacker.addListener(event, listner);
        }
    },
    _removeStackerListener: function _removeStackerListener(event, listner) {
        var s = this;
        var stacker = s.props.stacker;

        if (listner && stacker) {
            stacker.removeListener(event, listner);
        }
    }
};

module.exports = Object.freeze(ApStackMixin);
//# sourceMappingURL=data:application/json;base64,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QWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUM7S0FDSjtDQUVKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImFwX3N0YWNrX21peGluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL3Byb2plY3RzL2FwZW1hbi1yZWFjdC1taXhpbnMvbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaXhpbiB0byBoYW5kbGUgc3RhY2tcbiAqL1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwVmlld1N0YWNrfSBmcm9tICdhcGVtYW4tcmVhY3Qtdmlldyc7XG5cInVzZSBzdHJpY3RcIjtcblxuY29uc3QgSU5TRVRTX1NUQVRFX0tFWSA9ICdfYXBTdGFja0luc2V0cyc7XG5cbi8qKiBAbGVuZHMgQXBTdGFja01peGluICovXG5jb25zdCBBcFN0YWNrTWl4aW4gPSB7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgc3RhY2sgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgcmVhY3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICByZW5kZXJTdGFjaygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7c3RhdGUsIHByb3BzfSA9IHM7XG4gICAgICAgIGxldCBpbnNldHMgPSBzLmdldFN0YWNrSW5zZXRzKCk7XG4gICAgICAgIHJldHVybiA8QXBWaWV3U3RhY2sgc3RhY2tlcj17cHJvcHMuc3RhY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldFRvcD17aW5zZXRzLnRvcCB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0UmlnaHQ9e2luc2V0cy5yaWdodCB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0TGVmdD17aW5zZXRzLmxlZnQgfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldEJvdHRvbT17aW5zZXRzLmJvdHRvbSB8fCAwfVxuICAgICAgICA+XG4gICAgICAgIDwvQXBWaWV3U3RhY2s+O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IGluc2V0cyBvZiB0aGUgc3RhY2suXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTdGFja0luc2V0cygpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzLnN0YXRlW0lOU0VUU19TVEFURV9LRVldIHx8IHt9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IGluc2V0cyBvZiB0aGUgc3RhY2suXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRJbnNldHMgLSBJbnNldHMgdG8gc2V0LlxuICAgICAqL1xuICAgIHNldFN0YWNrSW5zZXRzKG5leHRJbnNldHMpe1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCBpbnNldHMgPSBzLmdldFN0YWNrSW5zZXRzKCk7XG4gICAgICAgIHMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW0lOU0VUU19TVEFURV9LRVldOiBPYmplY3QuYXNzaWduKGluc2V0cywgbmV4dEluc2V0cylcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RhY2tlciBldmVudHMuXG4gICAgICogQHBhcmFtIHtTdGFja2VyfSBzdGFja2VyIC0gQSBzdGFja2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGJpbmRTdGFja2VyKHN0YWNrZXIpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLl9hZGRTdGFja2VyTGlzdGVuZXIoJ3B1c2gnLCBzLnN0YWNrZWRWaWV3RGlkUHVzaCk7XG4gICAgICAgIHMuX2FkZFN0YWNrZXJMaXN0ZW5lcigncG9wJywgcy5zdGFja2VkVmlld0RpZFBvcCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBzdGFja2VyIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge1N0YWNrZXJ9IHN0YWNrZXIgLSBBIHN0YWNrZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgdW5iaW5kU3RhY2tlcihzdGFja2VyKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5fcmVtb3ZlU3RhY2tlckxpc3RlbmVyKCdwdXNoJywgcy5zdGFja2VkVmlld0RpZFB1c2gpO1xuICAgICAgICBzLl9yZW1vdmVTdGFja2VyTGlzdGVuZXIoJ3BvcCcsIHMuc3RhY2tlZFZpZXdEaWRQb3ApO1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3BlY3NcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIFN0YWNrZXI6IEFwVmlld1N0YWNrLlN0YWNrZXJcbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHN0YWNrZXI6IHR5cGVzLmluc3RhbmNlT2YoQXBWaWV3U3RhY2suU3RhY2tlcikuaXNSZXF1aXJlZCxcbiAgICAgICAgc3RhY2tJbnNldHM6IHR5cGVzLm9iamVjdFxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbSU5TRVRTX1NUQVRFX0tFWV06IHt9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMaWZlY3ljbGVcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuXG4gICAgICAgIHMuYmluZFN0YWNrZXIocHJvcHMuc3RhY2tlcik7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcbiAgICAgICAgaWYgKHByb3BzLnN0YWNrSW5zZXRzKSB7XG4gICAgICAgICAgICBzLnNldFN0YWNrSW5zZXRzKHByb3BzLnN0YWNrSW5zZXRzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcblxuICAgICAgICBpZiAobmV4dFByb3BzLnN0YWNrSW5zZXRzKSB7XG4gICAgICAgICAgICBzLnNldFN0YWNrSW5zZXRzKG5leHRQcm9wcy5zdGFja0luc2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRQcm9wcy5zdGFja2VyKSB7XG4gICAgICAgICAgICBzLnVuYmluZFN0YWNrZXIocHJvcHMuc3RhY2tlcik7XG4gICAgICAgICAgICBzLmJpbmRTdGFja2VyKG5leHRQcm9wcy5zdGFja2VyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgICAgIHMudW5iaW5kU3RhY2tlcihwcm9wcy5zdGFja2VyKTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIF9hZGRTdGFja2VyTGlzdGVuZXIoZXZlbnQsIGxpc3RuZXIpe1xuICAgICAgICBsZXQgcyA9IHRoaXMsXG4gICAgICAgICAgICB7c3RhY2tlcn0gPSBzLnByb3BzO1xuICAgICAgICBpZiAobGlzdG5lciAmJiBzdGFja2VyKSB7XG4gICAgICAgICAgICBzdGFja2VyLmFkZExpc3RlbmVyKGV2ZW50LCBsaXN0bmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmVtb3ZlU3RhY2tlckxpc3RlbmVyKGV2ZW50LCBsaXN0bmVyKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAge3N0YWNrZXJ9ID0gcy5wcm9wcztcbiAgICAgICAgaWYgKGxpc3RuZXIgJiYgc3RhY2tlcikge1xuICAgICAgICAgICAgc3RhY2tlci5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdG5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShBcFN0YWNrTWl4aW4pO1xuIl19
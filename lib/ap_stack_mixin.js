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
    // Custom
    //------------------

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
//# sourceMappingURL=data:application/json;base64,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YyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMxQztLQUNKO0NBRUosQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYXBfc3RhY2tfbWl4aW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29rdW5pc2hpbmlzaGkvcHJvamVjdHMvYXBlbWFuLXJlYWN0LW1peGlucy9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peGluIHRvIGhhbmRsZSBzdGFja1xuICovXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBWaWV3U3RhY2t9IGZyb20gJ2FwZW1hbi1yZWFjdC12aWV3JztcblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBJTlNFVFNfU1RBVEVfS0VZID0gJ19hcFN0YWNrSW5zZXRzJztcblxuLyoqIEBsZW5kcyBBcFN0YWNrTWl4aW4gKi9cbmNvbnN0IEFwU3RhY2tNaXhpbiA9IHtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDdXN0b21cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSBzdGFjayBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSByZWFjdCBlbGVtZW50LlxuICAgICAqL1xuICAgIHJlbmRlclN0YWNrKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtzdGF0ZSwgcHJvcHN9ID0gcztcbiAgICAgICAgbGV0IGluc2V0cyA9IHMuZ2V0U3RhY2tJbnNldHMoKTtcbiAgICAgICAgcmV0dXJuIDxBcFZpZXdTdGFjayBzdGFja2VyPXtwcm9wcy5zdGFja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0VG9wPXtpbnNldHMudG9wIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXRSaWdodD17aW5zZXRzLnJpZ2h0IHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXRMZWZ0PXtpbnNldHMubGVmdCB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0Qm90dG9tPXtpbnNldHMuYm90dG9tIHx8IDB9XG4gICAgICAgID5cbiAgICAgICAgPC9BcFZpZXdTdGFjaz47XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgaW5zZXRzIG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldFN0YWNrSW5zZXRzKCl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHMuc3RhdGVbSU5TRVRTX1NUQVRFX0tFWV0gfHwge307XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXQgaW5zZXRzIG9mIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dEluc2V0cyAtIEluc2V0cyB0byBzZXQuXG4gICAgICovXG4gICAgc2V0U3RhY2tJbnNldHMobmV4dEluc2V0cyl7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IGluc2V0cyA9IHMuZ2V0U3RhY2tJbnNldHMoKTtcbiAgICAgICAgcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbSU5TRVRTX1NUQVRFX0tFWV06IE9iamVjdC5hc3NpZ24oaW5zZXRzLCBuZXh0SW5zZXRzKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNwZWNzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBTdGFja2VyOiBBcFZpZXdTdGFjay5TdGFja2VyXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBzdGFja2VyOiB0eXBlcy5pbnN0YW5jZU9mKEFwVmlld1N0YWNrLlN0YWNrZXIpLmlzUmVxdWlyZWQsXG4gICAgICAgIHN0YWNrSW5zZXRzOiB0eXBlcy5vYmplY3RcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW0lOU0VUU19TVEFURV9LRVldOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTGlmZWN5Y2xlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQgcyA9IHRoaXM7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gcztcblxuICAgICAgICBzLmJpbmRTdGFja2VyKHByb3BzLnN0YWNrZXIpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG4gICAgICAgIGlmIChwcm9wcy5zdGFja0luc2V0cykge1xuICAgICAgICAgICAgcy5zZXRTdGFja0luc2V0cyhwcm9wcy5zdGFja0luc2V0cyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBsZXQge3Byb3BzfSA9IHM7XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5zdGFja0luc2V0cykge1xuICAgICAgICAgICAgcy5zZXRTdGFja0luc2V0cyhuZXh0UHJvcHMuc3RhY2tJbnNldHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc3RhY2tlcikge1xuICAgICAgICAgICAgcy51bmJpbmRTdGFja2VyKHByb3BzLnN0YWNrZXIpO1xuICAgICAgICAgICAgcy5iaW5kU3RhY2tlcihuZXh0UHJvcHMuc3RhY2tlcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgbGV0IHtwcm9wc30gPSBzO1xuICAgICAgICBzLnVuYmluZFN0YWNrZXIocHJvcHMuc3RhY2tlcik7XG4gICAgfSxcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ3VzdG9tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEJpbmQgc3RhY2tlciBldmVudHMuXG4gICAgICogQHBhcmFtIHtTdGFja2VyfSBzdGFja2VyIC0gQSBzdGFja2VyIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGJpbmRTdGFja2VyKHN0YWNrZXIpIHtcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xuICAgICAgICBzLl9hZGRTdGFja2VyTGlzdGVuZXIoJ3B1c2gnLCBzLnN0YWNrZWRWaWV3RGlkUHVzaCk7XG4gICAgICAgIHMuX2FkZFN0YWNrZXJMaXN0ZW5lcigncG9wJywgcy5zdGFja2VkVmlld0RpZFBvcCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBzdGFja2VyIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0ge1N0YWNrZXJ9IHN0YWNrZXIgLSBBIHN0YWNrZXIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgdW5iaW5kU3RhY2tlcihzdGFja2VyKSB7XG4gICAgICAgIGxldCBzID0gdGhpcztcbiAgICAgICAgcy5fcmVtb3ZlU3RhY2tlckxpc3RlbmVyKCdwdXNoJywgcy5zdGFja2VkVmlld0RpZFB1c2gpO1xuICAgICAgICBzLl9yZW1vdmVTdGFja2VyTGlzdGVuZXIoJ3BvcCcsIHMuc3RhY2tlZFZpZXdEaWRQb3ApO1xuICAgIH0sXG5cbiAgICBfYWRkU3RhY2tlckxpc3RlbmVyKGV2ZW50LCBsaXN0bmVyKXtcbiAgICAgICAgbGV0IHMgPSB0aGlzLFxuICAgICAgICAgICAge3N0YWNrZXJ9ID0gcy5wcm9wcztcbiAgICAgICAgaWYgKGxpc3RuZXIgJiYgc3RhY2tlcikge1xuICAgICAgICAgICAgc3RhY2tlci5hZGRMaXN0ZW5lcihldmVudCwgbGlzdG5lcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3JlbW92ZVN0YWNrZXJMaXN0ZW5lcihldmVudCwgbGlzdG5lcil7XG4gICAgICAgIGxldCBzID0gdGhpcyxcbiAgICAgICAgICAgIHtzdGFja2VyfSA9IHMucHJvcHM7XG4gICAgICAgIGlmIChsaXN0bmVyICYmIHN0YWNrZXIpIHtcbiAgICAgICAgICAgIHN0YWNrZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoQXBTdGFja01peGluKTtcbiJdfQ==
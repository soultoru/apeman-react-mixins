/**
 * React mixin set of apeman.
 * @module apeman-react-mixins
 */

"use strict";

module.exports = {
    /**
     * @name ApLayoutMixin
     */
    get ApLayoutMixin() { return require('./ap_layout_mixin'); },
    /**
     * @name ApLocaleMixin
     */
    get ApLocaleMixin() { return require('./ap_locale_mixin'); },
    /**
     * @name ApResizeMixin
     */
    get ApResizeMixin() { return require('./ap_resize_mixin'); },
    /**
     * @name ApStackMixin
     */
    get ApStackMixin() { return require('./ap_stack_mixin'); },
    /**
     * @name ApTouchMixin
     */
    get ApTouchMixin() { return require('./ap_touch_mixin'); }
};
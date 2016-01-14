/**
 * React mixin set of apeman.
 * @module apeman-react-mixins
 */

"use strict";

module.exports = {
    /**
     * @name ApLocaleMixin
     */
    get ApLocaleMixin() { return require('./ap_locale_mixin'); },
    /**
     * @name ApTouchMixin
     */
    get ApTouchMixin() { return require('./ap_touch_mixin'); }
};
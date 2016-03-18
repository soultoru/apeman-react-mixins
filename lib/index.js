/**
 * React mixin set of apeman.
 * @module apeman-react-mixins
 */

"use strict";

module.exports = {
    /**
     * @name ApCycleMixin
     */
    get ApCycleMixin() { return require('./ap_cycle_mixin'); },
    /**
     * @name ApEnvMixin
     */
    get ApEnvMixin() { return require('./ap_env_mixin'); },
    /**
     * @name ApExceptionMixin
     */
    get ApExceptionMixin() { return require('./ap_exception_mixin'); },
    /**
     * @name ApFlushMixin
     */
    get ApFlushMixin() { return require('./ap_flush_mixin'); },
    /**
     * @name ApFormMixin
     */
    get ApFormMixin() { return require('./ap_form_mixin'); },
    /**
     * @name ApHistoryMixin
     */
    get ApHistoryMixin() { return require('./ap_history_mixin'); },
    /**
     * @name ApLayoutMixin
     */
    get ApLayoutMixin() { return require('./ap_layout_mixin'); },
    /**
     * @name ApLocaleMixin
     */
    get ApLocaleMixin() { return require('./ap_locale_mixin'); },
    /**
     * @name ApOutsideMixin
     */
    get ApOutsideMixin() { return require('./ap_outside_mixin'); },
    /**
     * @name ApPageMixin
     */
    get ApPageMixin() { return require('./ap_page_mixin'); },
    /**
     * @name ApPureMixin
     */
    get ApPureMixin() { return require('./ap_pure_mixin'); },
    /**
     * @name ApResizeMixin
     */
    get ApResizeMixin() { return require('./ap_resize_mixin'); },
    /**
     * @name ApSideMixin
     */
    get ApSideMixin() { return require('./ap_side_mixin'); },
    /**
     * @name ApSpinMixin
     */
    get ApSpinMixin() { return require('./ap_spin_mixin'); },
    /**
     * @name ApStackMixin
     */
    get ApStackMixin() { return require('./ap_stack_mixin'); },
    /**
     * @name ApTimerMixin
     */
    get ApTimerMixin() { return require('./ap_timer_mixin'); },
    /**
     * @name ApToastMixin
     */
    get ApToastMixin() { return require('./ap_toast_mixin'); },
    /**
     * @name ApTouchMixin
     */
    get ApTouchMixin() { return require('./ap_touch_mixin'); },
    /**
     * @name ApUUIDMixin
     */
    get ApUUIDMixin() { return require('./ap_u_u_i_d_mixin'); },
    /**
     * @name ApViewMixin
     */
    get ApViewMixin() { return require('./ap_view_mixin'); },
    get events() { return require('./events'); }
};
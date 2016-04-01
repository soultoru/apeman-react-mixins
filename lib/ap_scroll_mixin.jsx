/**
 * Mixin for scroll.
 * @constructor ApScrollMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

/** @lends ApScrollMixin */
let ApScrollMixin = {

    //--------------------
    // Custom
    //--------------------
    $apScrollMixed: true,

    //--------------------
    // Specs
    //--------------------

    /**
     * Refresh iscroll size.
     * @param {number} [delay=0]
     */
    refreshIScroll(delay) {
        let s = this;
        clearTimeout(s._iScrollRefreshTimer);
        s._iScrollRefreshTimer = setTimeout(() => {
            let iScroll = s._iScroll;

            if (iScroll) {
                iScroll.refresh();
            }
        }, delay || 0);
    },

    /**
     * Handle iscroll init callback.
     * @param {Event} e - Init event.
     */
    handleIScrollInit(e) {
        let s = this;
        s._iScroll = e.iScroll;
    },

    /**
     * Get i scroll instance.
     * @returns {?Object}
     */
    getIScroll() {
        let s = this;
        return s._iScroll;
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillUnmount() {
        let s = this;

        clearTimeout(s._iScrollRefreshTimer);
    },

    //--------------------
    // Private
    //--------------------

    _iScrollRefreshTimer: -1

};

module.exports = Object.freeze(ApScrollMixin);

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


    handleIScrollInit(e) {
        let s = this;
        s._iScroll = e.iScroll;
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

/**
 * Mixin to handle side (client/server).
 * @constructor ApSideMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

/** @lends ApSideMixin */
let ApSideMixin = {

    //--------------------
    // Custom
    //--------------------
    $apSideMixed: true,

    /**
     * Check if server side or not.
     * @returns {boolean}
     */
    isSeverSide() {
        let s = this;
        return !s.isClientSide()
    },

    /**
     * Check if client side or not.
     * @returns {boolean}
     */
    isClientSide() {
        let s = this;
        return (typeof(window) !== 'undefined') && !!window && !!window.location;
    }

    //--------------------
    // Specs
    //--------------------

};

module.exports = Object.freeze(ApSideMixin);

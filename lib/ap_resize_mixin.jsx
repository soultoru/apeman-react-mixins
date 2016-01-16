/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const HANDLER_NOT_IMPLEMENTED_WARNING = '[ApResizeMixin] Should implement windowDidResize method.';

/** @lends ApResizeMixin */
let ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentDidMount() {
        let s = this;
        if (s.windowDidResize) {
            window.addEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    },

    componentWillUnmount() {
        let s = this;
        if (s.windowDidResize) {
            window.removeEventListener('resize', s.windowDidResize);
        }
    }

};

module.exports = Object.freeze(ApResizeMixin);

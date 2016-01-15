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

    componentWillMount() {
    },

    componentDidMount() {
        let s = this;
        if (s.windowDidResize) {
            window.addEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
        if (s.windowDidResize) {
            window.removeEventListener('resize', s.windowDidResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    }

};

module.exports = Object.freeze(ApResizeMixin);

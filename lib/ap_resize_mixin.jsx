/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const HANDLER_NOT_IMPLEMENTED_WARNING = '[ApResizeMixin] Should implement onResize method.';

/** @lends ApResizeMixin */
let ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------


    /**
     * Handle resize.
     * @returns {object} e - Resize event.
     */
    onResize: undefined,

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
        if (s.onResize) {
            window.addEventListener('resize', s.onResize);
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
        if (s.onResize) {
            window.removeEventListener('resize', s.onResize);
        } else {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
        }
    }

};

module.exports = Object.freeze(ApResizeMixin);

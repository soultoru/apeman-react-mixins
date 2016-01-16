/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const HANDLER_NOT_IMPLEMENTED_WARNING = '[ApLayoutMixin] Should implement doLayout method.';
const LAYOUT_INTERVAL = 40;

/** @lends ApResizeMixin */
let ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Reserve layout.
     */
    layout(){
        let s = this;
        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(()=> {
            s.doLayout();
        }, LAYOUT_INTERVAL);
    },

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
        if (!s.doLayout) {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
            return;
        }
        window.addEventListener('resize', s.layout);
        s.layout();
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        s.layout();
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
        window.removeEventListener('resize', s.layout);
    }

};

module.exports = Object.freeze(ApResizeMixin);

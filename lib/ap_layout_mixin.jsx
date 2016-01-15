/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const HANDLER_NOT_IMPLEMENTED_WARNING = '[ApLayoutMixin] Should implement doLayout method.';
const LAYOUT_INTERVAL = 100;

/** @lends ApResizeMixin */
let ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------
    _layoutIfNeeded(){
        let s = this;

        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(()=> {
            s.doLayout();
        }, LAYOUT_INTERVAL);
    },

    /**
     * Reserve layout.
     */
    setNeedsLayout(){
        let s = this;
        setTimeout(s._layoutIfNeeded, 0);
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
        }
        window.addEventListener('resize', s._layoutIfNeeded);

        setTimeout(s._layoutIfNeeded, LAYOUT_INTERVAL / 2);
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        setTimeout(s._layoutIfNeeded, LAYOUT_INTERVAL / 2);
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
        window.removeEventListener('resize', s._layoutIfNeeded);
    }

};

module.exports = Object.freeze(ApResizeMixin);

/**
 * Mixin to handle resize.
 * @constructor ApResizeMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const HANDLER_NOT_IMPLEMENTED_WARNING = '[ApLayoutMixin] Should implement doLayout method.';
const LAYOUT_INTERVAL = 80;

/** @lends ApResizeMixin */
let ApResizeMixin = {

    //--------------------
    // Custom
    //--------------------
    $apResizeMixed: true,

    _layoutTimer: null,

    /**
     * Reserve layout.
     */
    layout(immidate){
        let s = this;
        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(()=> {
            s.doLayout();
        }, immidate ? 0 : LAYOUT_INTERVAL);
    },

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentDidMount() {
        let s = this;
        if (!s.doLayout) {
            console.warn(HANDLER_NOT_IMPLEMENTED_WARNING);
            return;
        }
        window.addEventListener('resize', s.layout);
        s.layout(true);
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        s.layout();
    },

    componentWillUnmount() {
        let s = this;
        clearTimeout(s._layoutTimer);
        window.removeEventListener('resize', s.layout);
        delete  s._layoutTimer;
    }

};

module.exports = Object.freeze(ApResizeMixin);

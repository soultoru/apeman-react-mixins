/**
 * Mixin to handle resize.
 * @constructor ApLayoutMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import deepEqual from 'deep-equal';

const LAYOUT_INTERVAL = 80;

/** @lends ApLayoutMixin */
let ApLayoutMixin = {

    //--------------------
    // Custom
    //--------------------
    $apLayoutMixed: true,

    /**
     * Reserve layout.
     */
    layout(immidate){
        let s = this,
            {props} = s;
        clearTimeout(s._layoutTimer);
        s._layoutTimer = setTimeout(()=> {
            if (!s.isMounted()) {
                return;
            }
            let layout = s.calcLayout && s.calcLayout(),
                changed = !deepEqual(s.getLayout(), layout);
            if (changed) {
                s._layout = layout;
                s.forceUpdate();
                props.onLayout(s.getLayout());
            }

            // Fallback
            if (s.doLayout) {
                s.doLayout();
            }

        }, immidate ? 0 : LAYOUT_INTERVAL);
    },

    /**
     * Get calculated layout values.
     * @returns {object}
     */
    getLayout(){
        let s = this;
        return s._layout;
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        onLayout: types.func
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentDidMount() {
        let s = this;
        let noop = () => undefined;
        s.getLayout = s.getLayout || noop;
        if (s.doLayout) {
            console.warn('[ApLayoutMixin] .doLayout() is deprecated. use .calcLayout() instead.');
            return;
        }
        if (!s.calcLayout) {
            console.warn('[ApLayoutMixin] Should implement .calcLayout()');
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
    },

    //--------------------
    // Private
    //--------------------

    _layout: null,
    _layoutTimer: null

};

module.exports = Object.freeze(ApLayoutMixin);

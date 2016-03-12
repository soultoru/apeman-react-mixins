/**
 * Mixin to handle resize.
 * @constructor ApLayoutMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import deepEqual from 'deep-equal';
import defaults from 'defaults';
import {ApLayoutEvent} from './events';

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
            let layouts = s.calcLayouts && s.calcLayouts(),
                changed = !deepEqual(s.layouts, layouts);
            if (changed) {
                s.componentWillLayout(layouts);
                s.layouts = layouts;
                s.forceUpdate();
                if (props.onLayout) {
                    let event = new ApLayoutEvent({layouts});
                    props.onLayout(event);
                }
                s.componentDidLayout(layouts);
            }

            // Fallback
            if (s.doLayout) {
                s.doLayout();
            }

        }, immidate ? 0 : LAYOUT_INTERVAL);
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

    componentWillMount(){
        let s = this;
        if (s.getInitialLayouts) {
            s.layouts = s.getInitialLayouts();
        }
        let noop = () => undefined;

        defaults(s, {
            componentWillLayout: noop,
            componentDidLayout: noop
        });
    },
    componentDidMount() {
        let s = this;
        if (s.doLayout) {
            console.warn('[ApLayoutMixin] .doLayout() is deprecated. use .calcLayouts() instead.');
            return;
        }
        if (!s.calcLayouts) {
            console.warn('[ApLayoutMixin] Should implement .calcLayouts()');
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
        delete s._layoutTimer;
    },

    //--------------------
    // Private
    //--------------------

    layouts: null,
    _layoutTimer: null

};

module.exports = Object.freeze(ApLayoutMixin);

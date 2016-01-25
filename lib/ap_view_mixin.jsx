/**
 * Mixin for views
 */
"use strict";

import React, {PropTypes as types} from 'react';
import {ApViewStack} from 'apeman-react-view';

/** @lends ApViewMixin */
const ApViewMixin = {

    //--------------------
    // Custom
    //--------------------
    $apViewMixed: true,

    /**
     * Pop this view from the current stack only if this view is the top.
     */
    popThisViewFromCurrentStack(){
        let s = this;
        let {props} = s;
        let topView = props.viewTop();
        let isTop = topView.id === props.viewId;
        if (!isTop) {
            console.warn('The top view of current stack is not this view.');
            return;
        }
        s.popViewFromCurrentStack();
    },

    /**
     * Pop a view from the current stack.
     */
    popViewFromCurrentStack(){
        let s = this;
        let {props} = s;
        props.viewPop();
    },

    /**
     * Push a view to the current stack.
     * @param {object} view - View component class.
     * @param {object} params - View params.
     * @param {string} way - View push way.
     */
    pushViewToCurrentStack(view, params, way){
        let s = this;
        let {props} = s;
        props.viewPush(view, params, way);
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        viewId: types.string.isRequired,
        viewWay: types.string.isRequired,
        viewPush: types.func.isRequired,
        viewPop: types.func.isRequired,
        viewTop: types.func.isRequired
    },

    getDefaultProps() {
        return {
            viewId: null,
            viewWay: null,
            viewPush: null,
            viewPop: null,
            viewTop: null
        }
    }

};

module.exports = Object.freeze(ApViewMixin);

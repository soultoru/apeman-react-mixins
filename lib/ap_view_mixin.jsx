/**
 * Mixin for views
 */
"use strict";

import React, {PropTypes as types} from 'react';

/** @lends ApViewMixin */
const ApViewMixin = {

    //--------------------
    // Custom
    //--------------------
    $apViewMixed: true,

    /**
     * Pop this view from the current stack only if this view is the top.
     */
    popThisViewFromCurrentStack() {
        let s = this;
        let {props} = s;
        let topView = props.viewTop();
        let isTop = topView.id === props.viewId;
        if (!isTop) {
            console.warn('The top view of current stack is not this view.');
            return;
        }
        return s.popViewFromCurrentStack();
    },

    /**
     * Pop a view from the current stack.
     */
    popViewFromCurrentStack() {
        let s = this;
        return s._popView();
    },

    /**
     * Push a view to the current stack.
     * @param {object} view - View component class.
     * @param {object} params - View params.
     * @param {string} way - View push way.
     */
    pushViewToCurrentStack(view, params, way) {
        let s = this;
        return s._pushView(view, params, way);
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        viewId: types.string.isRequired,
        viewWay: types.string.isRequired,
        viewPush: types.func.isRequired,
        viewPop: types.func.isRequired,
        viewTop: types.func.isRequired,
        onViewPop: types.func,
        onViewPush: types.func
    },

    getDefaultProps() {
        let noop = (values => values);
        return {
            viewId: null,
            viewWay: null,
            viewPush: null,
            viewPop: null,
            viewTop: null,
            onViewPop: noop,
            onViewPush: noop
        }
    },

    //--------------------
    // Private
    //--------------------

    _pushView(view, params, way) {
        let s = this,
            {props} = s;
        return props.viewPush(view, params, way).then(props.onViewPush);
    },

    _popView() {
        let s = this,
            {props} = s;
        return props.viewPop().then(props.onViewPop);
    }

};

module.exports = Object.freeze(ApViewMixin);

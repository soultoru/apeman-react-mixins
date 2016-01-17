/**
 * Mixin for stackable views
 */
import React, {PropTypes as types} from 'react';
import {ApViewStack} from 'apeman-react-view';
"use strict";


/** @lends ApStackMixin */
const ApStackMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Pop this view from the current stack only if this view is the top.
     */
    popThisViewFromCurrentStack(){
        let s = this;
        let {props} = s;
        let topView = props.viewTop();
        let isTop = topView.viewId === props.viewId;
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

    propTypes: {},

    getInitialState() {
        return {};
    },

    getDefaultProps() {
        return {
            viewId: null,
            viewWay: null,
            viewPush: null,
            viewPop: null,
            viewTop: null
        }
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        let {props} = s;
    },

    componentDidMount() {
        let s = this;
        let {props} = s;
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        let {props} = s;
    },

    componentWillUnmount() {
        let s = this;
        let {props} = s;
    }

};

module.exports = Object.freeze(ApStackMixin);

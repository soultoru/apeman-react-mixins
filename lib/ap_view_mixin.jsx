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
     * Pop this view from parent stack.
     */
    popThisView(){
        let s = this;
        let {props} = s;
        props.viewPop(props.viewId);
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        viewId: types.string.isRequired,
        viewWay: types.string.isRequired,
        viewPop: types.func.isRequired
    },

    propTypes: {},

    getInitialState() {
        return {};
    },

    getDefaultProps() {
        return {
            viewId: null,
            viewWay: null
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

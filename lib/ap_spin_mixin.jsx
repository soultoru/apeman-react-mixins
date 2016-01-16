/**
 * Mixin to handle spin.
 * @constructor ApSpinMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const SPIN_PROP_KEY = "_apSpin";

/** @lends ApSpinMixin */
let ApSpinMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Count active spin
     * @returns {number} - Number of spins.
     */
    countSpin(){
        let s = this;
        return Number(s.state[SPIN_PROP_KEY] || 0);
    },

    /**
     * Check if spin exists.
     * @returns {boolean} - Exists or not.
     */
    hasSpin(){
        let s = this;
        return s.countSpin() > 0;
    },

    /**
     * Increment spin count.
     */
    pushSpin(){
        let s = this;
        s.setState({[SPIN_PROP_KEY]: s.countSpin() + 1});
    },

    /**
     * Decrement spin count.
     */
    popSpin(){
        let s = this;
        s.setState({[SPIN_PROP_KEY]: s.countSpin() - 1});
    },

    /**
     * Rest spin count
     */
    resetSpin(){
        let s = this;
        s.setState({[SPIN_PROP_KEY]: 0});
    },

    //--------------------
    // Specs
    //--------------------
    getInitialState(){
        let s = this;
        return {
            [SPIN_PROP_KEY]: 0
        }
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
    },

    componentDidMount() {
        let s = this;
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
    }

};

module.exports = Object.freeze(ApSpinMixin);

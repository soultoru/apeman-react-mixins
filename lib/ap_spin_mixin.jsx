/**
 * Mixin to handle spin.
 * @constructor ApSpinMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import argx from 'argx';

const SPIN_PROP_KEY = "_apSpin";

/** @lends ApSpinMixin */
let ApSpinMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Count active spin.
     * @param {string} name - Name of spin.
     * @returns {number} - Number of spins.
     */
    getSpinCount(name){
        let s = this;
        name = name || 'default';
        let counts = s.state[SPIN_PROP_KEY] || {};
        return Number(counts[name] || 0);
    },

    /**
     * Set active spin count.
     * @param {string} name - Name of spin.
     * @param {number} count  - Count to set.
     */
    setSpinCount(name, count){
        let s = this;
        name = name || 'default';
        let counts = s.state[SPIN_PROP_KEY] || {};
        counts[name] = count;
        s.setState({[SPIN_PROP_KEY]: counts});
    },

    /**
     * Check if spin exists.
     * @returns {boolean} - Exists or not.
     */
    hasSpin(name){
        let s = this;
        name = name || 'default';
        return s.getSpinCount(name) > 0;
    },

    /**
     * Increment spin count.
     * @param {string} name - Name of spin.
     */
    incrementSpinCount(name){
        let s = this;
        s.setSpinCount(name, s.getSpinCount(name) + 1);
    },

    /**
     * Decrement spin count.
     * @param {string} name - Name of spin.
     */
    decrementSpinCount(name){
        let s = this;
        s.setSpinCount(name, s.getSpinCount(name) - 1);
    },

    /**
     * Rest spin count
     * @param {string} name - Name of spin.
     */
    resetSpinCount(name){
        let s = this;
        s.setSpinCount(name, 0);
    },

    /**
     * Add spin count while active.
     * @param {string} name - Name of spin.
     * @param {function} action - Action to do.
     */
    spinWhile(name, action){
        let args = argx(arguments);
        name = args.shift('string');
        action = args.pop('function');
        let s = this;
        s.incrementSpinCount(name);
        let promise = action();
        if (!promise) {
            throw new Error('[ApSpinMixin] action must return a promise.');
        }
        return promise.then(() => {
            s.decrementSpinCount(name);
        });
    },

    //--------------------
    // Specs
    //--------------------
    getInitialState(){
        let s = this;
        return {
            [SPIN_PROP_KEY]: {}
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApSpinMixin);

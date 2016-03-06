/**
 * Mixin for timer.
 * @constructor ApTimerMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

/** @lends ApTimerMixin */
let ApTimerMixin = {

    //--------------------
    // Custom
    //--------------------
    $apTimerMixed: true,

    /**
     * Set a timer with name
     * @param {string} name - Name of the timer.
     * @param {function} handler - Handler function.
     * @param {number} duration - Timeout duration.
     */
    setTimer(name, handler, duration){
        let s = this;
        s._timers[name] = setTimeout(handler, duration);
    },

    /**
     * Clear and set timer.
     * @param {string} name - Name of the timer.
     * @param {function} handler - Handler function.
     * @param {number} duration - Timeout duration.
     */
    resetTimer(name, handler, duration){
        let s = this;
        s.clearTimer(name);
        s.setTimer(name, handler, duration);
    },

    /**
     * Clear a timer with name.
     * @param {string} name - Name of timer.
     */
    clearTimer(name){
        let s = this;
        if (s._timers.hasOwnProperty(name)) {
            clearTimeout(s._timers[name]);
            delete s._timers[name];
        }
    },

    /**
     * Clear all timers.
     */
    clearAllTimers(){
        let s = this;
        for (let name of Object.keys(s._timers)) {
            s.clearTimer(name);
        }
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        s._timers = {};
    },


    componentWillUnmount() {
        let s = this;

        s.clearAllTimers();
        delete s._timers;
    }


};

module.exports = Object.freeze(ApTimerMixin);
